if ($ == undefined)
    throw new Error("jQuery is not referenced");

if (ko == undefined)
    throw new Error("KnockoutJS is not referenced");

function PlotControl(controlSelector) {
    if (controlSelector == undefined)
        throw new Error("controlSelector is not passed into PlotControl constructor");
    var control = $(controlSelector);
    if (control.length == 0)
        throw new Error("jQuery did not find anything for specified controlSelector: " + controlSelector);
    if (control.length > 2)
        throw new Error("controlSelector: " + controlSelector + " is ambigious. Found " + control.length + " element(s)");

    this.controlSelector = controlSelector;
    this.control = control; // use 'control' variable to reference PlotControl instance
    this.plotModel = new PlotModel();
    this.plotModel.plotControl = control;
    
    this.selectors = {
        dialog: "div[name='select-value-dialog']",
        plotLeft: "div[name='plotLeft']",
        plotCenter: "div[name='plotCenter']"
    };

    this.dialog = new PlotDialog(this.selectors.dialog);

    this.children = {
        add1: control.find("[name='add1']"),
        add2: control.find("[name='add2']"),
        edit1: control.find("[name='edit1']"),
        edit2: control.find("[name='edit2']"),
        remove1: control.find("[name='remove1']"),
        remove2: control.find("[name='remove2']"),
        zoomX: control.find("[name='zoomX']"),
        zoomY: control.find("[name='zoomY']"),
        showHints: control.find("[name='showHints']"),
        seriesY1: control.find("[name='seriesY1']"),
        seriesY2: control.find("[name='seriesY2']"),
        plotContainer: control.find(".plotContainer"),
        applyChanges: control.find("[name='applyChanges']"),
        dateFrom: control.find("[name='dateFrom']"),
        dateTo: control.find("[name='dateTo']")
    };

    ko.applyBindings(this.plotModel, control[0]);

    var dtPicker = function(dp) {
        dp.datepicker({ showOn: "button", buttonImage: "/Content/Images/calendar.gif", buttonImageOnly: true });
    };
    dtPicker(this.children.dateFrom);
    dtPicker(this.children.dateTo);

    this.setLayout();
    this.setHandlers();
    this.plotModel.render();
};

PlotControl.prototype.setLayout = function() {
    this.control.parent().layout({
        west__minSize: 300
		, west__resizable: false
		, west__paneSelector: this.controlSelector + " " + this.selectors.plotLeft
		, center__paneSelector: this.controlSelector + " " + this.selectors.plotCenter 
    });
};

PlotControl.prototype.removeSeries = function (seriesControl, seriesArray) {
    var index = seriesControl[0].selectedIndex;
    if (index >= 0 && index < seriesArray().length)
        seriesArray.splice(index, 1);    
};

PlotControl.prototype.applyChanges = function() {
    if (this.plotModel.y1_series().length > 0 || this.plotModel.y2_series().length > 0) {

        for (var i = 0; i < this.plotModel.y1_series().length; i++)
            $.getJSON(constants.urls.getPlotData, {
                deviceUID: this.plotModel.y1_series()[i].deviceUID,
                parameterId: this.plotModel.y1_series()[i].parameterId,
                fromDate: this.plotModel.dateFrom(),
                toDate: this.plotModel.dateTo()
            }, this.plotModel.processing.next);

        for (i = 0; i < this.plotModel.y2_series().length; i++)
            $.getJSON(constants.urls.getPlotData, {
                deviceUID: this.plotModel.y2_series()[i].deviceUID,
                parameterId: this.plotModel.y2_series()[i].parameterId,
                fromDate: this.plotModel.dateFrom(),
                toDate: this.plotModel.dateTo()
            }, this.plotModel.processing.next);
        
    } else {
        alert("Выберите данные для построения графика!");
    }
};

PlotControl.prototype.setHandlers = function () {
    var sender = this;
    sender.children.add1.click(function () { sender.dialog.show(sender.plotModel.y1_series, sender.plotModel.selectedQueryType()); });
    sender.children.add2.click(function () { sender.dialog.show(sender.plotModel.y2_series, sender.plotModel.selectedQueryType()); });
    sender.children.edit1.click(function () { sender.dialog.show(sender.plotModel.y1_series, sender.plotModel.selectedQueryType(), sender.plotModel.y1_selected()); });
    sender.children.edit2.click(function () { sender.dialog.show(sender.plotModel.y2_series, sender.plotModel.selectedQueryType(), sender.plotModel.y2_selected()); });
    sender.children.remove1.click(function () { sender.removeSeries(sender.children.seriesY1, sender.plotModel.y1_series); });
    sender.children.remove2.click(function () { sender.removeSeries(sender.children.seriesY2, sender.plotModel.y2_series); });

    var previousPoint = null;
    sender.children.plotContainer.bind("plothover", function (event, pos, item) {
        $("#x").text(pos.x.toFixed(2));
        $("#y").text(pos.y.toFixed(2));

        if (item) {
            if (previousPoint != item.dataIndex) {
                previousPoint = item.dataIndex;

                sender.hideTooltip();
                var x = new Date(item.datapoint[0]).toKpwsTimeStamp(), y = item.datapoint[1].toFixed(2);
                sender.showTooltip(item.pageX, item.pageY, x + ", " + (item.series.label ? item.series.label : "Y") + " = " + y);
            }
        }
        else {
            sender.hideTooltip();
            previousPoint = null;
        }
    });

    sender.children.applyChanges.click(function () { sender.applyChanges(); });
};

PlotControl.prototype.showTooltip = function (x, y, contents) {
    $('<div class="tooltip">' + contents + '</div>').css({
        position: 'absolute',
        display: 'none',
        top: y + 5,
        left: x + 5,
        border: '1px solid #fdd',
        padding: '2px',
        'z-index': 999,
        'background-color': '#fee',
        opacity: 0.80
    }).appendTo("body").fadeIn(200);
}
PlotControl.prototype.hideTooltip = function () {
    $("div.tooltip").remove();
};
function PlotModel() {
    this.plotControl = undefined;
    this.title = ko.observable("");
    this.selectedQueryType = ko.observable();
    this.y1_series = ko.observableArray();
    this.y1_selected = ko.observable();
    this.y2_series = ko.observableArray();
    this.y2_selected = ko.observable();
    this.dateFrom = ko.observable(new Date().toKpwsString());
    this.dateTo = ko.observable(new Date().toKpwsString());
    
    var sender = this;
    this.getQueryTypes = function() {
        $.getJSON(constants.urls.getQueryTypes, function(data) {
            var result = [];
            for (var i = 0; i < data.length; i++)
                result.push(new ArchiveType(data[i].id, data[i].title));
            sender.queryTypes(result);
        });
    };
    this.queryTypes = ko.onDemandObservable(this.getQueryTypes, this);

    this.showLines = ko.observable(true);
    this.showHints = ko.observable(true);
    this.colorY1 = ko.observable('FF0000');
    this.colorY2 = ko.observable('00FF00');
    this.zoomX = ko.observable(true);
    this.zoomY = ko.observable(false);

    this.plotOptions = ko.dependentObservable(function () {
        var result = {
            series: {
                lines: { show: this.showLines() },
                points: { show: this.showHints() }
            },
            xaxes: [{ mode: 'time', monthNames: ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"], zoomRange: this.zoomX() == false ? false : undefined}],
            yaxes: [{ position: 'left', color: '#'+this.colorY1(), zoomRange: this.zoomY() == false ? false : undefined }, { position: 'right', color: '#'+this.colorY2(), zoomRange: this.zoomY() == false ? false : undefined}],
            grid: { hoverable: this.showHints(), clickable: this.showHints() },
            zoom: { interactive: true },
            pan: { interactive: true }
        };
        return result;
    }, this);

    this.processing = {
        seriesIndex: undefined,
        y1_series: [],
        y2_series: []
    };

    this.render = function (newPlotOptions) {
        if (sender.plotControl == undefined)
            return;

        var plotOptions = newPlotOptions ? newPlotOptions : sender.plotOptions();

        if ((sender.processing.y1_series.length + sender.processing.y2_series.length) > 0) {

            var data = [];

            for (var i = 0; i < sender.processing.y1_series.length; i++)
                if (sender.y1_series()[i].visible)
                    data.push({ data: sender.processing.y1_series[i], label: sender.y1_series()[i].title, yaxis: 1, color: '#' + sender.y1_series()[i].color });

            for (i = 0; i < sender.processing.y2_series.length; i++)
                if (sender.y2_series()[i].visible)
                    data.push({ data: sender.processing.y2_series[i], label: sender.y2_series()[i].title, yaxis: 2, color: '#' + sender.y2_series()[i].color });

            this.plotRef = $.plot(sender.plotControl.find(".plotContainer"), data, plotOptions);
        }
        else {
            this.plotRef = $.plot(sender.plotControl.find(".plotContainer"), [[[0, 3], [4, 8], [8, 5], [9, 13]]], plotOptions);
        }
    };

    this.plotOptions.subscribe(this.render);

    this.processing.start = function () {
        this.seriesIndex = 0;
        sender.processing.y1_series = [];
        sender.processing.y2_series = [];
    };

    this.processing.finish = function () {
        this.seriesIndex = undefined;
        sender.render();
    };
    this.processing.inProgress = function () {
        return this.seriesIndex != undefined;
    };

    this.processing.next = function (data) {
        var me = sender.processing;
        if (!me.inProgress())
            me.start();

        if (me.seriesIndex < sender.y1_series().length)
            me.y1_series.push(data);
        else
            me.y2_series.push(data);

        me.seriesIndex++;

        if (me.seriesIndex >= (sender.y1_series().length + sender.y2_series().length))
            me.finish();
    };
};

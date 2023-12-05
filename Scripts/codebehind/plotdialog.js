if ($ == undefined)
    throw new Error("jQuery is not referenced");

if ($.Watermark == undefined)
    throw new Error("jQuery WatermarkInput plugin is not referenced");

function PlotDialog(dialogSelector) {
    if (dialogSelector == undefined)
        throw new Error("Вы должны указать jQuery селектор диалога");
    this.dialogSelector = dialogSelector;
    this.selectors = {
        apply: "[name='applyValue']",
        cancel: "[name='cancelValue']",
        txtSeriesName: "[name='name']"
    };
    this.model = null;
};

PlotDialog.prototype.cancel = function (sender) {
    $(sender.dialogSelector).dialog("close");
};

PlotDialog.prototype.ok = function (sender) {
    if (seriesModel.validate()) {
        if (!sender.model)
            sender.seriesCollection.push(new PlotSeries(seriesModel));
        else {
            sender.model.fillWith(seriesModel);
            sender.seriesCollection.remove(sender.model);
            sender.seriesCollection.push(sender.model);
        }
        sender.cancel(sender);
    }
    else
        alert("Не выбран параметр!");
};

PlotDialog.prototype.show = function (seriesCollection, queryType, selectedSeries) {

    if (seriesCollection == undefined)
        throw new Error("seriesCollection is undefined");

    if (queryType == undefined) {
        alert("Выберите тип архива!");
        return;
    }

    seriesModel.clear();
    seriesModel.selectedArchiveType(queryType);

    if (this.subscription) {
        this.subscription.dispose();
        this.subscription = null;
    };

    this.seriesCollection = seriesCollection;
    this.model = selectedSeries ? selectedSeries : null;
    this.subscription = seriesModel.selectedParameterTitle.subscribe(function (txtValue) {
        seriesModel.seriesName(txtValue ? txtValue : "Введите название серии точек...");
    });

    if (this.model)
        this.model.fill(seriesModel);

    var sender = this;
    var jqSelect = function (selector) { return $(sender.dialogSelector + " " + selector); };
    jqSelect(this.selectors.apply).unbind('click');
    jqSelect(this.selectors.apply).bind('click', function () { sender.ok(sender); });

    jqSelect(this.selectors.cancel).unbind('click');
    jqSelect(this.selectors.cancel).bind('click', function () { sender.cancel(sender); });

    $(this.dialogSelector).dialog({
        modal: true,
        width: 500,
        height: 300
    });
};


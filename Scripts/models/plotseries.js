PlotSeries.prototype.fillWith = function (seriesModel) {
    this.queryId = seriesModel.selectedArchiveType();
    this.deviceUID = seriesModel.selectedDeviceId();
    this.parameterId = seriesModel.selectedParameterId();
    this.title = seriesModel.seriesName();
    this.groupId = seriesModel.selectedGroupId();
    this.channelId = seriesModel.selectedChannelId();
    this.visible = seriesModel.isVisible();
    this.color = seriesModel.seriesColor();
};

PlotSeries.prototype.fill = function (seriesModel) {
    var sender = this;
    var objects = [];

    objects.push(seriesModel.channels.subscribe(function (newValue) {
        seriesModel.selectedChannelId(sender.channelId);
    }));

    objects.push(seriesModel.devices.subscribe(function (newValue) {
        seriesModel.selectedDeviceId(sender.deviceUID);
    }));

    seriesModel.selectedArchiveType(sender.queryId);
    seriesModel.selectedGroupId(sender.groupId);

    seriesModel.seriesName(sender.title);
    seriesModel.seriesColor(sender.color);
    seriesModel.isVisible(sender.visible);
    for (var i = 0; i < objects.length; i++)
        objects[i].dispose();

};

function PlotSeries(seriesModel) {
    if (seriesModel == undefined)
        throw new Error("Вы должны задать прибор, параметр и название для выводимой линии на графике");
    this.fillWith(seriesModel);
}
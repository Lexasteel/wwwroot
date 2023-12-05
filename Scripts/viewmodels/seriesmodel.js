var seriesModel = {
    type: 'seriesModel',
    seriesName: ko.observable(),
    selectedArchiveType: ko.observable(),
    selectedGroupId: ko.observable(),
    selectedDeviceId: ko.observable(),
    selectedChannelId: ko.observable(),
    selectedParameterId: ko.observable(),
    isVisible: ko.observable(true),
    seriesColor: ko.observable('0000FF')
};

seriesModel.clear = function () {
    this.seriesName("Введите название серии точек...");
    this.selectedParameterId(undefined);
    this.selectedChannelId(undefined);
    this.selectedDeviceId(undefined);
    this.selectedGroupId(undefined);
    this.selectedArchiveType(undefined);
    this.isVisible(true);
    this.seriesColor('0000FF');
};

seriesModel.validate = ko.dependentObservable(function () {
    return (this.selectedDeviceId() != undefined && this.selectedParameterId() != undefined) ? true : false;
}, seriesModel);

// Groups

seriesModel.getGroups = function () {
    $.getJSON(constants.urls.getGroups, function (data) {
        var result = [];
        for (var i = 0; i < data.length; i++)
            result.push(new Group(data[i].id, data[i].name));
        seriesModel.groups(result);
    });
};

seriesModel.groups = ko.onDemandObservable(seriesModel.getGroups, seriesModel);

seriesModel.selectedGroup = ko.dependentObservable(function () {
    return this.groups() ? this.groups().findId(seriesModel.selectedGroupId()) : undefined;
}, seriesModel);

// Devices

seriesModel.devices = ko.dependentObservable(function () {
    return this.selectedGroup() ? this.selectedGroup().devices() : [];
}, seriesModel);

seriesModel.selectedDevice = ko.dependentObservable(function () {
    return this.selectedDeviceId() ? this.devices().findId(seriesModel.selectedDeviceId()) : undefined;
}, seriesModel);

// Channels

seriesModel.channels = ko.dependentObservable(function () {
    return this.selectedDevice() ? this.selectedDevice().channels() : [];
}, seriesModel);

// Paramters

seriesModel.parameters = ko.observable();

seriesModel.getParameters = ko.dependentObservable(function () {
    var sender = this;
    
    if (!(this.selectedDeviceId() != undefined & this.selectedChannelId() != undefined & this.selectedArchiveType() != undefined)) {
        sender.parameters([]);
        return;
    }
    
    $.getJSON(constants.urls.getParams, { deviceUID: this.selectedDeviceId(), channel: this.selectedChannelId(), queryType: this.selectedArchiveType() }, function (data) {
        var result = [];
        for (var i = 0; i < data.length; i++)
            result.push(new Parameter(data[i].id, data[i].title));
        sender.parameters(result);
    });
}, seriesModel);

seriesModel.parameters = ko.onDemandObservable(seriesModel.getParameters, seriesModel);

seriesModel.selectedParameterTitle = ko.dependentObservable(function () {
    return this.parameters() != undefined & this.selectedParameterId() != undefined ? 
        this.parameters().findId(this.selectedParameterId()).title.trim() : undefined;
}, seriesModel);

seriesModel.suggestEnabled = ko.dependentObservable(function () {
    return this.selectedParameterTitle() == undefined || this.selectedParameterTitle() != this.seriesName();
}, seriesModel);
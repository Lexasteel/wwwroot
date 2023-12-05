Device.prototype.getChannels = function () {
    var sender = this;
    $.getJSON(constants.urls.getChannels, { deviceUID: sender.id }, function (data) {
        var result = [];
        for (var i = 0; i < data.length; i++)
            result.push(new Channel(data[i].id, data[i].title));
        sender.channels(result);
    });
};

function Device(id, title) {
    if (title != undefined && id != undefined) {
        this.id = id;
        this.title = title;
        this.channels = ko.onDemandObservable(this.getChannels, this);
    }
    else {
        throw new Error("Прибор должен иметь название и идентификатор!");
    }
}

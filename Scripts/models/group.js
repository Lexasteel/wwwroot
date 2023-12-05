Group.prototype.getDevices = function () {
    var sender = this;
    $.getJSON(constants.urls.getDevices, { groupId: sender.id, showDisplayedNames: true }, function (data) {
        var result = [];
        for (var i = 0; i < data.length; i++)
            result.push(new Device(data[i].id, data[i].title));
        sender.devices(result);
    });
};

function Group(id, name) {
    if (id != undefined && name != undefined) {
        this.id = id;
        this.name = name;
        this.devices = ko.onDemandObservable(this.getDevices, this);
    }
    else {
        throw new Error("Группа приборов должна иметь идентификатор и имя");
    }
}


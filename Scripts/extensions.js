// requires jQuery

Array.prototype.first = function () {
    return (this.length > 0) ? this[0] : undefined;
};

Array.prototype.findId = function (id) {
    return $.grep(this, function (e) { return (e.id == id); }).first();
};

Date.prototype.toKpwsString = function () {
    var y = this.getFullYear();
    var m = this.getMonth()+1;
    var d = this.getDate();
    m = m <= 9 ? "0" + m : "" + m;
    d = d <= 9 ? "0" + d : "" + d;
    return d + "." + m + "." + y;
};

Date.prototype.toKpwsTimeStamp = function () {
    var h = this.getHours();
    var m = this.getMinutes()
    var s = this.getSeconds();
    m = m <= 9 ? "0" + m : "" + m;
    s = s <= 9 ? "0" + s : "" + s;
    return this.toKpwsString() + " " + h + ":" + m + ":" + s;
};
function Parameter(id, title) {
    if (id == undefined || title == undefined)
        throw new Error("Параметр не может быть без идентификатор и названия");

    this.id = id;
    this.title = title;
}
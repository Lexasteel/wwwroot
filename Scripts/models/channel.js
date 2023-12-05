function Channel(id, title) {
    if (name != undefined && id != undefined) {
        this.id = id;
        this.title = title;
    }
    else {
        throw new Error("Измерительный канал должен иметь имя и номер!");
    }
}
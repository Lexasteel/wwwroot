function ArchiveType(id, title) {
    if (id == undefined || title == undefined)
        throw new Error("Тип архива должен иметь идентификатор и название");
    this.id = id;
    this.title = title;
}
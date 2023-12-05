<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl<System.Web.Mvc.HandleErrorInfo>" %>
    <h2>
        Ошибка
    </h2>
    Извините, но возникла ошибка при попытке обработать запрос.
    <p>
        <%= Html.Encode(Model.Exception.Message) %>
    </p>


<%@ Page Language="C#" MasterPageFile="~/Views/Shared/Site.Master"
Inherits="System.Web.Mvc.ViewPage<System.Web.Mvc.HandleErrorInfo>" %>

<asp:Content ID="errorTitle" ContentPlaceHolderID="TitleContent" runat="server">
    Ошибка
</asp:Content>

<asp:Content ID="errorContent" ContentPlaceHolderID="MainContent" runat="server">
    <h2>
        Ошибка
    </h2>
    Извините, но возникла ошибка при попытке обработать запрос.
    <p>
        <%= Html.Encode(Model.Exception.Message) %>
    </p>
</asp:Content>

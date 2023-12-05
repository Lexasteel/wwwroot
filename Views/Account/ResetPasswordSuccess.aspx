<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" 
Inherits="System.Web.Mvc.ViewPage" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	Сброс пароля
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h3>Сброс пароля произошел успешно</h3>
    Ваш новый пароль: <%= Html.Encode(ViewData["newPassword"]) %>
    
</asp:Content>

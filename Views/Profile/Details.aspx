<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<Ergomera.Domains.Profile>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	Ваш профиль
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">    
    <h2>Ваш профиль</h2>
    <table style="border: none; padding:0;">
        <tr>
            <td rowspan="2">
                <img src="<%= Url.Content("~/Content/Images/profile/user-icon.png") %>" alt="Ваш профиль" />
            </td>
            <td valign="top">
                <h3><%= Html.Encode(Model.Username) %></h3>
                <h3><%= Html.Encode(Model.Salutation) %></h3>
                <h5><%= Html.Encode(Model.Description) %></h5>
            </td>
        </tr>
        <tr>
            <td align="center">
                <p style="margin-bottom:0.5em;"><%= Html.ActionLink("Редактировать", "Edit", new { id = Model.Id }, new { Class = "button" })%></p>
                <p><%= Html.ActionLink("Сменить пароль", "ChangePassword", "Account", null, new { Class = "button" })%></p>
            </td>
        </tr>
    </table>
    
</asp:Content>


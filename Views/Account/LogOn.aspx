<%@ Page Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<Ergomera.Webserver.Models.LogOnModel>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    Авторизация
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <h2>Авторизация</h2>
    <p>
        Пожалуйста, введите свой логин и пароль.<br />
        Для регистрации обратитесь к администратору системы:<br />
        <b><%= Html.Encode(ConfigurationManager.AppSettings["contactAdmin"])%></b>
    </p>

    <% using (Html.BeginForm()) { %>
        <%= Html.ValidationSummary(true, "Не удалось выполнить вход в систему. Исправьте ошибки и повторите попытку.") %>
        <div>
            <fieldset>
                <div class="editor-label">
                    <%= Html.LabelFor(m => m.UserName) %>
                </div>
                <div class="editor-field">
                    <%= Html.TextBoxFor(m => m.UserName) %>
                    <%= Html.ValidationMessageFor(m => m.UserName) %>
                </div>
                
                <div class="editor-label">
                    <%= Html.LabelFor(m => m.Password) %>
                </div>
                <div class="editor-field">
                    <%= Html.PasswordFor(m => m.Password) %>
                    <%= Html.ValidationMessageFor(m => m.Password) %>
                </div>
                
                <div class="editor-label">
                    <%= Html.CheckBoxFor(m => m.RememberMe) %>
                    <%= Html.LabelFor(m => m.RememberMe) %>
                </div>
                
                <p>
                    <input class="button" type="submit" value="Войти" />
                    <% if ((Model != null) && !String.IsNullOrEmpty(Model.UserName)) { %>
                        <a href="<%= Url.Action("ResetPassword", new { username = Model.UserName }) %>">Забыли пароль?</a>
                    <% } %>
                </p>
            </fieldset>
        </div>
    <% } %>
</asp:Content>

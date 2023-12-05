<%@ Page Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<Ergomera.Webserver.Models.AdminChangePasswordModel>" %>

<asp:Content ID="changePasswordTitle" ContentPlaceHolderID="TitleContent" runat="server">
    Изменить пароль
</asp:Content>

<asp:Content ID="changePasswordContent" ContentPlaceHolderID="MainContent" runat="server">
    <h2>Изменить пароль</h2>
    <p>
        Воспользуйтесь данной формой для изменения пароля пользователя 
    </p>
    <p>
        Новый пароль должен состоять не менее, чем из <%= Html.Encode(ViewData["PasswordLength"]) %> символов.
    </p>

    <% using (Html.BeginForm()) { %>
        <%= Html.ValidationSummary(true, "Не удалось изменить пароль. Исправьте ошибки и повторите попытку.") %>
        <div>
            <fieldset>
                
                <div class="editor-label">
                    <%= Html.LabelFor(m => m.UserName) %>
                    <br />
                    <%= Html.Encode(Model.UserName) %>
                    
                </div>
                 <br />               
                <div class="editor-label">
                    <%= Html.LabelFor(m => m.NewPassword) %>
                </div>
                <div class="editor-field">
                    <%= Html.PasswordFor(m => m.NewPassword) %>
                    <%= Html.ValidationMessageFor(m => m.NewPassword) %>
                </div>
                
                <div class="editor-label">
                    <%= Html.LabelFor(m => m.ConfirmPassword) %>
                </div>
                <div class="editor-field">
                    <%= Html.PasswordFor(m => m.ConfirmPassword) %>
                    <%= Html.ValidationMessageFor(m => m.ConfirmPassword) %>
                </div>
                
                <p>
                    <input type="submit" value="Изменить пароль" />
                </p>
            </fieldset>
        </div>
    <% } %>
</asp:Content>

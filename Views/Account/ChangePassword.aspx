<%@ Page Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<Ergomera.Webserver.Models.ChangePasswordModel>" %>

<asp:Content ID="changePasswordTitle" ContentPlaceHolderID="TitleContent" runat="server">
    Изменить пароль
</asp:Content>

<asp:Content ID="changePasswordContent" ContentPlaceHolderID="MainContent" runat="server">
    <h2>Изменить пароль</h2>
    <p>
        Воспользуйтесь данной формой для изменения своего пароля. 
    </p>
    <p>
        Новый пароль должен состоять не менее, чем из <%= Html.Encode(ViewData["PasswordLength"]) %> символов.
    </p>

    <% using (Html.BeginForm()) { %>
        <%= Html.ValidationSummary(true, "Не удалось изменить пароль. Исправьте ошибки и повторите попытку.") %>
        <div>
            <fieldset style="width:25em;">
                
                <div class="editor-label">
                    <%= Html.LabelFor(m => m.OldPassword) %>
                </div>
                <div class="editor-field">
                    <%= Html.PasswordFor(m => m.OldPassword) %>
                    <%= Html.ValidationMessageFor(m => m.OldPassword) %>
                </div>
                
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
                    <input class="button" type="submit" value="Изменить пароль" />
                </p>
            </fieldset>
        </div>
    <% } %>
</asp:Content>

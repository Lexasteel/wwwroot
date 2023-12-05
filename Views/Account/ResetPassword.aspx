<%@ Page Language="C#" MasterPageFile="~/Views/Shared/Site.Master" 
Inherits="System.Web.Mvc.ViewPage<Ergomera.Webserver.Models.ResetPasswordModel>" %>

<asp:Content ID="changePasswordTitle" ContentPlaceHolderID="TitleContent" runat="server">
    Сброс пароля
</asp:Content>

<asp:Content ID="changePasswordContent" ContentPlaceHolderID="MainContent" runat="server">
    <h3>Сброс пароля</h3>
    <p>
        Воспользуйтесь формой ниже для сброса пароля.
    </p>

    <% using (Html.BeginForm()) { %>
        <%= Html.AntiForgeryToken() %>
    
        <%= Html.ValidationSummary(true, "Не удалось сбросить пароль.\n" + (ViewData["ErrorMessage"] ?? "").ToString() + "\nПожалуйста, исправьте ошибки и повторите попытку.") %>
        <div>
            <fieldset>
                <legend>Ответьте на свой секретный вопрос</legend>

                <%= Html.HiddenFor(m => m.UserName) %>
                
                <div class="editor-label">
                    <%= Html.HiddenFor(m => m.PasswordQuestion) %>
                    <%= Html.Encode(Model.PasswordQuestion) %>
                </div>
                
                <div class="editor-field">
                    <%= Html.EditorFor(m => m.PasswordAnswer) %>
                    <%= Html.ValidationMessageFor(m => m.PasswordAnswer) %>
                </div>
                                
                <p>
                    <input type="submit" value="Сбросить пароль" class="styledButton" />
                </p>
            </fieldset>
        </div>
    <% } %>
</asp:Content>

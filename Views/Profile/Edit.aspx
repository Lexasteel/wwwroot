<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<Ergomera.Domains.Profile>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	Редактировать профиль
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h2>Редактировать профиль</h2>

    <% using (Html.BeginForm("Edit", "Profile", FormMethod.Post)) {%> 
        <%= Html.ValidationSummary(true) %>
        
            <%= Html.HiddenFor(model => model.Id) %>            
            <%= Html.HiddenFor(model => model.Username) %>
            
            <table align="center">
                <tr align="center">
                    <td rowspan="2">
                        <img src="<%= Url.Content("~/Content/Images/profile/user-icon.png") %>" alt="Ваш профиль" />
                    </td>
                    <td>
                        <h3><%= Html.Encode(Model.Username) %></h3>
                        <div class="editor-label">
                            Дополнительная информация:<br />
                            <%= Html.ValidationMessageFor(model => model.Salutation) %>
                            <%= Html.ValidationMessageFor(model => model.Description) %>
                        </div>
                    </td>
                </tr>
                <tr></tr>
                <tr></tr> 
                <tr>
                    <td>
                        Полное имя :   
                    </td>
                    <td>
                        <%= Html.TextAreaFor(model => model.Salutation, new { style = "width: 100%; height: 100%;" })%>
                    </td>
                </tr>
                <tr>
                    <td>
                        Описание :    
                    </td>
                    <td>
                        <%= Html.TextAreaFor(model => model.Description, new { style = "width: 100%; height: 100%;" })%>
                    </td>
                </tr>
                
                <tr align="center">
                    <td>
                        <%= Html.ActionLink("Назад", "Details", "Profile", new { id = Model.Id.Value }, new { Class = "button" })%>
                    </td>
                    <td>
                        <input class="button" type="submit" value="Сохранить" />
                    </td>
                </tr>
            </table>
    <% } %>

</asp:Content>


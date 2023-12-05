<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" 
Inherits="System.Web.Mvc.ViewPage<IEnumerable<Ergomera.Webserver.Models.AccountRolesModel>>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	Управление пользователями
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h3>Управление пользователями</h3>
    
    <div class="errorMessage">
        <%= ViewData["ErrorMessage"] ?? String.Empty %>
    </div>

    <div class="statusMessage">
        <%= ViewData["Message"] ?? String.Empty %>
    </div>
    
    <% using (Html.BeginForm("Accounts", "Admin", FormMethod.Post))
	   { %>
	   <% =Html.ValidationSummary(true)%>
    
    <table id="accountTable">
        <thead id="accountTable-thead">
            <tr>
                <th>
                    Удалить?
                </th>
                <th>
                    Логин
                </th>
                <th>
                    Полное имя
                </th>
                <th>
                    Описание
                </th>
                <th>
                    Администратор?
                </th>
                <th>
                    Заблокирован?
                </th>
                 <th>
					Действия
                </th>
            </tr>
        </thead>
    <% int i = 0; %>
    <% foreach (var item in Model) %>
    <%{ %>
        <tr>
            <td>
                <%= Html.CheckBox(String.Format("accounts[{0}].ToDelete", i), item.ToDelete) %>
            </td>
            <td>
                <%= Html.Hidden(String.Format("accounts[{0}].UserName", i), item.UserName)%>
                <%= Html.ActionLink(Html.Encode(item.UserName), "Details", "Profile", new { id = item.Id }, new object()) %>
            </td>
            <td style="widht:20%">
                <%= Html.Hidden(String.Format("accounts[{0}].Salutation", i), item.Salutation)%>
                <%= Html.Encode(item.Salutation)%>
            </td>
            <td>
                <%= Html.Hidden(String.Format("accounts[{0}].Description", i), item.Description)%>
                <%= Html.Encode(item.Description)%>
            </td>
            <td>
                <%= Html.CheckBox(String.Format("accounts[{0}].IsAdmin", i), item.IsAdmin) %>
            </td>
            <td>
                <%= Html.CheckBox(String.Format("accounts[{0}].IsLocked", i), item.IsLocked) %>
            </td>
            <td>
				<%= Html.ActionLink("[Редактировать]", "Edit", "Profile", new { id = item.Id }, new object()) %>
				<%= Html.ActionLink("[Сменить пароль]", "ChangePassword", "Admin", new { username = item.UserName }, new object())%>
            </td>
            
        </tr>
    
    <% i++; } %>

    </table>
    
    <p>
        <%= Html.ActionLink("[Добавить пользователя]", "CreateAccount", "Admin") %>
    </p>
    
    <input type="submit" value="Сохранить" class="styledButton" />
    <% } %>
</asp:Content>


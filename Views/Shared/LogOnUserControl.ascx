<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

<% if (!Request.IsAuthenticated) { %> 
    <div id="account">
        <ul>
            <li><%= Html.ActionLink("Войти", "LogOn", "Account") %></li>
        </ul>
    </div>
<% } else { %>
    <div id="account">
        <ul>
            <li><%= Html.ActionLink("Профиль", "Details", "Profile")%></li>
            <li><%= Html.ActionLink("Выйти", "LogOff", "Account")%></li>
        </ul>
    </div>
    <div id="loggedas">
            Приветствуем, <a href="<%= Url.Action("Details", "Profile")%>"><%= Html.Encode(String.IsNullOrEmpty(System.Web.Security.Membership.GetUser().Comment) ? Page.User.Identity.Name : System.Web.Security.Membership.GetUser().Comment)%></a>
    </div>
<% } %>
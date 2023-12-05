<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<Ergomera.Domains.Profile>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    Просмотр состояния приборов
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <%   
        if (Ergomera.Webserver.Infrastructure.UsersAccessRules.IsCurrentUserIsAdmin())
        {
            using (Ajax.BeginForm("ListDevices",
                // new RouteValueDictionary(new { Model.Id }),
                           new AjaxOptions { UpdateTargetId = "devicesList" }))
            { %>
                Пользователь
                <%= Html.DropDownListFor(model => model.Id, (IEnumerable<SelectListItem>)ViewData["lst_users"]) %>
                <input type="submit" value="Выбери меня" />
        <%	} %>
        <div id="devicesList">
        </div>
        
    <% } %>
    <% else %>
    <% { %>
        <div id="devicesList">
            <% Html.RenderAction("ListDevices", new { Model.Id }); %>
        </div>
    <% } %>
</asp:Content>

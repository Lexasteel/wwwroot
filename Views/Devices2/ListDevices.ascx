<%@ Control Language="C#" 
Inherits="System.Web.Mvc.ViewUserControl<IEnumerable<Ergomera.Domains.Views.DeviceViewModel>>" %>

	
	<h2 align="center">Просмотр состояния приборов</h2>

<%   
	if (Ergomera.Webserver.Infrastructure.UsersAccessRules.IsCurrentUserIsAdmin())
	{
%>
    	<div>
			<%= Ajax.ActionLink("[Редактировать приборы пользователя]", "DevicesForUser", 
					new { profile_id = ViewData["profile_id"]},
					new AjaxOptions { HttpMethod = "Get", UpdateTargetId = "devicesList" })%>		
		</div>			
<%
	}
%>
	
        <% if (Model.Count() != 0) %>
        <%{ %>
        <div>
        <ul class = "devices-browser">
            <% foreach (var item in Model)%>
            <% { %>
                <li id = "<%=Html.Encode(item.GetStatusImage())%>" >
                    <%= Ajax.ActionLink(item.Title + " (" + item.UID + ")", "ViewDevice", "Devices",
						new { deviceUID = item.UID, profile_id = ViewData["profile_id"] },
						new AjaxOptions { UpdateTargetId = "DeviceDetails" })%>
	            </li>
            <% } %>
        </ul>
        </div>
        
        <%--<br/>--%>
        <div id="DeviceDetails" class = "device-details">
             <%  Html.RenderPartial("ViewDevice", Model.FirstOrDefault()); %>
        </div>
    <%}%>  
    
<%@ Control Language="C#" 
Inherits="System.Web.Mvc.ViewUserControl<IEnumerable<Ergomera.Webserver.Models.DeviceForProfile>>" %>

    <h2>Приборы для пользователя <%= Html.Encode(ViewData["user_name"]) %></h2>
	
	<div class="errorMessage">
        <%= ViewData["ErrorMessage"] ?? String.Empty %>
    </div>

    <div class="statusMessage">
        <%= ViewData["Message"] ?? String.Empty %>
    </div>
	
	 <% using (Ajax.BeginForm("DevicesForUser", "Devices",
		 new AjaxOptions() { UpdateTargetId = "devicesPanel", InsertionMode = InsertionMode.Replace }))
	 	//using (Ajax.BeginForm("DevicesForUser", "Devices", FormMethod.Post))
	   { %>
	   <% =Html.ValidationSummary(true)%>
	
    <table>
        <tr>
            <th>
                Видимый
            </th>
            <th>
                Серийный номер
            </th>
            <th>
                Отображаемое имя
            </th>
            <th>
                Серия
            </th>
        </tr>
	
	<% int i = 0; %>
    <% foreach (var item in Model) { %>
    
		<%= Html.Hidden(String.Format("profiles[{0}].Id", i), item.Id)%>
    
        <tr>
            <td>
                <%= Html.CheckBox(String.Format("profiles[{0}].VisibleForUser", i), item.VisibleForUser)%>
            </td>
            <td>
                <%= Html.Hidden(String.Format("profiles[{0}].UID", i), item.UID)%>
                <%= Html.Encode(item.UID) %>
            </td>
            <td>
                <%= Html.Hidden(String.Format("profiles[{0}].DisplayedName", i), item.DisplayedName)%>
                <%= Html.Encode(item.DisplayedName) %>
            </td>
            <td>
                <%= Html.Hidden(String.Format("profiles[{0}].Series", i), item.Series)%>
                <%= Html.Encode(item.Series) %>
            </td>
        </tr>
    
	<% i++; } %>

    </table>
    
    <input type="submit" value="Сохранить" class="styledButton" />
    <% } %>



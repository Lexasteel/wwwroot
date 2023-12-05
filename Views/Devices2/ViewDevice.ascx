<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl<Ergomera.Domains.Views.DeviceViewModel>" %>

<% TempData["device"] = Model.UID;%>

<h2 align="center">
    Информация
</h2>
<img align="left" width="100" height="100" hspace="100" vspace="100" src="<%= Url.Action("Icon","Devices", new { deviceUID = Model.UID }) %>"
    alt="<%=Html.Encode(Model.Title)%>" />
<div id="info">
    Серия:
    <%= Html.Encode(Model.Series_Title) %>
    <br />
    Модель:
    <%= Html.Encode(Model.UID) %>
    <br />
    Схема:
    <%= Html.Encode(Model.Scheme_Id) %>
    <br />
    Последнее считывание было:
    <%= Html.Encode(String.Format("{0:g}", Model.LastAttempt)) %>
    <br />
    Результат:
    <%= Html.Encode(String.Format("{0:g}", Model.LastResult)) %>
    <br />
</div>

<div id = "browse-reports">

        <% if (Directory.Exists(Path.Combine(Path.Combine(Path.Combine(
               Ergomera.Webserver.MvcApplication.UsersPath, Page.User.Identity.Name), 
                        Ergomera.Webserver.MvcApplication.ReportsDevicesLabel), Model.UID)))
           {
               Html.RenderAction("BrowseReports", new 
               {
                   fn = Ergomera.Webserver.MvcApplication.ReportsDevicesLabel + "/" + Model.UID
               });
		   }%>
</div>

<table>
    <tr>
        <th>
            #
        </th>
        <th>
            Сервер сбора информации
        </th>
        <th>
            Вид запроса
        </th>
        <th>
            Приоритет
        </th>
        <th>
            Интервал (после успешного выполнения)
        </th>
        <th>
            Интервал (после неудачного выполнения
        </th>
        <th>
            Предыдущее выполнение
        </th>
		<th>
            Следующее выполнение
        </th>
        
        <th>
            Результат последнего выполнения
        </th>
    </tr>
    <% foreach (var item in Model.Tasks)
       { %>
    <tr>
        <td>
            <%= Html.Encode(item.Id) %>
        </td>
        <td>
            <%= Html.Encode(item.Reader_Name) %>
        </td>
        <td>
            <%= Html.Encode(item.Query_Title) %>
        </td>
        <td>
            <%= Html.Encode(item.Priority) %>
        </td>
        <td>
            <%= Html.Encode(item.Interval) %>
        </td>
        <td>
            <%= Html.Encode(item.Unsuccess_Interval) %>
        </td>
        <td>
                <%= Html.Encode((item.Last_Execution == null) ? 
                				"нет" : String.Format("{0:g}", item.Last_Execution))%>
            </td>
            <td>
                <%= Html.Encode((item.Next_Execution == null) ? 
                				"нет" : String.Format("{0:g}", item.Next_Execution))%>
            </td>
            <td>
                <%= Html.Encode(item.Last_Result ?? "нет") %>
            </td>
    </tr>
    <% } %>
</table>

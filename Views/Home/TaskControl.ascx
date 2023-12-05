<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl<IEnumerable<Ergomera.Domains.Views.TaskViewModel>>" %>

    <table>
        <tr>
            <th>
                Id
            </th>
            <th>
                Device_UID
            </th>
            <th>
                Displayed_Name
            </th>
            <th>
                Series_Title
            </th>
            <th>
                Factory_Number
            </th>
            <th>
                Reader_Name
            </th>
            <th>
                Query_Title
            </th>
            <th>
                Priority
            </th>
            <th>
                Interval
            </th>
            <th>
                Unsuccess_Interval
            </th>
            <th>
                Next_Execution
            </th>
            <th>
                Last_Execution
            </th>
            <th>
                Last_Result
            </th>
            <th>
                Profile_Id
            </th>
            <th>
                Error
            </th>
        </tr>

    <% foreach (var item in Model) { %>
    
        <tr>
            <td>
                <%= Html.Encode(item.Id) %>
            </td>
            <td>
                <%= Html.Encode(item.Device_UID) %>
            </td>
            <td>
                <%= Html.Encode(item.Displayed_Name) %>
            </td>
            <td>
                <%= Html.Encode(item.Series_Title) %>
            </td>
            <td>
                <%= Html.Encode(item.Factory_Number) %>
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
                <%= Html.Encode(String.Format("{0:g}", item.Next_Execution)) %>
            </td>
            <td>
                <%= Html.Encode(String.Format("{0:g}", item.Last_Execution)) %>
            </td>
            <td>
                <%= Html.Encode(item.Last_Result) %>
            </td>
            <td>
                <%= Html.Encode(item.Profile_Id) %>
            </td>
            <td>
                <%= Html.Encode(item.Error) %>
            </td>
        </tr>
    
    <% } %>

    </table>



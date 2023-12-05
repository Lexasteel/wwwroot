<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl<Ergomera.Webserver.Models.FileManager.ManageDirectory>" %>

<div style="margin-left:10px; margin-top:5px">
    /<%=Model.Path %>
</div>    
    <ul id="directories">
        <li>
            <%= Ajax.ActionLink("<--Вернуться назад", "BrowseReports",
				new { fn = (Model.Path.LastIndexOf('/') == -1) ? Model.Path : 
                    Model.Path.Substring(0, Model.Path.LastIndexOf('/')) },
				    new AjaxOptions { UpdateTargetId = "browse-reports" },
                new { title = "Вернуться наверх" })%>
        </li>   
        <% foreach (var d in Model.Directories)%>
        <% { %>
            <li>
            <%= Ajax.ActionLink(d, "BrowseReports",
                new { fn = Path.Combine(Model.Path, d).Replace(Path.DirectorySeparatorChar, '/') },
				new AjaxOptions { UpdateTargetId = "browse-reports" })%>
            </li>
        <%} %>
    </ul>
    
    <ul id="files">
        <% foreach (var d in Model.Files) { %>
        <li>
            <% 	string name = Path.GetFileNameWithoutExtension(d);
                if (name.EndsWith(".design"))
                {
                    name = name.Substring(0, name.LastIndexOf(".design"));%>
                    
                    <%=Ajax.ActionLink(name, "ContentView", "Reports",
					new
                    {
                        filename = Path.Combine(Model.Path, d).Replace(Path.DirectorySeparatorChar, '/'),
                        device = TempData["device"]
                    },
						new AjaxOptions { UpdateTargetId = "DeviceDetails" })%>
                <%}
                else
                {
                    if (name.EndsWith(".report"))
                    {
                        name = name.Substring(0, name.LastIndexOf(".report")); %>
                        <%=Ajax.ActionLink(name, "Preview", "Reports",
						new
                        {
                            virtualPath = Path.Combine(Model.Path, d).Replace(Path.DirectorySeparatorChar, '/'),
                            device = TempData["device"]
                        },
							new AjaxOptions { UpdateTargetId = "DeviceDetails" })%>
                    <%}
                 } %>
                    </li>
        <%} %>
    </ul>
    
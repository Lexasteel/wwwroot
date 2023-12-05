<%@ Control Language="C#" 
Inherits="System.Web.Mvc.ViewUserControl<Ergomera.Webserver.Models.FileManager.ManageDirectory>" %>

<div style="margin-left:10px; margin-top:5px">
    /<%=Model.Path %>
</div>    
    <ul id="directories" style="margin:0px;">
        <li>
            <%= Ajax.ActionLink("<--Вернуться назад", "Index",
				new { fn = (Model.Path.LastIndexOf('/') == -1) ? "" : 
                    Model.Path.Substring(0, Model.Path.LastIndexOf('/')) }, 
                new AjaxOptions { UpdateTargetId = "file-browser" },
                new { title = "Вернуться наверх" })%>
        </li>
        <% foreach (var d in Model.Directories)%>
        <% { %>
            <li>
            <%= Ajax.ActionLink(d, "Index",
                new { fn = Path.Combine(Model.Path, d).Replace(Path.DirectorySeparatorChar, '/') },
				new AjaxOptions { UpdateTargetId = "file-browser" })%>

            </li>
        <%} %>
    </ul>
    
    <ul id="files" style="margin:0px;">
        <% foreach (var d in Model.Files) { %>
        <li>
            <%= Ajax.ActionLink(Path.GetFileName(d), "Index", "FileManager",
                new { fn = Path.Combine(Model.Path, d).Replace(Path.DirectorySeparatorChar, '/') },
                new AjaxOptions { UpdateTargetId = "file-content" })%>
                
            <%= Html.ActionLink("[+]", "GetFile",
                    new { filename = Path.Combine(Model.Path, d).Replace(Path.DirectorySeparatorChar, '/') },
                    new { rel = "external", target = "_blank" })%>   
        </li>
        <%} %>
    </ul>
    
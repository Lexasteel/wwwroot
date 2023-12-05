<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master"
Inherits="System.Web.Mvc.ViewPage<IEnumerable<System.String>>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	Index
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h2>Index</h2>
    <div>
    <% foreach (var item in Model) %>
    <%{%>
	    <div>
            <%= Ajax.ActionLink(Path.GetFileNameWithoutExtension(item), "ViewMnemo", "Svg",
			    new { mnemoPath = item},
			    new AjaxOptions { UpdateTargetId = "Mnemoscheme" } )%>
        </div>
        
    <%}%>
    </div>
    <br/>
    <div id="Mnemoscheme">
         <%  Html.RenderPartial("ViewMnemo", Model.FirstOrDefault()); %>
    </div>

</asp:Content>

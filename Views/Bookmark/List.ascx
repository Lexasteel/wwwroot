<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl<Ergomera.Webserver.Models.UserDesktop>" %>
               
<% foreach (var page in Model.UserPages) { %>
<span class="bookmark">   
    <a class="bookmark-button" href="<%=page.Url%>"><%=Html.Encode(page.Title)%></a> 
	<button class="bookmark-delete-button" index="<%=page.Index%>" title='Удалить "<%=Html.Encode(page.Title)%>"'>
        x
    </button>
</span>
<% } /* foreach */ %>


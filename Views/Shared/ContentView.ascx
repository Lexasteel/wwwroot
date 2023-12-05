<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

<% if (ViewData["virtualPath"] != null) %> 
<% { %>
       <iframe  id="OutContent" name="OutContent"
                frameborder="0"
                width="100%"
                height="100%"
                scrolling="auto"
                src="<%= Url.Action("GetFile", new { filename = (string)ViewData["virtualPath"] })%>">
        </iframe>
<% } %>
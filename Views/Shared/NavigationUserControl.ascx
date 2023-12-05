<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

    <li>
        <img id="header_show" src="/Content/images/fullscreen.png" style="display:none; margin-right: 5px; " alt="Развернуть"/>
    </li>

<% 
    if (Request.IsAuthenticated)
    {
%>		
		<li>
			<%= Html.ActionLink("Приборы", "Index", "Devices")%>
		</li>
<%		
		if (Ergomera.Webserver.Infrastructure.UsersAccessRules.IsCurrentUserIsAdmin())
		{
			%>		
				<li> <%= Html.ActionLink("Пользователи", "Accounts", "Admin")%> </li>
				<li> <%= Html.ActionLink("Управление файлами", "Index", "AdminFileManager")%></li>
				<li> <%= Html.ActionLink("Мнемосхемы и отчёты", "Index", "FileManager")%></li>
			<%
		}
		else
		{
		%>
				
		
		<li>
		    <%= Html.ActionLink("Мнемосхемы и отчёты", "Index", "FileManager")%>
		</li>
		
		<%
		}	
    } %>
    
		<li>
		    <a href="http://ergomera.org.ua:84">Техподдержка</a>
		</li>    
    
<script type="text/javascript">
    $(document).ready(function() {

        $("#header_show").click(function() {
            $("#header").show();
            $(this).hide();
            $.ajax({ url: '/Home/HeaderIsVisible/True' });
        });

        $("#header_hide").click(function() {
            $("#header").hide();
            $("#header_show").css("display", "block");
            $.ajax({ url: '/Home/HeaderIsVisible/False' });
        });

        <% if ((Session["HeaderIsVisible"] == null) || ((bool)Session["HeaderIsVisible"])) {  %>
            $("#header").show();
        <% } else { %>
            $("#header_show").show();
        <% } %>

    });
</script>
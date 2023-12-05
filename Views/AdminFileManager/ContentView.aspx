<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" 
Inherits="System.Web.Mvc.ViewPage<System.String>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	Просмотр файла
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

<% if (Model != null) %> 
<% { %>
    <iframe frameborder="0" width = "100%" height="500" scrolling="auto" 
        src="<%= Url.Action("GetFile", new { filename = Model})%>"/>
<% } %>

</asp:Content>

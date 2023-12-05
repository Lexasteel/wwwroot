<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    <%= Html.Encode(Path.GetFileNameWithoutExtension((string)ViewData["virtualPath"])) %>
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <% if (ViewData["virtualPath"] != null) { %>
        <iframe frameborder="0" height="1000" width="1000" scrolling="auto"
         src="<%= Url.Action("GetFile", new { filename = (string)ViewData["virtualPath"] })%>"/>
    <% } %>
</asp:Content>

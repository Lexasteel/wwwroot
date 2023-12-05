<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<System.String>" %>
<%@ Import Namespace="System.IO" %>
<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	<%= Html.Encode(ViewData["originalPath"]) %>
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <h2><%= Html.Encode(ViewData["originalPath"])%></h2>
    <ul>
    <% foreach (var directory in Directory.GetDirectories((string)ViewData["fullPath"])) { %>
        <li style="marks:cross;"><a href="<%= Html.Encode(((string)ViewData["originalPath"])+'/'+Path.GetFileName(directory)) %>"><%= Html.Encode(Path.GetFileName(directory))%></a></li>
    <% } %>
    <% foreach (var file in Directory.GetFiles((string)ViewData["fullPath"])) { %>
        <li><a href="<%= Html.Encode(((string)ViewData["originalPath"])+'/'+Path.GetFileName(file)) %>"><%= Html.Encode(Path.GetFileName(file)) %></a></li>
    <% } %>
    </ul>
</asp:Content>

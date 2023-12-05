<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<Ergomera.Webserver.Common.Plots.Flot>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	<%= ViewData["header"] %>
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h2><%= ViewData["header"] %></h2>

    <form method="post" action="/Edit/<%= ViewData["virtualPath"]%>">
        <%= Html.ValidationSummary(true) %>
        
            <div class="editor-label">
                Название графика
            </div>
            <div class="editor-field">
                <%= Html.TextBoxFor(model => model.Title) %>
                <%= Html.ValidationMessageFor(model => model.Title) %>
            </div>
            
            <div class="editor-label">
                Ширина (в пикселях)
            </div>
            <div class="editor-field">
                <%= Html.TextBoxFor(model => model.Width) %>
                <%= Html.ValidationMessageFor(model => model.Width) %>
            </div>
            
            <div class="editor-label">
                Высота (в пикселях)
            </div>
            <div class="editor-field">
                <%= Html.TextBoxFor(model => model.Height) %>
                <%= Html.ValidationMessageFor(model => model.Height) %>
            </div>
            
            <div id="series">
                Серии:
                <input type="text" id="series[0]"/> <button id="addNew" />
            </div>
            
            <p>
                <input type="submit" value="Сохранить" />
            </p>
    </form>

</asp:Content>


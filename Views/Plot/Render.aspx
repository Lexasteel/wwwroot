<%@ Page Language="C#" MasterPageFile="~/Views/Shared/Blank.Master" Culture="en-US" Inherits="System.Web.Mvc.ViewPage<Ergomera.Webserver.Common.Plots.Plot>" %>
<%@ Import Namespace="Ergomera.Webserver" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    <%= Html.Encode(Model.Title) %>
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <script type="text/javascript" src="<%= Url.Content("~/Scripts/flot/excanvas.min.js") %>"></script>
    <script type="text/javascript" src="<%= Url.Content("~/Scripts/flot/jquery.flot.min.js") %>"></script>
    <script type="text/javascript" src="<%= Url.Content("~/Scripts/flot/jquery.flot.navigate.min.js") %>"></script>
    <script type="text/javascript" src="<%= Url.Content("~/Scripts/flot/jquery.flot.resize.min.js") %>"></script>
    
    <%= Html.LabelWithNewLines(Model.Title) %>
    
    <br />
    
    <table style="margin-bottom: 10px; border: none; padding: 0;"><tr>
        <td id="zoomIn" class="ui-icon ui-icon-zoomin" style="display:table-cell;" title="Приблизить"></td>
        <td id="zoomOut" class="ui-icon ui-icon-zoomout" style="display:table-cell;" title="Отдалить"></td>
        <td id="setDefaults" class="ui-icon ui-icon-search" style="display:table-cell;" title="Сбросить масштаб"></td>
    </tr></table>
    
    <div id="placeholder" style="margin: 10px 0px 10px 20px; min-width:<%= Model.Width %>px;min-height:<%= Model.Height %>px;width:90%; height: 60%;">
    </div>
    
    <script type="text/javascript">
    var placeholder = $("#placeholder");
    
    var data = <%= Model.Series.Render() %>;
    var options = {
        xaxis: <%= Model.XAxis.Render() %>,
        yaxis: <%= Model.YAxis.Render() %>, 
        zoom: { interactive: true },
        pan: { interactive: true }
    };
    
    function suggestTicks(container) { return parseInt(container.height() / 30); }
    
    options.yaxis.ticks = suggestTicks(placeholder);    
    
    var plot = $.plot(placeholder, data, options);
    placeholder.resize(function() {
        options.yaxis.ticks = suggestTicks(placeholder);
        plot = $.plot(placeholder, data, options);
    });
    
    placeholder.resizable();
    $("#setDefaults").click(function() { plot = $.plot(placeholder, data, options); });
    $("#zoomIn").click(function() { plot.zoom(); });
    $("#zoomOut").click(function() { plot.zoomOut(); });
    
    </script>
</asp:Content>

<%@ Page Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<Ergomera.Webserver.Common.Plots.Flot>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    Демонстрация
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <script type="text/javascript" src="<%= Url.Content("~/Scripts/jquery.flot.js") %>"></script>
    <script type="text/javascript" src="<%= Url.Content("~/Scripts/jquery.flot.navigate.js") %>"></script>
    
    <div id="placeholder" style="width:<%= Model.Width %>px;height:<%= Model.Height %>px;">
    </div>
    
    <script type="text/javascript">
    var placeholder = $("#placeholder");
    var data = <%= Model.SeriesCollection.Render() %>;
    var options = {
        series: { lines: { show: true }, shadowSize: 0 },
        xaxis: { zoomRange: [<%= Model.XAxis.Min %>, <%= Model.XAxis.Max %>], panRange: [<%= Model.XAxis.Min %>, <%= Model.XAxis.Max %>] },
        yaxis: { zoomRange: [<%= Model.YAxis.Min %>, <%= Model.YAxis.Max %>], panRange: [<%= Model.YAxis.Min %>, <%= Model.YAxis.Max %>] },
        zoom: { interactive: true },
        pan: { interactive: true }
    };
    
    var plot = $.plot(placeholder, data, options);
    </script>
</asp:Content>

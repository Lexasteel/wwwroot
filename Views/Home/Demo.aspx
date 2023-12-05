<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	Plot Test Page
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    
    
    <script language="javascript" type="text/javascript" src="/Scripts/jquery.flot.js"></script>
    
    <h1>Flot Examples</h1>

    <div id="placeholder" style="width:600px;height:300px;">
    </div>
    
    <p>
        <input id="getData" type="button" value="Get Data"/>
    </p>

	<script type="text/javascript">
	    $(function() {
	        var options = {
	            lines: { show: true },
	            points: { show: true },
	            xaxis: { tickDecimals: 0, tickSize: 1 }
	        };
	        var data = [];
	        var placeholder = $("#placeholder");

	        $.plot(placeholder, data, options);

	        $("input#getData").click(function() {
	            function onDataReceived(series) {
	                data.push(series);
	                $.plot(placeholder, data, options);
	            }
	            $.ajax({
	                url: '/Content/data-japan-gdp-growth.json',
	                method: 'GET',
	                dataType: 'json',
	                success: onDataReceived
	            });
	        });
	    });
	</script>
	
</asp:Content>


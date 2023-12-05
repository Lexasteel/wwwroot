<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<Ergomera.Webserver.Models.DomainModels.DevicesViewModel>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	Приборы в системе
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    
    <input class="button" type="button" id="btnRefresh" name="btnRefresh" value="Обновить" onclick='$("#tableDevices").trigger("reloadGrid");'/>
    
    <table id="tableDevices">
        <tr><td/></tr>
    </table>
    
    <div id="pager"></div>
    
<script type="text/javascript">             
    $(function() {
        $("#tableDevices").parent().css("padding-top", "25px");
        $("#tableDevices").jqGrid({
            url: '/Devices/JsonAllDevices',
            datatype: 'JSON',
            mtype: 'GET',
            colNames: ['№ п/п', 'Группа приборов', 'Серия/прошивка', 'Завод. №', 'Последний опрос', 'Время на приборе', 'Результат опроса'],
            colModel: [
                { name: 'Index', align: "center", width: "5%" },
                { name: 'Group', width: "20%" },
                { name: 'Series', width: "10%" },
                { name: 'Number', width: "5%" },
                { name: 'LastSuccessTime', width: "12%" },
                { name: 'LastDeviceTime', width: "13%" },
                { name: 'ResultCode', width: "35%" }

            ],
            
            //shrinkToFit: true,
            width: "600",//$("#wrapper").width(),
            width: $("#tableDevices").parent().width(),
            pager: '#pager',
            rowNum: 10,
            rowList: [10, 25, 50],
            height: "auto",
            sortname: 'Index',
            sortorder: 'asc',
            viewrecords: true,
            gridview: true,
            caption: 'Приборы в системе'
        });
    });
   
</script>
    
</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="HeadContent" runat="server">
    <link href="<%= Url.Content("~/Content/ui.jqgrid.css") %>" rel="stylesheet" type="text/css" />
    <script src="<%= Url.Content("~/Scripts/i18n/grid.locale-ru.js") %>" type="text/javascript"></script>
    <script src="<%= Url.Content("~/Scripts/jquery.jqGrid.min.js") %>" type="text/javascript"></script>
</asp:Content>

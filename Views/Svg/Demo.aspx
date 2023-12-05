<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	Link
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <h2>Link</h2>
    
    <script type="text/javascript"
        src="<%= Url.Content("~/Scripts/jquery-1.3.2.min.js") %>"></script>
    
    <script type="text/javascript">
        {
            var to;
            $(function() {
                to = setTimeout(updateDivContent, 1000);
            });
            function updateDivContent() {
                $('#myResults').load('http://localhost:8080/Bar/Presets/onerow.preset?t3=33', null, function() {
                    to = setTimeout(updateDivContent, 1000);
                });
            }
        }
    </script>
    
    <div id="myResults" style="position:absolute; left: 0px; top:0px; width: auto; height:auto">
    </div>  
    
<%--    <%= Html.Mnemoscheme("Bar", "Preset22", "Div1", 5000) %>
--%>    

    <script type="text/javascript">
        {
            var to2;
            $(function() {
                to2 = setTimeout(updateDivContent2, 1000);
            });
            function updateDivContent2() {
            	$('#Div1').load('http://localhost:8080/Bar/Presets/onerow.preset?t3=33', null, function() {
                    to = setTimeout(updateDivContent2, 1000);
                });
            }
        }
    </script>
    
    <div id="Div1" style="position:absolute; left: 500px; top:200px;">
        Hello!
    </div>   
     
</asp:Content>

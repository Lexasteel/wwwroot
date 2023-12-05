<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<IEnumerable<MnemoProcessing.Tops.ZX>>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	Index
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h2>Index</h2>
    <table border="0" cellspacing="0" cellpadding="0" width="100%">
    	<% foreach (var t in Model){%>
    	<tr> 
    		<td width="200px">
    		    <%=t.Time.ToLongTimeString() %>
    		</td>
    	    <td width="200px">
    	        <%=t.State %>
    	    </td>
    	    <td>
    	        <%=t.Additional %>
    	    </td>
    	</tr>
        <% } %>
    </table>
<%--    <%int i = 0; %>
--%>    	
     <%--<table cellspacing="0" cellpadding="0" width="100%" style="border-style: hidden;">
            <tr>
            <%for (i = 0; i < 20; i++) {%>
    	    <td>
                etrbgrtbg
                </td>
                <td>
                dsbsdb
                </td>
                <td>
                dfvbedvserv
                </td>
            <%} %>
    	</tr>
        </table>--%>
    <%--<table border="0" cellspacing="0" cellpadding="0" width="100%">
    	<tr>
    	<%for (i = 0; i < 20; i++) {%>
    		<td>dfkhvb</td>
    	    <td>dfbjhdbvgwe</td>>
    	    <td>dfbrtbguywegf</td>
    	<%} %>
    	</tr>
    </table>--%>
</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>

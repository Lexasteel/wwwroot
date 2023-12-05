<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<Ergomera.Webserver.Models.FileManager.ManageDirectory>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    Файл-менеджер
</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="HeadContent" runat="server">
    <script type="text/javascript" src="<%=Url.Content("~/Scripts/custom/filemanager.js")%>"> </script>
    <script type="text/javascript">
		$(document).ready(function() {
		    $('#file-manager').layout({ north__resizable: false, west__initClosed: true, north__initClosed: false, north__closable: true, useStateCookie: true, west__minSize: 280 });
		});
	</script>
    <style type="text/css">
        #add-bookmark-dialog p
        {
            width: 100%;
        }
    </style>
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
			
    <div id="file-manager">
        <div id="file-manager-menu" class="pane ui-layout-north" style="background-color: #DDDDDD; min-height: 2.8em;">
            <button id="add-bookmark-button" title="Добавить в избранное">
                Добавить в избранное
            </button>
            <span id="bookmarks">
            </span>
            <script type="text/javascript">
                    function refreshBookmarks() {
                        $("span#bookmarks button").unbind('click'); // Clear memory
                        $("span#bookmarks").load('<%=Url.Action("List", "Bookmark")%>', function() {
                            try {
                                $(this).children("a.bookmark-button").button();
                                $(this).children("button.bookmark-delete-button").button();
                                $(this).children("span.bookmark").buttonset();
                            } catch(e) {
                                alert(e.message);
                            }
                        });
                    }
                </script>
        </div>
        <div id="file-browser" class="pane ui-layout-west">
            <% Html.RenderAction("Browse", new {fn = ViewData["dir"]}); %>
        </div>
        <div id="file-content" class="pane ui-layout-center">
            <% if (!string.IsNullOrEmpty((string) ViewData["file"]))%>
            <%
               {
%>
            <% Html.RenderAction("ContentView",
                       new {filename = ((string) ViewData["file"]).Replace(Path.DirectorySeparatorChar, '/')}); %>
            <% } %>
        </div>
    </div> 
    
    <div id="add-bookmark-dialog" style="display: none;" title="Добавить закладку">
        <p>
            Название закладки:
        </p>
        <p>
            <input type="text" style="width: 100%" name="bookmark-name" autofocus="true"/>
            <span id="bookmark-wait" style="display:none">Подождите...</span>
        </p>
        <p>
            <input type="button" id="add-bookmark-confirmation" class="button" style="width: 100%" value="OK" />
        </p>
        <script type="text/javascript">
            function OnInitConfirmations() {
                $("#add-bookmark-confirmation").bind('click', OnAddBookmark);
                $("input[name='bookmark-name']").bind('keypress', function (e) {
                    if (e.keyCode == 13) OnAddBookmark();
                });
                $("#bookmark-wait").hide();
                $("#add-bookmark-dialog").dialog("close");
            }
            
            function OnAddBookmark() {
                $("#add-bookmark-confirmation").unbind('click');
                $("#bookmark-wait").show();
                var frameUrl = $("#OutContent").attr("src").replace("/Get/", "/FileManager/");
                $.ajax({
                        url: '<%=Url.Action("Add", "Bookmark")%>',
                        type: "POST",
                        data: { Url: frameUrl, Title: $("input[name='bookmark-name']").val() },
                        timeout: 15000
                    })
                    .done(function(res) {
                        if (res) {
                            refreshBookmarks();
                        }
                    })
                    .fail(function(jqXhr, textStatus) {
                        alert(textStatus);
                    })
                    .complete(OnInitConfirmations);
            }

            OnInitConfirmations();
        </script>
    </div>

    <script type="text/javascript">
	    $.fn.exists = function() {
	        return this.length !== 0;
	    };

	    $(function () {

	        $("button.bookmark-delete-button").live('click',
	            function () {
	                if (confirm("Вы точно хотите удалить закладку " + $(this).before().val() + "?")) {
	                    var request = $.ajax({
	                        url: '<%=Url.Action("Delete", "Bookmark")%>',
	                        type: "POST",
	                        data: { Index: parseInt($(this).attr("index")) }
	                    });
	                    request.success(function (data) {
	                        refreshBookmarks();
	                    });
	                }
	            });

	        
	        $("#add-bookmark-button").button({
	            icons: {
	                primary: "ui-icon-plus"
	            },
	            text: false
	        }).click(function () {
	            if ($("#OutContent").exists()) {
	                $("input[name='bookmark-name']").val(decodeURI($("#OutContent").attr("src")).replace("/Get/", "/FileManager/"));
	                $("#add-bookmark-dialog").dialog({
	                    modal: true
	                });
	            } else
	                alert("Выберите какой-либо файл для того, чтобы сохранить закладку на него");
	        });

	        refreshBookmarks();
	    });
	</script>

</asp:Content>
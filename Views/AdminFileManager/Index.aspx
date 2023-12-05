<%@ Page Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<Ergomera.Webserver.Models.FileManager.ManageDirectory>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    Файловый менеджер
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <script src="/Scripts/jquery-1.3.2.min.js" type="text/javascript"></script>

    <div class="filemanager-browser" style="width: 100%; font-size: 15px">
        <h2>
            Путь:
            <%=Model.Path %></h2>
        <br />
        <table cellspacing="0" cellpadding="0" width="100%" style="border-style: hidden;">
            <tr>
                <td width="15%" style="border-style: hidden;">
                    <%using (Ajax.BeginForm("ClearBuffer", new AjaxOptions { UpdateTargetId = "buffer-view" })) %>
                    <% { %>
                    <input type="submit" value="Очистить буфер" />
                    <% } %>
                </td>
                <td style="border-style: hidden;" width="auto" id="buffer-view">
                    <%Html.RenderAction("ViewBuffer"); %>
                </td>
                <td style="border-style: hidden;" width="10%" id="buffer-view">
                    <%if (Session["current_buffer"] != null &&
                      !String.IsNullOrEmpty(((CurrentBuffer)Session["current_buffer"]).Value))%>>
                    <%{ %>
                    <% using (Html.BeginForm("Paste", "AdminFileManager", new { fn = Model.Path })) %>
                    <% { %>
                    <input type="submit" value="Вставить буфер в текущую папку" />
                    <% } %>
                    <%} %>
                </td>
            </tr>
        </table>
        <div id="del-result">
        </div>
        <table style="margin-left: 1%; width: 99%" border="0" cellspacing="0" cellpadding="0">
            <tr>
                <td></td><td></td><td></td><td></td>
                <td width="24">
                    <%=Html.AnchorImage("/Content/images/filemanager/up.gif",
                    "На уровень выше", "Index", 
                    new {fn = System.IO.Path.GetDirectoryName(Model.Path) }, new object())%>
                </td>
                <td>
                    <%=Html.ActionLink(".....", "Index", 
                    new { fn = System.IO.Path.GetDirectoryName(Model.Path)},
                    new { title="На уровень выше"})%>
                </td>
            </tr>
            <%
                int i = 0;
                bool shown = true;
                foreach (var d in Model.Directories)
                {
                    shown = (int)(File.GetAttributes(d) & FileAttributes.Hidden) == 0;%>
            <tr id="file_<%=i%>">
                 <td width="40">
                    <%=Ajax.ImageActionLink(
						 shown ?
                        "/Content/images/filemanager/show_file.png" :
						"/Content/images/filemanager/hidden_file.png", 
                        shown ?
                        "Файл доступен пользователю" :
                        "Файл скрыт от пользователя", 
                        
                        "CheckHide", new { number = i, fn = d }, new AjaxOptions())%>
                </td>
                
                <td width="25">
                    <%=Html.AnchorImage("/Content/images/filemanager/rename.png",
                    "Переименовать", "RenameDirectory", new { fn = d }, new { title = "Переименовать папку" })%>
                </td>
                <td width="30">
                    <%=Ajax.ImageActionLink("/Content/images/filemanager/copy.png",
                    "Копировать", "Copy", new {fn = d}, new AjaxOptions{UpdateTargetId="buffer-view"}) %>
                </td>
                <td width="50">
                    <%=Ajax.ImageActionLink("/Content/images/filemanager/delete.png",
                    "Удалить", "DeleteFile", new { number = i, fn = d },
					new AjaxOptions { Confirm = "Вы действительно хотите удалить папку с ее содержимым??" })%>
                </td>
                
                <td width="25">
                    <%=Html.AnchorImage("/Content/images/filemanager/folder.gif",
                        "Зайти в папку", "Index", new { fn = d }, new object())%>
                </td>
                <td width="auto">
                    <%=Html.ActionLink(System.IO.Path.GetFileName(d), "Index", new { fn = d })%>
                </td>
                
            </tr>
            <% i++;
               }%>
        </table>
        <div style="margin-left: 1%;">
            <%=Html.ActionLink("Создать папку...", "CreateDirectory", new { fn = Model.Path }, 
                    new { title = "Создать папку в текущем месте" })%>
        </div>
        <br />
        <table style="margin-left: 1%; width: 99%" border="0" cellspacing="0" cellpadding="0"
            width="100%">
            <% foreach (var d in Model.Files)%>
            <% { 
                   shown = (int)(File.GetAttributes(d) & FileAttributes.Hidden)==0; %>
            <tr id="file_<%=i%>">
                <td width="40">
                    <%=Ajax.ImageActionLink(
						 shown ?
                        "/Content/images/filemanager/show_file.png" :
						"/Content/images/filemanager/hidden_file.png", 
                        shown ?
                        "Файл доступен пользователю" :
                        "Файл скрыт от пользователя", 
                        
                        "CheckHide", new { number = i, fn = d }, new AjaxOptions())%>
                </td>
                <td width="25">
                    <%=Html.AnchorImage("/Content/images/filemanager/rename.png",
                    "Переименовать", "RenameFile", new { fn = d }, new { title = "Переименовать файл" })%>
                </td>
                <td width="30">
                    <%=Ajax.ImageActionLink("/Content/images/filemanager/copy.png",
                    "Копировать", "Copy", new {fn = d}, new AjaxOptions{UpdateTargetId="buffer-view"}) %>
                </td>
                <td width="30">
                    <%=Ajax.ImageActionLink("/Content/images/filemanager/delete.png",
                    "Удалить", "DeleteFile", new { number = i, fn = d },
					new AjaxOptions { Confirm = "Вы действительно хотите удалить этот файл?" })%>
                </td>
                <td width="35">
                    <%=Html.AnchorImage("/Content/images/filemanager/download.png", 
                    "Сохранить файл", "DownloadFile", new { fn = d}, new object())%>
                </td>
                <td width="40">
                    <%=Html.AnchorImage("/Content/images/filemanager/view.png",
					"Отобразить", "ContentView", new { fn = d}, new object())%>
                </td>
                
                <td width="25">    
                    <%=Html.AnchorImage("/Content/images/filemanager/document.gif",
                        "Редактировать файл", "EditFile",
                        new { path = Model.Path, fn = System.IO.Path.GetFileName(d) }, new object())%>
                </td>
                <td width="auto">
                    <%=Html.ActionLink(System.IO.Path.GetFileName(d), "EditFile",
                    new { path = Model.Path, fn = System.IO.Path.GetFileName(d) },
                    new { title = "Редактировать файл" })%>
                </td>
            </tr>
            <% i++;
               }%>
        </table>
        <div style="margin-left: 10px;">
            <%=Html.ActionLink("Создать текстовый файл", "EditFile", 
                    new { path = Model.Path }, new { title = "Создать файл..." })%>
        </div>
        <br />
        <div style="margin-left: 1%">
            <% using (Html.BeginForm("UploadFile", "AdminFileManager", FormMethod.Post,
                           new { enctype = "multipart/form-data" }))
               {%>
            <%= Html.ValidationSummary(true) %>
            <fieldset>
                <legend>Загрузить файл на сервер в текущую папку</legend>
                <%=Html.HiddenFor(model => model.Path) %>
                <div class="editor-field">
                    <input type="file" name="user_file" style="width: 100%" />
                </div>
                <input type="submit" value="Upload" />
            </fieldset>
            <%} %>
        </div>
    </div>

    <script type="text/javascript">
        function OnItemDeleted(id, filename) {
            document.getElementById("del-result").innerHTML = filename + "  удален!";
            $('#file_' + id).remove();
        }
        function OnItemMissing(filename) {
            document.getElementById("del-result").innerHTML = filename + "  не найден.";
        }

        function OnItemHideCheck(id, filename) {
            location.reload();
        }     
            
    </script>

</asp:Content>

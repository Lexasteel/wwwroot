<%@ Page Language="C#" Inherits="System.Web.Mvc.ViewPage<Ergomera.Webserver.Models.FileManager.ManageBase>" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>UploadFile</title>
</head>
<body>
    <h2>
        To current directory: <%=Model.Path %></h2>
    <div>
        <fieldset>
            <legend>Rename Directory</legend>
            <form action="" method="post">
            <p>
                <label>New Name</label><%=Html.TextBox("name", Path.GetFileName(Model.Path)) %></p>
            <p>
                <input type="submit" value="Rename" /></p>
            </form>
            <%=Html.ActionLink("Back to the " + Path.GetDirectoryName(Model.Path), "Index", new { fn = Path.GetDirectoryName(Model.Path) })%>
        </fieldset>
    </div>
</body>
</html>

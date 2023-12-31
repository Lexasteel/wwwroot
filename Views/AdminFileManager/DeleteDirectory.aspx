<%@ Page Language="C#" Inherits="System.Web.Mvc.ViewPage<Ergomera.Webserver.Models.FileManager.ManageBase>" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>DeleteDirectory</title>
</head>
<body>
    <h2>
        Current Path:<%=Model.Path %></h2>
    <div>
        <fieldset>
            <legend>Delete Directory</legend>
            <form action="" method="post">
            <p>
              Do you want to delete the dictionary:
                "<%=Path.GetFileName(Model.Path) %>"?</p>
            <p>
                
                <input type="submit" value="Yes" />
                or
                <input type="button" value="No" onclick="location='<%=Url.Action("Index",new{fn=Path.GetDirectoryName(Model.Path)}) %>';" /></p>
            </form>
        </fieldset>
    </div>
</body>
</html>

<%@ Page Language="C#" Inherits="System.Web.Mvc.ViewPage<Ergomera.Webserver.Models.FileManager.ManageBase>" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" 
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head runat="server">
    <title>Create Directory</title>
</head>

<body>
    <h2>Current Path:<%=Model.Path %></h2>
    <div>
        <fieldset>
            <legend>Create Directory</legend>
            <form action="" method="post">
            <p><label>Directory Name</label><%=Html.TextBox("name") %></p>
            <p><input type="submit" value="Create" /></p>
            </form>
            Back to <%=Html.ActionLink(Model.Path, "Index", new { fn=Model.Path})%>
        </fieldset>
    </div>
</body>
</html>

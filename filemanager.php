<!DOCTYPE html>
<?php
session_start();
include "connection.php";
?>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Файловый менеджер</title>
    <link href="styles.css" rel="stylesheet">
</head>

<body link="#0000ff" vlink="#0000ff" alink="#ff0000">



    <?php

    echo "<div class='title' id='title'>";
    echo "<div class='user'>";
    echo "<font class='title_text'>";
    echo get_conn_param("organization") . "<br/>";
    echo "ИИС \"Эргомера\"<br/>";
    echo "Поддержка: (0562) 35-76-76<br/>";
    echo "</font>";
    echo "</div>";
    echo "</div>";
    echo "<div class='panel' id='panel'>";
    echo "<div class='menu'>";
    //echo "<button id='b_hideshow' onClick='ShowHide()'><span><em>скрыть файловый менеджер</em></span></button>";
    //echo "<button id='b_hideshow' onClick='ShowHide()'>скрыть файловый менеджер</button>";    
    
    //echo "<a href='http://ergomera.org.ua:84'>техподдержка</a>  ";
    //echo "<a href='graphics.html' target='fr_content' onclick='HideFileManager()' class='menu_link'>графики</a>  ";
    if ($_SESSION['rolename'] == 'admin') {
        echo "<a href='users.php' target='fr_content' onclick='HideFileManager()' class='menu_link'>пользователи</a>  ";
        //echo "<a href='devices.php' target='fr_content' onclick='HideFileManager()' class='menu_link'>приборы</a>  ";
    }
    echo "</div>";

    echo "<div class='horiz_hide_button' onclick='ShowHideTitle()'>";
    echo "</div>";

    echo "<div class='user'>";
    echo "<font class='menu_text'>Добро пожаловать, " . $_SESSION['salutation'] . "!     </font>";
    echo "<a href='index.php' class='menu_link' >выход</a>";
    echo "</div>";

    echo "</div>";

    echo "<div class='background' id='background'>";



    //echo "<button id='b_hideshow' onClick='HiddenShow()'>скрыть файловый менеджер</button><br/>";
    
    if (isset($_GET['path'])) {
        echo "<div class='filemanager' id='file-browser' >";
        //echo "<iframe id='file-browser' name='fr_fileman' src='dir.php?path=".$_GET['path']."' frameborder='0' scrolling='auto' marginheight='20' marginwidth='30'> </iframe>";            
        echo "<iframe name='fr_fileman' src='dir.php?path=" . $_GET['path'] . "' height='100%' width='100%' frameborder='0' scrolling='auto'> </iframe>";
        echo "</div>";
        echo "<div class='showhide' id='file-showhide' >";
        //echo "<button class='control_button' id='b_hideshow' onClick='ShowHide()'></button>";
        ////echo "<button class='vert_hide_button' id='b_hideshow' onClick='ShowHide()'></button>";
        echo "</div>";
        echo "<div class='content' id='file-content'>";
        //echo "<iframe id='file-content' name='fr_content' src='Ergomera.png' frameborder='0' scrolling='auto' marginheight='20' marginwidth='30'> </iframe>";       
        echo "<iframe name='fr_content' src='startpage.php' height='100%' width='100%' frameborder='0' scrolling='auto'> </iframe>";
        echo "</div>";
        //echo "<iframe class='frame' id='file-browser' name='fr_fileman' src='dir.php?path=".$_GET['path']."' width='21%' height='90%' frameborder='0' scrolling='auto' marginheight='20' marginwidth='30'> </iframe>";            
        //echo "<iframe class='frame' id='file-content' name='fr_content' src='Ergomera.png' width='73%' height='90%' frameborder='0' scrolling='auto' marginheight='20' marginwidth='30'> </iframe>";       
    } else
        echo "Не указан путь для файлового менеджера";

    echo "</div>";

    ?>

</body>

</html>

<script type="text/javascript">
    function HideFileManager() {
        var fm = document.getElementById("file-browser");
        var viewer = document.getElementById("file-content");
        var showhide = document.getElementById("file-showhide");
        var btn = document.getElementById("b_hideshow");
        if (fm.style.display == "none") { } else {
            fm.style.display = "none"
            viewer.style.width = "98%";
            viewer.style.left = "1%";
            showhide.style.left = "0%";
            //btn.innerHTML = "показать файловый менеджер";

        }
    }

    function ShowHide() {
        var fm = document.getElementById("file-browser");
        var viewer = document.getElementById("file-content");
        var showhide = document.getElementById("file-showhide");
        var btn = document.getElementById("b_hideshow");
        if (fm.style.display == "none") {
            fm.style.display = "inline";
            viewer.style.width = "76%";
            viewer.style.left = "23%";
            showhide.style.left = "22%";
            //btn.innerHTML = "скрыть файловый менеджер";

        } else {
            fm.style.display = "none"
            viewer.style.width = "98%";
            viewer.style.left = "1%";
            showhide.style.left = "0%";
            //btn.innerHTML = "показать файловый менеджер";

        }
    }

    function ShowHideTitle() {
        var title = document.getElementById("title");
        var panel = document.getElementById("panel");
        var background = document.getElementById("background");

        if (title.style.display == "none") {
            title.style.display = "inline";
            panel.style.top = "70px";
            background.style.top = "100px";
            background.style.height = "85%";
        } else {
            title.style.display = "none";
            panel.style.top = "0px";
            background.style.top = "30px";
            background.style.height = "95%";
        }
    }
</script>
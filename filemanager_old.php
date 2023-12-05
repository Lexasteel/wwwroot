
<html>
	<head>	
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"></meta>
		<title>Файловый менеджер</title>
        <style>            
           .user 
           {
                position: absolute;
                right: 15px; /* Положение от правого края */
                top: 5px;
           }           
           .menu 
           {
                position: absolute;
                left: 15px;
                top: 5px;
           }
           .top_menu 
           {
                position: absolute;
                top: 5px;
                background: #99F;
                width: 98%;
                height: 35px; /* Высота блока */   
                background-image: url(Ergomera.png);
                /*background-size: contain;*/
           }
           .menu_link
           {           
                font-size: 125%;
                font-weight: bold;
                color: #FFF;
           }
        </style>
	</head>
    
	<body link="#0000ff" vlink="#0000ff" alink="#ff0000">
    
<?php 
    session_start();        
    
    echo "<div class='top_menu'>";
        echo "<div class='menu'>";
            echo "<button id='b_hideshow' onClick='ShowHide()'>скрыть файловый менеджер</button>";    
            //echo "<a href='http://ergomera.org.ua:84'>техподдержка</a>  ";
            echo "<a href='users.php' target='fr_content' onclick='HideFileManager()'  class='menu_link'>управление пользователями</a>  ";
        echo "</div>";
        echo "<div class='user'>";
            echo "Добро пожаловать, ".$_SESSION['usr']."!  ";
            echo "<a href='index.php' class='menu_link' >выход</a>";                                   
        echo "</div>";
    echo "</div><br/><br/>";
    
    
    //echo "<button id='b_hideshow' onClick='HiddenShow()'>скрыть файловый менеджер</button><br/>";
             
    if(isset($_GET['path']))
    {         
            echo "<iframe id='file-browser' name='fr_fileman' src='dir.php?path=".$_GET['path']."' width='23%' height='90%' frameborder='0' scrolling='auto' marginheight='20' marginwidth='30'> </iframe>";            
            echo "<iframe id='file-content' name='fr_content' src='Ergomera.png' width='75%' height='90%' frameborder='1' scrolling='auto' marginheight='20' marginwidth='30'> </iframe>";       
    }
    else
        echo "Не указан путь для файлового менеджера";
    
    
?>

    </body>
</html>

<script type="text/javascript">
    function HideFileManager()
    {
        var fm = document.getElementById("file-browser");
        var viewer = document.getElementById("file-content");
        var btn = document.getElementById("b_hideshow");
        if(fm.style.display == "none") 
        {    		
        }
        else
        {
            fm.style.display = "none"
            viewer.width = "98%";
            viewer.style.borderWidth = 0;
            btn.innerHTML = "показать файловый менеджер";
        }
    }
    function ShowHide()
    {				
        var fm = document.getElementById("file-browser");
        var viewer = document.getElementById("file-content");
        var btn = document.getElementById("b_hideshow");
        if(fm.style.display == "none") 
        {
    		fm.style.display = "inline";
            viewer.width = "75%";
            viewer.style.borderWidth = 1;
            btn.innerHTML = "скрыть файловый менеджер";
        }
        else
        {
            fm.style.display = "none"
            viewer.width = "98%";
            viewer.style.borderWidth = 0;
            btn.innerHTML = "показать файловый менеджер";
        }
    }
</script>
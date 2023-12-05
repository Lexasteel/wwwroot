
<html>
	<head>	
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"></meta>
		<title>Файловый менеджер</title>
        <style>
            <?php 
                 include "styles.css";
            ?>
          
        </style>
<!---------------------------------------------------------------------------------------->
<!-- stylesheets -->

	<link href="/Content/jquery-ui.css" rel="stylesheet" type="text/css" />
	<link href="/Content/superfish.css" rel="stylesheet" type="text/css" />
	<link href="/Content/inside_style.css" rel="stylesheet" type="text/css" />
	<link href="/Content/filemanager.css" rel="stylesheet" type="text/css" />
	<link href="/Content/layout-default-latest.css" rel="stylesheet" type="text/css" />

	<!-- jQuery & jQuery UI & Superfish plugin -->

	<script src="/Scripts/jquery.min.js" type="text/javascript"></script>
	<script src="/Scripts/jquery.cookie.js" type="text/javascript"></script>
	<script src="/Scripts/jquery-ui.min.js" type="text/javascript"></script>
	<script src="/Scripts/jquery-ui.datepicker-ru.js" type="text/javascript"></script>
	<script src="/Scripts/jquery.layout.min.js" type="text/javascript"></script>
	<script src="/Scripts/superfish.js" type="text/javascript"></script>
	<script src="/Scripts/extensions.js" type="text/javascript"></script>

	<!-- Microsoft Ajax -->

	<script src="/Scripts/MicrosoftAjax.js" type="text/javascript"></script>

	<script src="/Scripts/MicrosoftMvcAjax.js" type="text/javascript"></script>

	<!-- Sliding effect -->
	<!-- <script src="/Scripts/slide.js" type="text/javascript"></script> -->
	<!-- Initialize main menu (Superfish) -->
	<!-- Initialize buttons (jQuery UI) -->

	<script type="text/javascript">
		$(document).ready(function() {
			$(".button").button();
			$('ul.sf-menu').superfish();
			$("#wrapper").layout({
				south__resizable: false,
				south__closable: false,
				north__resizable: false,
				north__closable: false,
				south__spacing_open: 0,
				north__spacing_open: 0			
			});
	});
	</script>

	
    <style type="text/css">
        .fullsize {width:100%;height:100%;padding:0;margin:0;}
    </style>
    <script type="text/javascript">
    	$(document).ready(function() 
	{
    		$('#plotWindow').layout({ south__size: (window.innerHeight - 40) / 2, south__initClosed: true });
    	});
    </script>  

    <script type="text/javascript" src="/Scripts/flot/jquery.flot.min.js"></script> 
    <script type="text/javascript" src="/Scripts/flot/jquery.flot.navigate.min.js"></script> 
    <script type="text/javascript" src="/Scripts/flot/jquery.flot.resize.min.js"></script> 
    <script type="text/javascript" src="/Scripts/colorpicker.js"></script>
    <script type="text/javascript" src="/Scripts/jquery.watermark.input.min.js"></script>
    <script type="text/javascript" src="/Scripts/knockout-1.2.1.js"></script> 
    <script type="text/javascript" src="/Scripts/knockout.ondemandobservable.js"></script>
    <script type="text/javascript" src="/Scripts/models/constants.js"></script>
    <script type="text/javascript" src="/Scripts/models/group.js"></script>
    <script type="text/javascript" src="/Scripts/models/device.js"></script>
    <script type="text/javascript" src="/Scripts/models/channel.js"></script>
    <script type="text/javascript" src="/Scripts/models/parameter.js"></script>
    <script type="text/javascript" src="/Scripts/models/archivetype.js"></script>
    <script type="text/javascript" src="/Scripts/models/plotseries.js"></script>
    <script type="text/javascript" src="/Scripts/viewmodels/plotmodel.js"></script>
    <script type="text/javascript" src="/Scripts/viewmodels/seriesmodel.js"></script>
    <script type="text/javascript" src="/Scripts/codebehind/plotdialog.js"></script>
    <script type="text/javascript" src="/Scripts/codebehind/plotcontrol.js"></script>

<!---------------------------------------------------------------------------------------->





	</head>
    
	<body link="#0000ff" vlink="#0000ff" alink="#ff0000">


    
<?php 
    
	include "connection.php";    	
	
    session_start();        
?>  
	<div id="full_header" class="ui-layout-north">
			<div id="top-menu">
				<div id="account">
					<ul>
					    <li><a href="/Profile/Details">Профиль</a></li>
					    <li><a href="/Account/LogOff">Выйти</a></li>
					</ul>
				</div>
				<div id="loggedas">
					Приветствуем, <a href="/Profile/Details">Дмитрий Эргомера</a>
				</div>
				<ul class="sf-menu">
					<li><img id="header_show" src="/Content/images/fullscreen.png" style="display: none; margin-right: 5px;" alt="Развернуть"/></li>
					<li> <a href="/Admin/Accounts">Пользователи</a> </li>
					<li> <a href="/AdminFileManager">Управление файлами</a></li>
					<li> <a href="/Plot">Графики</a> </li> 
					<li> <a href="/FileManager">Мнемосхемы и отчёты</a> </li>
					<li><a href="http://ergomera.org.ua:84">Техподдержка</a></li>    
					<script type="text/javascript">
					    $(document).ready(function() {
						$("#header_show").click(function() {
						    $("#header").show();
						    $(this).hide();
						    $.ajax({ url: '/Home/HeaderIsVisible/True' });
						});
						$("#header_hide").click(function() {
					    $("#header").hide();
						    $("#header_show").css("display", "block");
						    $.ajax({ url: '/Home/HeaderIsVisible/False' });
						});
						 ;
						$("#header").show();
						 ;
					    });
					</script>
				</ul>
			</div>			
		</div>  
<?php
/*    echo "<div class='title' id='title'>";           
        echo "<div class='user'>";           
            echo "<font class='title_text'>";
			echo get_conn_param("organization")."<br/>";                        
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
		echo "<a href='graphics.html' target='fr_content' onclick='HideFileManager()' class='menu_link'>графики</a>  ";
            if($_SESSION['rolename'] == 'admin')
                echo "<a href='users.php' target='fr_content' onclick='HideFileManager()' class='menu_link'>управление пользователями</a>  ";
        echo "</div>";

        echo "<div class='horiz_hide_button' onclick='ShowHideTitle()'>";        
        echo "</div>";
        
        echo "<div class='user'>";
            echo "<font class='menu_text'>Добро пожаловать, ".$_SESSION['salutation']."!     </font>";
            echo "<a href='index.php' class='menu_link' >выход</a>";                                   
        echo "</div>";

    echo "</div>";
*/
    echo "<div class='background' id='background'>";
    
    
    
    //echo "<button id='b_hideshow' onClick='HiddenShow()'>скрыть файловый менеджер</button><br/>";
             
    if(isset($_GET['path']))
    {     
            echo "<div class='filemanager' id='file-browser' >";
                //echo "<iframe id='file-browser' name='fr_fileman' src='dir.php?path=".$_GET['path']."' frameborder='0' scrolling='auto' marginheight='20' marginwidth='30'> </iframe>";            
                echo "<iframe name='fr_fileman' src='dir.php?path=".$_GET['path']."' height='100%' width='100%' frameborder='0' scrolling='auto'> </iframe>";            
            echo "</div>";
            echo "<div class='showhide' id='file-showhide' >";
                echo "<button class='control_button' id='b_hideshow' onClick='ShowHide()'></button>";    
            echo "</div>";
            echo "<div class='content' id='file-content'>";
                //echo "<iframe id='file-content' name='fr_content' src='Ergomera.png' frameborder='0' scrolling='auto' marginheight='20' marginwidth='30'> </iframe>";       
                echo "<iframe name='fr_content' src='Ergomera.png' height='100%' width='100%' frameborder='0' scrolling='auto'> </iframe>";       
            echo "</div>";
         //echo "<iframe class='frame' id='file-browser' name='fr_fileman' src='dir.php?path=".$_GET['path']."' width='21%' height='90%' frameborder='0' scrolling='auto' marginheight='20' marginwidth='30'> </iframe>";            
            //echo "<iframe class='frame' id='file-content' name='fr_content' src='Ergomera.png' width='73%' height='90%' frameborder='0' scrolling='auto' marginheight='20' marginwidth='30'> </iframe>";       
    }
    else
        echo "Не указан путь для файлового менеджера";
    
    echo "</div>";
    
?>
	<div id="footer" class="ui-layout-south">
			&copy; 2011, <a href="http://www.ergomera.dp.ua">ИИС Эргомера</a>, версия
			1.1234.0.0. Все права защищены.		
        </div>

    </body>
</html>

<script type="text/javascript">
    function HideFileManager()
    {
        var fm = document.getElementById("file-browser");
        var viewer = document.getElementById("file-content");
        var showhide = document.getElementById("file-showhide");
        var btn = document.getElementById("b_hideshow");
        if(fm.style.display == "none") 
        {    		
        }
        else
        {
            fm.style.display = "none"
            viewer.style.width = "98%";            
            viewer.style.left = "1%";            
            showhide.style.left = "0%";            
            //btn.innerHTML = "показать файловый менеджер";
            
        }
    }
    function ShowHide()
    {				
        var fm = document.getElementById("file-browser");
        var viewer = document.getElementById("file-content");
        var showhide = document.getElementById("file-showhide");
        var btn = document.getElementById("b_hideshow");
        if(fm.style.display == "none") 
        {
    		fm.style.display = "inline";
            viewer.style.width = "76%";  
            viewer.style.left = "23%";     
            showhide.style.left = "22%";            
            //btn.innerHTML = "скрыть файловый менеджер";
            
        }
        else
        {
            fm.style.display = "none"
            viewer.style.width = "98%";       
            viewer.style.left = "1%"; 
            showhide.style.left = "0%";            
            //btn.innerHTML = "показать файловый менеджер";
            
        }
    }
    function ShowHideTitle()
    {
        var title = document.getElementById("title");
        var panel = document.getElementById("panel");
        var background = document.getElementById("background");
        
        if(title.style.display == "none") 
        {    	
            title.style.display = "inline";
            panel.style.top = "11%";
            background.style.top = "16%";
            background.style.height = "84%";
        }
        else
        {
            title.style.display = "none";
            panel.style.top = "0%";
            background.style.top = "5%";
            background.style.height = "95%";
        }
    }
</script>

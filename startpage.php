<!DOCTYPE html>
<?php
session_start();

include "connection.php";
?>
<!--
<html>
	<head>	
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8"></meta>
		<title>Быстрый старт</title>
		<style>
			<?php
			include "styles.css";
			?>
		  
		</style>
	</head>
	
	<body link="#0000ff" vlink="#0000ff" alink="#ff0000">
		<p>БЫСТРЫЙ СТАРТ</p>
<?php
setlocale(LC_ALL, '');

if (isset($_SESSION['usr'])) {
	$dir = "Users/" . $_SESSION['usr'];

	/*echo "<table><tr>";
		  $i = 0;
				  foreach(glob($dir."*.html") as $mnemo)
			  {
				  //echo "<td><iframe name='$mnemo' src='$mnemo' height='100%' width='100%' frameborder='0' scrolling='auto'> </iframe></td>";            
				  echo "<td width='200' height='200'><a href='$mnemo'>".basename($mnemo, ".html")."</a></td>";            
				  $i++;
				  if($i > 1)
				  {
					  $i = 0;
					  echo "</tr><tr>";
				  }
			  }
		  echo "</tr></table>";
		  */
	echo "<div>Мнемосхемы:</br>";
	foreach (glob($dir . "/Мнемосхемы/" . "*.html") as $mnemo) {
		echo "<a href='$mnemo'>" . basename($mnemo, ".html") . "</a></br>";
	}
	echo "</div>";

	echo "<div>Отчеты:</br>";
	foreach (glob($dir . "/Отчеты/" . "*.html") as $rep) {
		echo "<a href='$rep'>" . basename($rep, ".html") . "</a></br>";
	}
	echo "</div>";
}
?>
	</body>
</html>

-->
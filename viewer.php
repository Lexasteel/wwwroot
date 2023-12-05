<!DOCTYPE html>
<?php
session_start();
$file_name = "Users/" . $_SESSION['usr'] . $_GET['path'];
if (file_exists($file_name))
	readfile($file_name);
else
	echo "Нет такого файла! " . $file_name;
?>
<?php
session_start();
include "connection.php";
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Список файлов</title>
    <link href="styles.css" rel="stylesheet">
</head>

<body link="#0000ff" vlink="#0000ff" alink="#ff0000">

    <?php
    setlocale(LC_ALL, '');

    if (isset($_SESSION['usr'])) {
        if (isset($_GET['path'])) {
            $path = $_GET['path'];
            $path_array = explode("/", $path);
            $dir = "Users/" . $_SESSION['usr'] . $path . "/";
            $_SESSION['current_dir'] = "Users/" . $_SESSION['usr'] . $path;
            if (get_conn_param("os") == "windows") {
                $i = 0;
                foreach ($path_array as $item) {
                    $path_array[$i] = urlencode($path_array[$i]);
                    $i++;
                }
            }

            $dirs = [];
            $files = [];
            $hdl = opendir($dir);
            while ($file = readdir($hdl)) {
                $shown_value = $file;
                if (get_conn_param("os") == "windows")
                    $shown_value = iconv("windows-1251", "UTF-8", $file);

                if (($shown_value != ".") && ($shown_value != "..")) {
                    if (preg_match('|^\.|Uis', $shown_value, $ret) == 0) //если имя файла или директории не начинается с точки
                    {
                        if (is_dir($dir . $file))
                            $dirs[] = $shown_value;

                        if (is_file($dir . $file)) { //если файл не заканчивается на .report.html и не заканчивается на ~ и заканчивается на .html
                            if (preg_match('|(.*)\.report.html|Uis', $shown_value, $ret) == 0 && preg_match('|(.*)\~|Uis', $shown_value, $ret) == 0 && preg_match('|(.*)\.html|Uis', $shown_value, $file_name) == 1)
                                $files[] = $file_name[1]; //имя файла без расширения. Все файлы должна быть .html  
                            //$files[] = $file;                    
                        }
                    }
                }


            }
            closedir($hdl);

            rsort($dirs);
            rsort($files);

            $temp_path = $path;

            if (count($path_array) > 0) {
                $temp_array = $path_array;
                unset($temp_array[count($temp_array) - 1]);
                $temp_path = join("/", $temp_array);
            }
            echo "<div align='center' height='100%' width='100%'>";

            if (strlen($path) > 0) {
                if (get_conn_param("os") == "windows")
                    echo "<font class='menu_text'>Текущий каталог:" . $path . "</font><br/><br/>";
                else
                    echo "<font class='menu_text'>Текущий каталог:" . $path . "</font><br/><br/>";
            }
            //echo mb_internal_encoding();
            echo "<a class='dir_link' href='dir.php?path=$temp_path'>Вернуться назад</a><br/><br/>";

            foreach ($dirs as $value) {
                if (get_conn_param("os") == "windows") {
                    $href_path = join("/", $path_array);
                    $enc_val = urlencode(iconv("UTF-8", "windows-1251", $value));
                } else {
                    $href_path = $path;
                    $enc_val = $value;
                }
                echo "<a class='dir_link' href='dir.php?path=$href_path/$enc_val'>" . iconv("UTF-8", "Windows-1251", $value) . "</a><br/>";
            }

            foreach ($files as $value) {
                if (get_conn_param("os") == "windows") {
                    $href_path = join("/", $path_array) . "/";
                    $href_path = $href_path . urlencode(iconv("UTF-8", "windows-1251", $value . ".html"));
                } else
                    $href_path = $path . "/" . $value . ".html";

                echo "<a class='dir_link' href='viewer.php?path=$href_path' target='fr_content'>" . iconv("UTF-8", "windows-1251", $value) . "</a> ";
                echo "<a class='dir_link' href='viewer.php?path=$href_path' target='_blank'>[+]</a><br/>";

            }
            echo "</div>";
        }
    } else {
        //echo "Сессия была прервана. Повторите вход в систему.";
        echo "<script language=javascript>";
        echo "window.open('index.php', '_parent', '')";
        echo "</script> ";
    }
    ?>
</body>

</html>
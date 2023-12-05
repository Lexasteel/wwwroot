<?php

include "connection.php";
$message = "";
if (isset($_POST['submit'])) {

    if (isset($_POST['user']) && isset($_POST['pass'])) {
        $stmt = "SELECT * FROM users where username='" . $_POST['user'] . "';";
        $dbh = ibase_connect(get_conn_param("db_main"), get_conn_param("username"), get_conn_param("password"), get_conn_param("charset")) or die("Ошибка соединения " . ibase_error());
        $result = ibase_query($dbh, $stmt) or die("Ошибка запроса " . ibase_error());
        if ($result == 0)
            echo "<B>Ошибка при чтении из базы!</B>";
        else {
            $r = ibase_fetch_assoc($result);
            if (get_code_pass($_POST['pass'], $r['PASSWORDSALT']) == $r['USERPASSWORD']) {
                $stmt = "SELECT * FROM profiles where username='" . $_POST['user'] . "';";
                $result = ibase_query($dbh, $stmt) or die("Ошибка запроса " . ibase_error());
                $profile = ibase_fetch_assoc($result);

                $stmt = "SELECT * FROM usersinroles where username='" . $_POST['user'] . "';";
                $result = ibase_query($dbh, $stmt) or die("Ошибка запроса " . ibase_error());
                $role = ibase_fetch_assoc($result);

                session_start();
                $_SESSION['id'] = $r['ID'];
                $_SESSION['usr'] = $_POST['user'];
                $_SESSION['salutation'] = $profile['SALUTATION'];
                $_SESSION['rolename'] = $role['ROLENAME'];
                setcookie("id", $r['ID'], time() + 60 * 60 * 24 * 30);
                setcookie("usr", $_POST['user'], time() + 60 * 60 * 24 * 30);

                ibase_free_result($result);
                ibase_close($dbh);


                header("Location: filemanager.php?path=");
                exit();
            } else {
                $message = "Неправильное имя пользователя или пароль!<br/><br/>";
            }
        }
    }
}


?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Авторизация</title>
    <link href="styles.css" rel="stylesheet">
</head>

<body>
    <form method="post">
        <div class='title' id='title'>
            <div class='user'>
                <font class='title_text'>
                    <?php echo get_conn_param("organization"); ?> <br />
                    ИИС "Эргомера"<br />
                    Поддержка: (0562) 35-76-76<br />
                </font>
            </div>
        </div>
        <div class='panel' id='panel'>
            <div class='user'>
                <font class='menu_text'>Авторизация</font>
            </div>
        </div>
        <div class='background' id='background' align='center'>
            <font class='menu_text'>
                <?php echo $message; ?>
            </font>
            <table name="table1" id="table1" border="0">
                <tr>
                    <td align='right' class='menu_text'>Имя пользователя:</td>
                    <td><input type="text" name="user" size="50"></td>
                </tr>
                <tr>
                    <td align='right' class='menu_text'>Пароль:</td>
                    <td><input type="password" name="pass" size="50"></td>
                </tr>
                <tr align='center'>
                    <td></td>
                    <td><input name="submit" type=submit value="Вход" class='my_button'></td>
                </tr>
            </table>
        </div>
    </form>
</body>

</html>
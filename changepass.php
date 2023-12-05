<html>
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"></meta>
		<title>
			Изменение пароля
		</title>
        <style>
            <?php 
                 include "styles.css";
            ?>
    </style>
	</head>
	<body>	

<!--		<form action="action.php" name="myform" method="post"> -->
		<form method="post">    
            <div align='center'>
                <br>Новый пароль:</br>
                <br><input type="password" name="pass" size="50"/></br>
                <br>Подтвердите новый пароль:</br>
                <br><input type="password" name="conf_pass" size="50"/></br>
                <br><input name="submit" type=submit value="Сохранить" class='my_button'/></br>
            </div>
		</form>		
	</body>
</html>

<?php
    include "connection.php";
 
    if(isset($_POST['submit']))
    {       
        if(strlen($_POST['pass']) > 0)
        {
            if(strlen($_POST['conf_pass']) > 0)
            {  
                if(strCmp ($_POST['pass'], $_POST['conf_pass']) == 0)
                {                          
                    $pwd_salt = base64_encode(sha1(rand()));
                    $cache_pwd = get_code_pass($_POST['pass'], $pwd_salt);     
                    $pkid = GUID();

                    $stmt = "UPDATE users SET userpassword='".$cache_pwd."', passwordsalt='".$pwd_salt."' WHERE username='".$_GET['username']."';";                           
                    $dbh = ibase_connect(get_conn_param("db_main"), get_conn_param("username"), get_conn_param("password"), get_conn_param("charset")) or die("Ошибка соединения ". ibase_error());           
                    $result = ibase_query($dbh, $stmt);// or die("Ошибка запроса ". ibase_error());                            
                    echo ibase_errmsg();
                
                    if($result == true)
                    {
                        ibase_free_result($result);
                        ibase_close($dbh);
                        header("Location: users.php"); exit();
                    }
                    else
                        echo "<B>Запрос на изменение пароля НЕ выполнился!</B>";                                            
                }
                else
                    echo "Пароль не совпадает с подтвержденным!";
            }
            else
                echo "Поле \"Подтвердите пароль\" должно быть заполнено!";
        }
        else
            echo "Поле \"Пароль\" должно быть заполнено!";
    }
?>
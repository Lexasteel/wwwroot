<html>
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"></meta>
		<title>
			Новый пользователь
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
            <br>Логин:</br>
            <br><input type="text" name="login" size="50"/>*</br>
            <br>Полное имя:</br>
            <br><input type="text" name="name" size="50"/>*</br>
            <br>Описание:</br>
            <br><input type="text" name="description" size="50"/></br>
            <br>Пароль:</br>
            <br><input type="password" name="pass" size="50"/>*</br>
            <br>Подтвердите пароль:</br>
            <br><input type="password" name="conf_pass" size="50"/>*</br>
            <br><input name="submit" type=submit value="Добавить" class='my_button'/></br>
            </div>
		</form>		
	</body>
</html>

<?php
    include "connection.php";
 
    if(isset($_POST['submit']))
    {
        if(strlen($_POST['login']) > 0)
        {
            if(strlen($_POST['name']) > 0)
            {
                if(strlen($_POST['pass']) > 0)
                {
                    if(strlen($_POST['conf_pass']) > 0)
                    {  
                        if(strCmp ($_POST['pass'], $_POST['conf_pass']) == 0)
                        {
                            $stmt = "SELECT * FROM users where username='".$_POST['login']."';";
                            $dbh = ibase_connect(get_conn_param("db_main"), get_conn_param("username"), get_conn_param("password"), get_conn_param("charset")) or die("Ошибка соединения ". ibase_error());           
                            $result = ibase_query($dbh, $stmt) or die("Ошибка запроса ". ibase_error());

                            if ($result == 0)
                                echo "<B>Ошибка при чтении из базы!</B>";
                            else
                            {
                                if(ibase_fetch_assoc($result) == false)//не найдено ни одного пользователя с таким логином
                                {
                                    $pwd_salt = base64_encode(sha1(rand()));
                                    $cache_pwd = get_code_pass($_POST['pass'], $pwd_salt);     
                                    $pkid = GUID();
        
                                    $stmt = "INSERT INTO users (username, comment, userpassword, passwordsalt, creationdate, pkid, applicationname) values ('".$_POST['login']."', '".$_POST['name']."','".$cache_pwd."', '".$pwd_salt."', 'NOW','".$pkid."', '/');";                           
                                    $result = ibase_query($dbh, $stmt);// or die("Ошибка запроса ". ibase_error());                            
                                    echo ibase_errmsg();
                                
                                    if($result == true)
                                    {
                                        //$stmt = "INSERT INTO PROFILES (username, salutation) values ('".$_POST['login']."', '".$_POST['name']."');";                           
                                        $stmt = "UPDATE PROFILES SET salutation='".$_POST['name']."', description='".$_POST['description']."' WHERE username='".$_POST['login']."';";                           
                                        $result = ibase_query($dbh, $stmt);// or die("Ошибка запроса ". ibase_error());                            
                                        echo ibase_errmsg();                                
                                    
                                        if($result == true)
                                        {                                              
                                            //echo "Пользователь был успешно добавлен! Ура товарищи!";
                                            $stmt = "INSERT INTO usersinroles (username, rolename, applicationname) values ('".$_POST['login']."', 'user','/');";                           
                                            $result = ibase_query($dbh, $stmt);// or die("Ошибка запроса ". ibase_error());                            
                                            echo ibase_errmsg();
                                        
                                            if(!file_exists("Users/".$_POST['login']))
                                                mkdir("Users/".$_POST['login']);
                                                
                                            ibase_free_result($result);
                                            ibase_close($dbh);
                                            header("Location: users.php"); exit();                                      
                                        }
                                    }
                                    else
                                        echo "<B>Запрос на добавление пользователя НЕ выполнился!</B>";
                            
                            //        echo $pkid;
                                
                                }
                                else
                                {
                                    echo "Пользователь с таким логином уже существует! Выберите другой логин.";
                                }
                                
                                ibase_free_result($result);
                                ibase_close($dbh);
                            }
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
            else
                echo "Поле \"Полное имя\" должно быть заполнено!";
        }
        else
            echo "Поле \"Логин\" должно быть заполнено!";
    }
?>
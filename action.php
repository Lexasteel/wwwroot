<?php
	if (isset($_POST['user']) && isset($_POST['pass']))
	{
		$usr = $_POST['user'];
		$pwd = $_POST['pass'];
		$host = "192.168.0.12:kpws_main";
		$username = "SYSDBA";
		$password = "ergosystem";
		$charset = "win1251";

		
//		$stmt = "SELECT id FROM users where username='$usr' and userpassword='$pwd'";
		$stmt = "SELECT * FROM users where username='$usr'";

/*		
		$gfc = $e + $fg;
		echo "gfc = ".$gfc."<br/>";
		$gg = 45 / $gfc;	
		echo "gg = ".$gg."<br/>";
*/

		$dbh = ibase_connect($host, $username, $password, $charset) or die("Ошибка соединения ". ibase_error()); 
		$result = ibase_query($dbh, $stmt) or die("Ошибка запроса ". ibase_error());
		   
		if ($result == 0)
			echo "<B>Ошибка!</B>";
		else
		{
			$r = ibase_fetch_assoc($result);
			$id = $r['ID'];
			$salt = $r['PASSWORDSALT'];
			$u_pwd = $r['USERPASSWORD'];

			//$_SESSION['user_id'] = $r['id'];
			//echo "id = ".$id."<br/>";
		
			//echo "USERPASSWORD = ".$u_pwd."<br/>";		
            
            $bytes64 = mb_convert_encoding($pwd, 'UTF-16LE');
            $salt64 = base64_decode($salt);
            $pwd64 = base64_encode(sha1($salt64 . $bytes64, true));
            //echo "pwd64 = ".$pwd64."<br/>";
            
            if($pwd64 == $u_pwd)
            {
                echo "Добро пожаловать, ".$usr."!<br/>";
            }
			else
            {
                echo "Неправильное имя пользователя или пароль!<br/>";               
            }
/*
			$i = 0; 
			while ($r = ibase_fetch_assoc($result))
			{
				 $i++;
			} 
			if ($i == 0)
				echo "Нет таких пользователей";
			if ($i == 1)
			{
			//	$row = ibase_fetch_assoc($result);
			//	$_SESSION['user_id'] = $row['id'];
			//	echo $row['id'];				
				echo 1;
			}
			if ($i > 1)
				echo "To many users!";
*/
		}

/*
	    $login = mysql_real_escape_string($_POST['login']);
	    $password = md5($_POST['password']);

	    // делаем запрос к БД
	    // и ищем юзера с таким логином и паролем

	    $query = "SELECT `id`
		    FROM `users`
		    WHERE `login`='{$login}' AND `password`='{$password}'
		    LIMIT 1";
	    $sql = mysql_query($query) or die(mysql_error());

	    // если такой пользователь нашелся
	    if (mysql_num_rows($sql) == 1) {
		// то мы ставим об этом метку в сессии (допустим мы будем ставить ID пользователя)

		$row = mysql_fetch_assoc($sql);
		$_SESSION['user_id'] = $row['id'];

		// не забываем, что для работы с сессионными данными, у нас в каждом скрипте должно присутствовать session_start();
	    }
	    else {
		die('Такой логин с паролем не найдены в базе данных. И даём ссылку на повторную авторизацию.');
	    }
*/
	}

?>

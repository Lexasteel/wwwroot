<html>
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"></meta>
		<title>
			Редактирование данных
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

<?php    
    include "connection.php";
    session_start(); 
    
    $stmt = "SELECT * FROM profiles where username='".$_GET['username']."';";
    $dbh = ibase_connect(get_conn_param("db_main"), get_conn_param("username"), get_conn_param("password"), get_conn_param("charset")) or die("Ошибка соединения ". ibase_error());           
    $result = ibase_query($dbh, $stmt) or die("Ошибка запроса ". ibase_error());
    if ($result == 0)
        echo "<B>Ошибка при чтении из базы!</B>";
    else
    {
        $r = ibase_fetch_assoc($result);
        
        echo "<br>Полное имя:</br>";
        echo "<br><input type='text' name='name' size='50' value='".$r['SALUTATION']."'/></br>";
        echo "<br>Описание:</br>";
        echo "<br><input type='text' name='description' size='50' value='".$r['DESCRIPTION']."'/></br>";
    }
    
    if(isset($_POST['submit']))
    {
        //$stmt = "SELECT * FROM profiles where username='".$_GET['username']."';";
        $stmt = "UPDATE profiles SET salutation='".$_POST['name']."', description='".$_POST['description']."' WHERE username='".$_GET['username']."';";                           
        $result = ibase_query($dbh, $stmt) or die("Ошибка запроса ". ibase_error());
        if ($result == 0)
            echo "<B>Ошибка при чтении из базы!</B>";
        else
        {
            ibase_free_result($result);
            ibase_close($dbh);
            header("Location: users.php"); exit();                                      
            /*echo "name=".$_POST['name']."<br/>";
            echo "description=".$_POST['description']."<br/>";
            echo "user=".$_GET['username']."<br/>";
*/
        }
    }
?>
        
        <br><input name="submit" type=submit value="Сохранить" class='my_button'></br>
        </div>
		</form>		
	</body>
</html>
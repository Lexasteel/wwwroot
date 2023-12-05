
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"></meta>
    <title>Управление пользователями</title>
    <style>
            <?php 
                 include "styles.css";
            ?>
    </style>
 </head>
 <body link="#0000ff" vlink="#0000ff" alink="#ff0000">
    <form method="post">
    <div align='center'>    
        <table border='0' width='100%' class='menu_text' align='center'>
            <thead  align='center'><tr>
                <td>Удалить?</td>
                <td>Логин</td>
                <td>Полное имя</td>
                <td>Описание</td>
                <td>Администратор?</td>
                <td>Эксперт?</td>
                <td>Заблокирован</td>
                <td>Действия</td>
            </tr></thead>      
 
<?php    
    include "connection.php";
    $stmt = "SELECT PROFILES.USERNAME AS USERNAME, PROFILES.SALUTATION AS SALUTATION, PROFILES.DESCRIPTION AS DESCRIPTION, USERSINROLES.ROLENAME AS ROLENAME, USERS.ISLOCKEDOUT AS ISLOCKEDOUT FROM PROFILES LEFT JOIN USERSINROLES ON (PROFILES.USERNAME = USERSINROLES.USERNAME) LEFT JOIN USERS ON (PROFILES.USERNAME = USERS.USERNAME);";
    //$stmt = "SELECT PROFILES.USERNAME AS USERNAME, PROFILES.SALUTATION AS SALUTATION, PROFILES.DESCRIPTION AS DESCRIPTION, USERSINROLES.ROLENAME AS ROLENAME FROM PROFILES LEFT JOIN USERSINROLES ON PROFILES.USERNAME = USERSINROLES.USERNAME;";
    //$stmt = "SELECT * FROM profiles;";
    $dbh = ibase_connect(get_conn_param("db_main"), get_conn_param("username"), get_conn_param("password"), get_conn_param("charset")) or die("Ошибка соединения ". ibase_error());
    $result = ibase_query($dbh, $stmt) or die("Ошибка запроса ". ibase_error());

    if ($result == 0)
        echo "<B>Ошибка при чтении из базы!</B>";
    else
    {        
        //$bgcolor = '#ffcc00';        
        while($r = ibase_fetch_assoc($result))
        {
            if(strCaseCmp ($bgcolor, "#ffffff") != 0)
                $bgcolor = "#ffffff";
            else
                $bgcolor = "#eeeeee";
            if($r['ROLENAME'] == "admin")
                $admin_flag = "checked";
            else
                $admin_flag = "";
            if($r['ISLOCKEDOUT'] == 0)
                $locked_flag = "";
            else
                $locked_flag = "checked";
            
            echo "<tr bgcolor=$bgcolor>";
            echo "<td><input type='checkbox' name='is_remove[]' value='".$r['USERNAME']."'></input></td>";
            echo "<td>".$r['USERNAME']."</td>";
            echo "<td>".$r['SALUTATION']."</td>";
            echo "<td>".$r['DESCRIPTION']."</td>";
            echo "<td><input type='checkbox' name='is_admin[]' value='".$r['USERNAME']."' ".$admin_flag."></input></td>";
            echo "<td><input type='checkbox' name='is_expert[]' value='".$r['USERNAME']."' ".$expert_flag."></input></td>";            
            echo "<td><input type='checkbox' name='is_lockedout[]' value='".$r['USERNAME']."' ".$locked_flag."></input></td>";
            echo "<td><a href='edituser.php?username=".$r['USERNAME']."'>[РЕДАКТИРОВАТЬ]</a><a href='changepass.php?username=".$r['USERNAME']."'>[СМЕНИТЬ ПАРОЛЬ]</a></td>";
            echo "</tr>";
        }
        echo "</table>";
        echo "<br/><a href='adduser.php' class='menu_text'>[Добавить пользователя]</a><br/><br/><br/>";
        //echo "<button id='b_hideshow' onClick='ShowHide()'>добавить пользователя</button><br/><br/><br/>";
        //echo "<button id='b_save' onClick='Save()'>сохранить</button>";
        //echo "<button id='b_exit' align='right' onClick='ShowHide()'>выход</button>";
        echo "<input name='submit' type=submit value='Сохранить' class='my_button'>";
        
         if(isset($_POST['submit']))
        {           
            foreach($_POST['is_remove'] as $arr)            
            {
             //   echo $arr."<br/>";
                //$stmt = "DELETE FROM profiles WHERE username='".$arr."'; DELETE FROM users WHERE username='".$arr."';DELETE FROM usersinroles WHERE username='".$arr."';";                
                $stmt = "DELETE FROM profiles WHERE username='".$arr."';";
                $result = ibase_query($dbh, $stmt) or die("Ошибка запроса ". ibase_error());
                $stmt = "DELETE FROM users WHERE username='".$arr."';";
                $result = ibase_query($dbh, $stmt) or die("Ошибка запроса ". ibase_error());
                $stmt = "DELETE FROM usersinroles WHERE username='".$arr."';";
                $result = ibase_query($dbh, $stmt) or die("Ошибка запроса ". ibase_error());

                if ($result == 0)
                    echo "<B>Ошибка при удалении из базы!</B>";   
                
            }
            
            $stmt = "SELECT USERNAME FROM PROFILES;";            
            $result = ibase_query($dbh, $stmt) or die("Ошибка запроса ". ibase_error());
            while($r = ibase_fetch_assoc($result))
            {
                if(in_array($r['USERNAME'], $_POST['is_admin']))
                    $stmt = "UPDATE usersinroles SET rolename='admin' WHERE username='".$r['USERNAME']."';";   
                else
                    $stmt = "UPDATE usersinroles SET rolename='user' WHERE username='".$r['USERNAME']."';";                    
                $result2 = ibase_query($dbh, $stmt) or die("Ошибка запроса ". ibase_error());                            
                
                if(in_array($r['USERNAME'], $_POST['is_lockedout']))
                    $stmt = "UPDATE users SET islockedout=1 WHERE username='".$r['USERNAME']."';";                           
                else
                    $stmt = "UPDATE users SET islockedout=0 WHERE username='".$r['USERNAME']."';";
                $result2 = ibase_query($dbh, $stmt) or die("Ошибка запроса ". ibase_error());                            

            }

   /*         
            foreach($_POST['is_admin'] as $arr)            
            {                
                //$stmt = "UPDATE OR INSERT INTO usersinroles (username, rolename, applicationname) values ('".$arr."', 'admin', '/');";      
                $stmt = "UPDATE usersinroles SET rolename='admin' WHERE username='".$arr."';";                           
                $result = ibase_query($dbh, $stmt);// or die("Ошибка запроса ". ibase_error());                            
                echo ibase_errmsg();
                if ($result == 0)
                    echo "<B>Ошибка при изменении прав пользователя!</B>";
            }
            
            foreach($_POST['is_lockedout'] as $arr)            
            {                
                $stmt = "UPDATE users SET islockedout=1 WHERE username='".$arr."';";                           
                $result = ibase_query($dbh, $stmt);// or die("Ошибка запроса ". ibase_error());                            
                echo ibase_errmsg();
                if ($result == 0)
                    echo "<B>Ошибка при изменении прав пользователя!</B>";
            }
      */      
            ibase_free_result($result);
            ibase_close($dbh);
            echo '<meta http-equiv="refresh" content="0; url=users.php">';
            
            
        }
        
        ibase_free_result($result);
        ibase_close($dbh);
    }
?>
        </div>
        </form>		
    </body>
</html>
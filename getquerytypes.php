<?php 

    include "connection.php";
    $stmt = "SELECT * FROM QUERIES_TYPES;";
    $dbh = ibase_connect(get_conn_param("db_main"), get_conn_param("username"), get_conn_param("password"), get_conn_param("charset")) or die("Ошибка соединения ". ibase_error());           
    $result = ibase_query($dbh, $stmt) or die("Ошибка запроса ". ibase_error());    

    if ($result == 0)
        echo "<B>Ошибка при чтении из базы!</B>";
    else
    {       
	while($r = ibase_fetch_assoc($result))
        {
		$arr = array();
		$arr['id'] = (int) $r['ID'];
		$arr['title'] = iconv('cp1251', 'utf-8', $r['NAME']);
		$ret_arr[] = $arr;
		
        }
	if($ret_arr == null)
		echo "[]";
	else
		echo json_encode($ret_arr);
        ibase_free_result($result);
        ibase_close($dbh);
    }
    
?>

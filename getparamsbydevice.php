<?php 

    include "connection.php";

//	$stmt = "SELECT * FROM DEVICES_PARAMS WHERE CHANNEL=".$_GET['channel']." AND VIEW_ID=(SELECT FIRST 1 ID FROM VIEWS_INFO WHERE QUERY_TYPE=".$_GET['queryType'].");";
//	$stmt = "SELECT * FROM DEVICES_PARAMS WHERE (CHANNEL IS NULL OR CHANNEL=".$_GET['channel'].") AND VIEW_ID=(SELECT FIRST 1 ID FROM VIEWS_INFO WHERE SERIES_UID=(SELECT FIRST 1 SERIES_UID FROM DEVICES WHERE UID='".$_GET['deviceUID']."'));";
//$stmt = "SELECT * FROM DEVICES_PARAMS WHERE (CHANNEL IS NULL OR CHANNEL=".$_GET['channel'].") AND VIEW_ID=(SELECT FIRST 1 ID FROM VIEWS_INFO WHERE SERIES_UID=(SELECT FIRST 1 SERIES_UID FROM DEVICES WHERE UID='".$_GET['deviceUID']."') AND QUERY_TYPE=".$_GET['queryType'].");";
//$stmt = "SELECT * FROM DEVICES_PARAMS WHERE (CHANNEL IS NULL OR CHANNEL=".$_GET['channel'].") AND VIEW_ID=(SELECT FIRST 1 VIEW_ID FROM QUERIES WHERE SERIES_UID=(SELECT FIRST 1 SERIES_UID FROM DEVICES WHERE UID='".$_GET['deviceUID']."') AND QUERY_TYPE=".$_GET['queryType'].");";
	$stmt = "SELECT * FROM DEVICES WHERE UID='".$_GET['deviceUID']."';";
	$dbh = ibase_connect(get_conn_param("db_main"), get_conn_param("username"), get_conn_param("password"), get_conn_param("charset")) or die("Ошибка соединения ". ibase_error());           
	$result = ibase_query($dbh, $stmt) or die("Ошибка запроса ". ibase_error());    
	if ($result == 0)
		echo "<B>Ошибка при чтении из базы!</B>";
	else
	{       
		$r = ibase_fetch_assoc($result);
	        $series_uid = $r['SERIES_UID'];
	}

	$stmt = "SELECT * FROM QUERIES WHERE SERIES_UID='".$series_uid."' AND QUERY_TYPE=".$_GET['queryType'].";";
	$result = ibase_query($dbh, $stmt) or die("Ошибка запроса ". ibase_error());    
	if ($result == 0)
		echo "<B>Ошибка при чтении из базы!</B>";
	else
	{

		$r = ibase_fetch_assoc($result);
		if($r == null)
		{
			$stmt = "SELECT * FROM VIEWS_INFO WHERE SERIES_UID='".$series_uid."' AND QUERY_TYPE=".$_GET['queryType'].";";
			$result = ibase_query($dbh, $stmt) or die("Ошибка запроса ". ibase_error());    
//echo $stmt;       
			if ($result == 0)
				echo "<B>Ошибка при чтении из базы!</B>";
			else
			{       
				$r = ibase_fetch_assoc($result);

				$view_id = $r['ID'];
			}
		}
		else
		        $view_id = $r['VIEW_ID'];
	}
//echo "view_id=".$view_id;
	$stmt = "SELECT * FROM DEVICES_PARAMS WHERE (CHANNEL IS NULL OR CHANNEL=".$_GET['channel'].") AND VIEW_ID=".$view_id." AND IS_VISIBLE_FOR_USER=1;";
	$result = ibase_query($dbh, $stmt) or die("Ошибка запроса ". ibase_error());    
    if ($result == 0)
        echo "<B>Ошибка при чтении из базы!</B>";
    else
    {       
	while($r = ibase_fetch_assoc($result))
        {
		$arr = array();
		$arr['id'] = (int) $r['ID'];
		$arr['title'] = iconv('cp1251', 'utf-8', $r['TITLE']);
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

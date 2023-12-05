<?php 

    include "connection.php";


	$stmt = "SELECT * FROM DEVICES_PARAMS WHERE ID=".$_GET['parameterId'].";";
    $dbh = ibase_connect(get_conn_param("db_main"), get_conn_param("username"), get_conn_param("password"), get_conn_param("charset")) or die("Ошибка соединения ". ibase_error());     
    $result = ibase_query($dbh, $stmt) or die("Ошибка запроса ". ibase_error());    

    if ($result == 0)
        echo "<B>Ошибка при чтении из базы!</B>";
    else
    {       
	$r = ibase_fetch_assoc($result);
        $column_name = $r['COLUMN_NAME'];
    }



	$stmt = "SELECT * FROM DEVICES WHERE UID='".$_GET['deviceUID']."';";
    $result = ibase_query($dbh, $stmt) or die("Ошибка запроса ". ibase_error());    

    if ($result == 0)
        echo "<B>Ошибка при чтении из базы!</B>";
    else
    {       
	$r = ibase_fetch_assoc($result);
        $series_uid = $r['SERIES_UID'];
    }

	//$stmt = "SELECT * FROM VIEWS_INFO WHERE SERIES_UID='".$series_uid."';";
	$stmt = "SELECT * FROM VIEWS_INFO WHERE ID=(SELECT FIRST 1 VIEW_ID FROM DEVICES_PARAMS WHERE ID=".$_GET['parameterId'].");";
    $result = ibase_query($dbh, $stmt) or die("Ошибка запроса ". ibase_error());    

    if ($result == 0)
        echo "<B>Ошибка при чтении из базы!</B>";
    else
    {       
	$r = ibase_fetch_assoc($result);
        $view_name = $r['VIEW_NAME'];
    }


	$start = $_GET['fromDate']." 00:00:00";
        $end = $_GET['toDate']." 23:59:59";

	$stmt = "SELECT ".$column_name.",TIME_SS_MM_HH_DD_MM_YY FROM ".$view_name." WHERE DEVICE_UID='".$_GET['deviceUID']."' AND ADDITIONAL_FLAG=0 AND TIME_SS_MM_HH_DD_MM_YY between '".$start."' and '".$end."' ORDER BY TIME_SS_MM_HH_DD_MM_YY;";	
//echo $stmt;
/*	$stmt = "SELECT (SELECT FIRST 1 COLUMN_NAME FROM DEVICES_PARAMS WHERE ID=".$_GET['parameterId'].") as 'PARAM',DEVICE_TIME as 'TIME' FROM (SELECT FIRST 1 VIEW_NAME FROM VIEWS_INFO WHERE SERIES_UID=(SELECT FIRST 1 SERIES_UID FROM DEVICES WHERE UID='".$_GET['deviceUID']."')) WHERE DEVICE_UID='".$_GET['deviceUID']."' AND DEVICETIME>=cast('".$_GET['fromDate']."' as DATE) AND DEVICETIME<=cast('".$_GET['toDate']."' as DATE);";
    $dbh = ibase_connect(get_conn_param("db_main"), get_conn_param("username"), get_conn_param("password"), get_conn_param("charset")) or die("Ошибка соединения ". ibase_error());     
*/
    $result = ibase_query($dbh, $stmt) or die("Ошибка запроса ". ibase_error());    

    if ($result == 0)
        echo "<B>Ошибка при чтении из базы!</B>";
    else
    {       
	while($r = ibase_fetch_assoc($result))
        {	
		$arr = array();			
		$arr[] = strtotime($r['TIME_SS_MM_HH_DD_MM_YY']) * 1000;
		$arr[] = $r[$column_name];
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

<meta http-equiv="Content-Type" content="text/html; charset=utf-8"></meta>
<?php

    if(isset($_GET['doc_type']))
    {
        if($_GET['doc_type'] == "xls")
        {
            header("Content-Type: application/vnd.ms-excel");
            header('Content-Disposition: attachment; filename="Отчет.xls"'); 
        }
    }
        
    include "connection.php";
    session_start(); 

    $report_file = $_GET['report_file'];//daily.report.html
    $uid = $_GET['uid'];//E125OLD-585
    $from_str = $_GET['from_str'];//E125_DAILY
    $where_str = $_GET['where_str'];//DEVICE_UID%3D%27E125OLD-585%27+AND+ADDITIONAL_FLAG%3D0
    $report_ch = $_GET['report_ch'];//1
    $unit = $_GET['unit'];//%D1%81%D1%83%D1%82%D0%BA%D0%B8
    $conn = $_GET['conn'];//%D0%9E%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B9+%D0%BF%D0%BE%D1%82%D0%BE%D0%BA
    $report_type = $_GET['report_type'];//%D1%81%D1%83%D1%82%D0%BE%D1%87%D0%BD%D1%8B%D0%B9
    $column_title = $_GET['column_title'];        //
    $unitSelect = $_GET['unitSelect'];//daily
    $showtype = $_GET['showtype'];//report
    $PeriodType = $_GET['PeriodType'];//0
    $StartPeriod = $_GET['StartPeriod'];//25.01.2012
    $EndPeriod = $_GET['EndPeriod'];//25.01.2012
    $OneDay = $_GET['OneDay'];//25.01.2012
    $MY_Month = $_GET['MY_Month'];//1
    $MY_Year = $_GET['MY_Year'];//2012       
    $QY_Quartal = $_GET['QY_Quartal'];//1
    $QY_Year = $_GET['QY_Year'];//2012
    $Year = $_GET['Year'];//2012
    $view = $_GET['view'];//%D0%9F%D0%BE%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C+%D0%BE%D1%82%D1%87%D0%B5%D1%82
    $columnHeader = $_GET['columnHeader'];//%D0%A0%D0%B0%D1%81%D1%85%D0%BE%D0%B4    
   
  
    if($_GET['PeriodType'] == 0)
    {
        $start = $_GET['StartPeriod']." 00:00:00";
        $end = $_GET['EndPeriod']." 23:59:59";
    }
    if($_GET['PeriodType'] == 1)
    {
        $start = $_GET['OneDay']." 00:00:00";
        $end = $_GET['OneDay']." 23:59:59";
    }
    if($_GET['PeriodType'] == 2)
    {
        $start = "01.".$_GET['MY_Month'].".".$_GET['MY_Year']." 00:00:00";
        if($_GET['MY_Month'] < 12)            
            $end = "01.".($_GET['MY_Month'] + 1).".".$_GET['MY_Year']." 23:59:59";
        else
            $end = "01.01.".($_GET['MY_Year'] + 1)." 23:59:59";
    }
    if($_GET['PeriodType'] == 3)
    {
        $start = "01.".(1 + ($_GET['QY_Quartal'] - 1) * 3).".".$_GET['QY_Year']." 00:00:00";
        $end = "01.".(4 + ($_GET['QY_Quartal'] - 1) * 3).".".$_GET['QY_Year']." 23:59:59";       
    }
    if($_GET['PeriodType'] == 4)
    {
        $start = "01.01.".$_GET['Year']." 00:00:00";
        $end = "01.01.".($_GET['Year'] + 1)." 23:59:59";
    }
  
 /* 
echo "PeriodType = ".$_GET['PeriodType'];
echo "Start = ".$start;
echo "End = ".$end;
 */
//echo "File = ".$_SESSION['current_dir'].$_GET['file'];

	//$file_name = $_SESSION['current_dir'].$_GET['file'];
	/*if(get_conn_param("os") == "windows")
	{
		$path_array = explode("/" , $file_name);
		$i = 0;
		foreach($path_array as $item)
		{				
			$path_array[$i] = urldecode($path_array[$i]);												
			$i++;
		}
		
		$file_name = join("/", $path_array);
		
	}
	*/
	$file_name = $_SESSION['current_dir'].$_GET['file'];
	
	//$file_name = iconv("windows-1251", "UTF-8", $file_name);
	//echo $file_name;
	
	if(file_exists($file_name))	
		$text = file_get_contents($file_name); 
	else
		echo "Нет такого файла! ".$file_name;
	
    ////////////////////////////////////////////////////
     /*$customize_count = preg_match_all('|<customize[^>]*>(.*)</customize>|Uis', $text, $customize_string);
                for($m = 0; $m < $customize_count; $m++)
                {
                    echo "0 = ".$customize_string[0][$m]."<br/>";
                    echo "1 = ".$customize_string[1][$m]."<br/>";                                                                             
                } 
        */       
    ////////////////////////////////////////////////
    $scripts_count = preg_match_all('|<script[^>]*>(.*)</script>|Uis', $text, $scripts);

    for($i = 0; $i < $scripts_count; $i++)
    {
        if(preg_match('|<script[^>]* xsi:type=\"(.*)\"|Uis', $scripts[0][$i], $script_type) == 1)//если найдено хотя бы одно совпадение
        {
            //echo "script_type = ".$script_type[1];

            if($script_type[1] == "value-script")
            {
                //----------------------------------formats-----------------------------------------//
                if(preg_match('|<format[^>]*>(.*)</format>|Uis', $scripts[0][$i], $format_string) == 1)
                {
                    //----------------------------------queries-----------------------------------------//
                    if(preg_match('|<query[^>]*>(.*)</query>|Uis', $scripts[0][$i], $query_string) == 1)
                    {                        

                        $query_string[1] = str_replace ("@start", "'".$start."'", $query_string[1]);
                        $query_string[1] = str_replace ("@end", "'".$end."'", $query_string[1]);
                        //----------------------------------connection-----------------------------------------//
                        if(preg_match('|connection=\"(.*)\"|Uis', $query_string[0], $connection_string) == 1)
                        {

                            //echo "query_string=".$query_string[1];
                            
                            //$stmt = strip_tags($query_string[1]);//строка запроса       							
                            $stmt = $query_string[1];//строка запроса                          
/*echo "<br/>stmt = ".$stmt;		
echo "<br/>ConnectionString = ".$connection_string[1];
echo "<br/>UserName = ".get_conn_param("username");
echo "<br/>Password = ".get_conn_param("password");
echo "<br/>Charset = ".get_conn_param("charset");
*/
                            $dbh = ibase_connect($connection_string[1], get_conn_param("username"), get_conn_param("password"), get_conn_param("charset")) or die("Ошибка соединения ". ibase_error());                                       

                            $result = ibase_query($dbh, $stmt) or die("Ошибка запроса ". ibase_error());    
                            if ($result == 0)
                                echo "<B>Ошибка при чтении из базы!</B>";		
                            else
                            {                                    
                                $r = ibase_fetch_assoc($result);                            
                                $k = 0;
                                foreach($r as $r1)
                                {                                 
                                    $ret_mass[$k] = $r1;
                                    $format_string[1] = str_replace ("{".$k."}", $ret_mass[$k], $format_string[1]);
                                    $k++;
                                }                            
                                //echo preg_replace ("\{([0-9])+\}", "$ret_mass[$1]", $format_string[1]);//+++++++
                                //echo $format_string[1];
                                //$scripts[0][$i] = $format_string[1];
                                
                                ibase_free_result($result);
                                ibase_close($dbh);
                                
                                //$text = preg_replace ('<script[^>]* xsi:type=\"value-script\">(.*)</script>', $scripts[0][$i], $text, 1);
                                $text = preg_replace ('|<script[^>]* xsi:type=\"value-script\">(.*)</script>|Uis', $format_string[1]."<br/>", $text, 1);
                            }
                        }
                        else
                            echo "Не указано соединение с БД!";
                    }
                    else
                        echo "Не указана строка запроса!";
                }
                else
                    echo "Не указан формат вывода данных!";
            }
            if($script_type[1] == "row-script")
            {                             
                //----------------------------------queries-----------------------------------------//
                if(preg_match('|<query[^>]*>(.*)</query>|Uis', $scripts[0][$i], $query_string) == 1)
                {
                    $query_string[1] = str_replace ("@start", "'".$start."'", $query_string[1]);
                    $query_string[1] = str_replace ("@end", "'".$end."'", $query_string[1]);
                    //----------------------------------connection-----------------------------------------//
                    if(preg_match('|connection=\"(.*)\"|Uis', $query_string[0], $connection_string) == 1)
                    {
                        //echo "query_string=".$query_string[1];
                        
                        $stmt = $query_string[1];//строка запроса                          
                        //$stmt = strip_tags($query_string[1]);//строка запроса                          
                //$stmt = "SELECT * FROM E12609_DAILY";
                //echo $stmt."<br/><br/><br/>";
                //echo $_GET['StartPeriod']."<br/>";
                //echo $_GET['EndPeriod']."<br/>";
/*echo "<br/>stmt = ".$stmt;		
echo "<br/>ConnectionString = ".$connection_string[1];
echo "<br/>UserName = ".get_conn_param("username");
echo "<br/>Password = ".get_conn_param("password");
echo "<br/>Charset = ".get_conn_param("charset");
*/

                        $dbh = ibase_connect($connection_string[1], get_conn_param("username"), get_conn_param("password"), get_conn_param("charset")) or die("Ошибка соединения ". ibase_error());                 
                        $result = ibase_query($dbh, $stmt) or die("Ошибка запроса ". ibase_error());    

                        if ($result == 0)
                            echo "<B>Ошибка при чтении из базы!</B>";
                        else
                        {                               
                            
                            $ret_str = "";
                            while($r = ibase_fetch_assoc($result))
                            {
                                $ret_str = $ret_str."<tr align='center'>";
                                //$r = ibase_fetch_assoc($result);
                                foreach($r as $key => $value)
                                {  
                       /* echo "key = ".$key."<br/>";
                        echo "value = ".$value."<br/>";
                        echo "column=\"".$key."\"<br/>";
*/
                                    $params = "";
                                    //---------------------------------customize-----------------------------------------//
                                    $customize_count = preg_match_all('|<customize[^>]*>(.*)</customize>|Uis', $scripts[0][$i], $customize_string);
                                    for($m = 0; $m < $customize_count; $m++)
                                    {
                                        //echo "0 = ".$customize_string[0][$m]."<br/>";
                                        //echo "1 = ".$customize_string[1][$m]."<br/>";                                      
                                        //echo "column=\"".$key."\"";
                                        if(preg_match("|column=\"$key\"|Uis", $customize_string[0][$m], $column_string) == 1)
                                        {                                    
                                            $params = $params.$customize_string[1][$m]." ";
                                            //echo "!!!";
                                        }
                                    }                                    
                            
                                    $ret_str = $ret_str."<td ".$params.">";
                                    if(is_float($value))//если число с плавающей точкой
                                        $value = number_format($value, 2, '.', '');
                                    $ret_str = $ret_str.$value;
                                    $ret_str = $ret_str."</td>";
                                }

                                $ret_str = $ret_str."</tr>";                                    
                            }
                            $text = preg_replace ('|<script[^>]* xsi:type=\"row-script\">(.*)</script>|Uis', $ret_str, $text, 1);
                            
                            ibase_free_result($result);
                            ibase_close($dbh);
                        }
                    }
                    else
                        echo "Не указано соединение с БД!";
                }
                else
                    echo "Не указана строка запроса!";
            }
        }
   
        
    }
    
    //preg_replace ('|<script[^>]* xsi:type=\"value-script">(.*)<query[^>]* connection=\"([^>]*)\">(.*)</query>(.*)<format>(.*)</format>(.*)</script>|',
    
    //echo "OK";    
    echo $text;
?>

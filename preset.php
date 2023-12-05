<?php 
    
    include "connection.php";


    $preset = $_GET['preset'];
    $table_name = $_GET['table_name'];
    $column_name = $_GET['column_name'];
    $control_val = $_GET['control_val'];
    $device = $_GET['device'];
    $series = $_GET['series'];
    $ed_izm = $_GET['ed_izm'];
    $delta_time = $_GET['delta_time'];
    $t3_level_lines = $_GET['t3_level-lines'];    
    $t3_realmin = $_GET['t3_realmin'];    
    $t3_realmax = $_GET['t3_realmax'];    
    
      
    $levels = array("low_level", "avg_level", "high_level");//название уровней обязательно должно идти в порядке от нижнего к верхнему
    for($i = 0; $i < count($levels); $i++)
    {
        if(preg_match('|'.$levels[$i].'\,(.*)\,(.{6})|Uis', $_GET['t3_level-lines'], $ret_string) == 1)    
        {        
            $level_values[] = $ret_string[1];//нижние значения уровней
            $color_values[] = $ret_string[2];//соответствующие цвета для уровней
        }
    }

    function get_param($string, $param)
    {
        //$tags_count = preg_match_all("#<".$param."[^>]*>(.*)</".$param.">#is", $string, $matches);      
        $tags_count = preg_match_all("#".$param."=\"([0-9]*)\"#is", $string, $matches);      
        if($tags_count > 0)
            //return strip_tags($matches[0][0]);
        {
            $tags_count2 = preg_match_all("#([0-9]+)#is", $matches[0][0], $matches2);      
            if($tags_count2 > 0)
                return $matches2[0][0];
            else
                return 0;
        }
        else        
            return 0;
    }    
            
     
 
    //$stmt = "SELECT ".$control_val." FROM ".$table_name." where DEVICE_UID='".$device."';";    
    $stmt = "SELECT ".$column_name." AS ".$control_val." FROM ".$table_name." where DEVICE_UID='".$device."';";    
    $dbh = ibase_connect(get_conn_param("db_current"), get_conn_param("username"), get_conn_param("password"), get_conn_param("charset")) or die("Ошибка соединения ". ibase_error());           
    $result = ibase_query($dbh, $stmt) or die("Ошибка запроса ". ibase_error());    

    if ($result == 0)
        echo "<B>Ошибка при чтении из базы!</B>";
    else
    {        
        $r = ibase_fetch_assoc($result);
        $return = $r[$control_val];

        if(isset($_GET['svg']))    
        {        
            $svg_path = "Users/Shared/Svgs/".$_GET['svg'].".svg";        
            $text = file_get_contents($svg_path); 
            $valueBottom = get_param($text, "valueBottom");
            $valueTop = get_param($text, "valueTop");
            $t3_height = ($return - $t3_realmin)*($valueBottom - $valueTop)/($t3_realmax - $t3_realmin);            
            $t3_white_space = $valueBottom - $t3_height;
            
            for($i = 0; $i < count($level_values); $i++)//определяем цвет уровня
            {                
                if($return > $level_values[$i])
                    $level_index = $i;
            }
             
            $text = str_replace("param(t3_height)", $t3_height, $text);                        
            $text = str_replace("param(t3_color)", "#".$color_values[$level_index], $text);
            $text = str_replace("param(t3_white_space)", $t3_white_space, $text);
            
                       
        
            echo $text;
 
        }
        else
        {
            $ret_string = "";
            if(isset($_GET['title']))//если есть заголовок
                $ret_string = $ret_string.urldecode($_GET['title']."<br/>");
                
            if(is_float($return))//если число с плавающей точкой
                $ret_string = $ret_string.round($return, 2);
            else
                $ret_string = $ret_string.$return;
                
            if(isset($_GET['ed_izm']))
                $ret_string = $ret_string.urldecode($_GET['ed_izm']);
                
            echo $ret_string;
        }
            
        ibase_free_result($result);
        ibase_close($dbh);
    }
?>
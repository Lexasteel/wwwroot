<?php
function get_conn_param($param)
    {
        $text = file_get_contents("config"); 
        $tags_count = preg_match_all("#<".$param."[^>]*>(.*)</".$param.">#is", $text, $matches);      
        if($tags_count > 0)
            return strip_tags($matches[0][0]);
        else        
            return 0;
    }   
    
    function get_code_pass($pwd, $salt)
    {	
        //$bytes64 = mb_convert_encoding($pwd, 'UTF-16LE');
		$bytes64 = iconv("UTF-8", "UTF-16LE", $pwd);	
        $salt64 = base64_decode($salt);		
        $pwd64 = base64_encode(sha1($salt64 . $bytes64, true));		
        return $pwd64;	
    }
    
    function GUID()
    {
         //return sprintf('%04X%04X-%04X-%04X-%04X-%04X%04X%04X', mt_rand(0, 65535), mt_rand(0, 65535), mt_rand(0, 65535), mt_rand(16384, 20479), mt_rand(32768, 49151), mt_rand(0, 65535), mt_rand(0, 65535), mt_rand(0, 65535));
          $length = 5;
        $characters = ’0123456789abcdefghijklmnopqrstuvwxyz’;
        $string = ”;    
        for ($p = 0; $p < $length; $p++) {
            $string .= $characters[mt_rand(0, strlen($characters))];
        }
        return $string;
    }
?>

<?php 
    $url = "http://api.geonames.org/searchJSON?q=" . $_REQUEST['searchTerm'] . "&maxRows=10&username=2xserious";

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);

    $result = curl_exec($ch);
    curl_close($ch);
   

    header('Content-Type: application/json; charset=UTF-8');
?>
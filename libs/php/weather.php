<?php
    $url = "http://api.geonames.org/findNearByWeatherJSON?lat=" . $_REQUEST['lat'] . "&lng=" . $_REQUEST['lng'] . "&username=2xserious";
    
    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, $url);

    $result = curl_exec($ch);

    curl_close($ch);
    header('Content-Type: application/json; charset=UTF-8');

?>
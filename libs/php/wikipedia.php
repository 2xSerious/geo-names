<?php

    $url = "http://api.geonames.org/wikipediaSearch?q=" . $_REQUEST['term'] ."&maxRows=10&username=2xserious";

    $ch = curl_init();
    
    curl_setopt_array($ch, Array(
        CURLOPT_URL            => $url,
        CURLOPT_RETURNTRANSFER => TRUE,
        CURLOPT_ENCODING       => 'UTF-8'
    ));

    $result = curl_exec($ch);
    curl_close($ch);

    $xml = simplexml_load_string($result);
    $json = json_encode($xml, JSON_PRETTY_PRINT);
    $array = json_decode($json, true);

    print_r($json);
?>
<?php
      

    $url = 'http://api.geonames.org/geoCodeAddressJSON?q=' . $_REQUEST['qterm'] . '&username=2xserious';
    
    // curl resource
    $ch = curl_init();
    // curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	// curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_URL, $url);

    $result = curl_exec($ch);

    curl_close($ch);
    // echo $result;

    
    header('Content-Type: application/json; charset=UTF-8');
    

?>
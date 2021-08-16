$('#searchCity').click(function() {

    var term = $('#city').val();
    
    $.ajax({
        url: "/geo/libs/php/search.php",
        type: 'POST',
        dataType: 'json',
        data: {
            searchTerm: term
        },
        success: function(result) {
            console.log(result['geonames']);
            var response = result['geonames'][0];
            var lng = response['lng'];
            var lat = response['lat'];
            var address = response['name'] + ", " + response['countryName'] + ", " + response['countryCode'];
            var gUrl = `https://maps.google.com/maps?q=london&t=&z=9&ie=UTF8&iwloc=&output=embed`;
            $('#txtLng').html("Longitude: " + lng);
            $('#txtLat').html("Latitude: " + lat);
            $('#txtAddress').html("Address: " + address);
            $('#gmap_canvas').attr('src', gUrl);
            $('input').val('');

            

        }
    });
});
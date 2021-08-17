$('#wikipediaBtn').click(function () {

    var term = $('#wikipedia').val();

    $.ajax({
        url: "/geo/libs/php/wikipedia.php",
        type: "POST",
        dataType: 'json',
        data: {
            term: term
        },
        success: function (result) {
            console.log(result['entry']);
            var response = result['entry'];
            var str;
            response.filter(element => element['feature'] == 'city');
            for (let index = 0; index < response.length; index++) {
                const element = response[index];
                str += `<tr><td>${element['title']}</td><td><a href="${element['wikipediaUrl']}" target="_blank">${element['wikipediaUrl']}</a></td></tr>`;
            }

            $('#txtTitle').html("Wikipedia");
            $('#aside').html(str);
            $('#aside').addClass("table table-sm");
            
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
                    var city = response['name']
                    var address = response['name'] + ", " + response['countryName'] + ", " + response['countryCode'];
                    var gUrl = `https://maps.google.com/maps?q=${city}&t=&z=11&ie=UTF8&iwloc=&output=embed`;
                    
                    $('#txtLng').html("Longitude: " + lng);
                    $('#txtLat').html("Latitude: " + lat);
                    $('#txtAddress').html("Address: " + address);
                    $('#gmap_canvas').attr('src', gUrl);
                }
                });
        }
    })
})
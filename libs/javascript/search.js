$('#searchCity').click(function() {
    var term = $('#city').val();

    $.ajax({
        url: "libs/php/search.php",
        type: "POST",
        dataType: "json",
        data: {
            searchTerm: term
        },
        success: function(result) {
            console.log(result);

            
        }
    })
})
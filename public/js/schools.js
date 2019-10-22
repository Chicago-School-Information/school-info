var address = "";

        $("#submit").on("click", function (event) {
            event.preventDefault();
            let userZip = $("#zipcode").val().trim();
            console.log(userZip);
            var queryURL = "/api/"+userZip;
            $.ajax(queryURL).then(function (req,res) {
                console.log(req.json());
                console.log(res);
            })
        })
 
   
        // $(".petition-button").on("click", function (event) {
        //     alert("submit button hit")
        // })


    var map;
    var infowindow;
    function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: {lat: 41.8781, lng: -87.6298}
    });
    infowindow = new google.maps.InfoWindow();

    map.data.loadGeoJson('assets/map_data/Chicago_Public_Schools-School_Locations_SY1415.geojson');
    map.data.addListener('click', function(event){
        var feat = event.feature;
        var html = "<b>"+feat.getProperty('school_nm')+"</b><br>"+feat.getProperty('sch_addr');
        infowindow.setContent(html);
        infowindow.setPosition(event.latLng);
        infowindow.setOptions({pixelOffset: new google.maps.Size(0,-34)});
        infowindow.open(map);
    })

    var geocoder = new google.maps.Geocoder();

    document.getElementById('submit').addEventListener('click', function() {
        geocodeAddress(geocoder, map);
    });
    }

    function geocodeAddress(geocoder, resultsMap) {
    var address = document.getElementById('zipcode').value;
    geocoder.geocode({'address': address}, function(results, status) {
        if (status === 'OK') {
        resultsMap.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: resultsMap,
            position: results[0].geometry.location
        });
        } else {
        alert('Geocode was not successful for the following reason: ' + status);
        }
    });
    }




// This array has all of Chicago's zip codes. We'll use it later to check if we're using a valid zip code befoe we make a geocode call to Google
var chicagoZips = ["60601", "60602", "60603", "60604", "60605", "60606", "60607", "60608", "60609", "60610", "60611", "60612", "60613", "60614", "60615", "60616", "60617", "60618", "60619", "60620", "60621", "60622", "60623", "60624", "60625", "60626", "60628", "60629", "60630", "60631", "60632", "60633", "60634", "60636", "60637", "60638", "60639", "60640", "60641", "60642", "60643", "60644", "60645", "60646", "60647", "60649", "60651", "60652", "60653", "60654", "60655", "60656", "60657", "60659", "60660", "60661", "60664", "60666", "60668", "60669", "60670", "60673", "60674", "60675", "60677", "60678", "60680", "60681", "60682", "60684", "60685", "60686", "60687", "60688", "60689", "60690", "60691", "60693", "60694", "60695", "60696", "60697", "60699", "60701", "60706", "60707", "60803", "60804", "60805", "60827"]

// Here we establish some global variables we'll be using with the map.
    var address = "";
    var map;
    var infowindow;
    // Here we're starting up the map.
    function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        // This is info used to display the default location and zoom level.
        zoom: 14,
        center: {lat: 41.8781, lng: -87.6298}
    });
    // Here we're starting up our infowindows. Infowindows are the little pop-ups with information that appear when you click a school marker on our map.
    infowindow = new google.maps.InfoWindow();

    // Here, we're telling Maps to grab the GEOJSON data from this file and use it to populate school markers on the map.
    map.data.loadGeoJson('assets/map_data/Chicago_Public_Schools-School_Locations_SY1415.geojson');
    // This is a listener that's looking for clicks on school map points so we can give the user the appropriate infowindow
    map.data.addListener('click', function(event){
        var feat = event.feature;
        // Here we're setting the text we want to pu in our infowindow.
        var html = "<b>"+feat.getProperty('school_nm')+"</b><br>"+feat.getProperty('sch_addr');
        // Next we set the text.
        infowindow.setContent(html);
        // These lines specify the position of the infowindow and how it's tip should be positioned.
        infowindow.setPosition(event.latLng);
        infowindow.setOptions({pixelOffset: new google.maps.Size(0,-34)});
        // This tells the infowindow to open.
        infowindow.open(map);
    })

    // Geocoder is a seperate Maps API. It's what we use to shift the map to a new location based on the zip code the user entered.
    var geocoder = new google.maps.Geocoder();

    // Here we've got a listener for the zip code submit button. When the user submits a zip, we feed it to the Geocode api.
    document.getElementById('submit').addEventListener('click', function() {
        geocodeAddress(geocoder, map);
    });
    }

    // This is the function that does the Geocode api call.
    function geocodeAddress(geocoder, resultsMap) {
        // Before making the call, we check if the zip given is a valid Chicago zip. If it isn't, we don't make the call.
    var address = document.getElementById('zipcode').value;
    if(chicagoZips.includes(address)){
        // The call itself.
    geocoder.geocode({'address': address}, function(results, status) {
        if (status === 'OK') {
        resultsMap.setCenter(results[0].geometry.location);
        // Here we define how the marker for the user's zip should be displayed. We made it different so it won't be confused for a school.
        var marker = new google.maps.Marker({
            map: resultsMap,
            position: results[0].geometry.location,
            icon: {
                path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                scale: 5,
                fillColor: 'blue',
                fillOpacity: 1,
                strokeColor: 'blue',
                strokeWeight: 5
            }
        });
        }
        // This bit of code has the page auto-scroll from the zip entry form to the map. It's not google map related!
        $('html,body').animate({
            scrollTop: $("#map").offset().top},
            'slow');
    });
    };}




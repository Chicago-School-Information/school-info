$(document).ready(function () {


    function sendZip(zip) {
        console.log("first part worked");

        $.get("/api/" + zip,
        {
            zip: zip
        },
            function (data, status) {
                console.log(data);
                console.log("I'm before the loop.");
                console.log(data.schools[0].school_name);
                
                
                for (var i = 0; i < data.schools.length; i++) {
                    console.log("Hi");
                    var school_name = data.schools[i].school_name;
                    $(".school-report-cards").append(school_name);
                };
                
            })
    }

    $("#submit").on("click", function (event) {
        event.preventDefault();
        let userZip = $("#zipcode").val().trim();
        console.log(userZip);
        sendZip(userZip);
    })
})

$(document).ready(function () {


    function sendZip(zip) {
        console.log("first part worked");
        $.get("/api/" + zip,
            {
                zip: zip,
            },
            function (data, status) {
                console.log(data);
            });

    }
    $("#submit").on("click", function (event) {
        event.preventDefault();
        let userZip = $("#zipcode").val().trim();
        console.log(userZip);
        sendZip(userZip);
    })
})

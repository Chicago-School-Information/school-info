$(document).ready(function () {


    function sendZip(zip) {
        console.log("first part worked");
        console.log(data)
        $.get("/api/" + zip,
            {
                zip: zip
            },
            function (data, status) {
                console.log(data);
<<<<<<< HEAD

                for (var i = 0; i < data.schools.length; i++) {
                    var school_name = data.schools[i].school_name;
                    $(".school-report-cards").append(school_name);
                    $("<br>");
                    $(".school-report-cards").append(data.schools[i].Alderman.alderman);
=======
                $(".school-report-cards").empty();
                for (var i = 0; i < data.schools.length; i++) {
                    var school_name = data.schools[i].school_name;
                    var school_level = data.schools[i].level;
                    var school_safety = data.schools[i].safety_icon;
                    var instruction_score = data.schools[i].instruction_score;
                    $(".school-report-cards").append(`<ul><li>Name: ${school_name}</li><li>School Level: ${school_level}</li><li>Safety Strength: ${school_safety}</li><li>Instruction Score: ${instruction_score}</li></ul><hr>`);

>>>>>>> master
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

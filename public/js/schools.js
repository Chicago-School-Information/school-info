var chicagoZips = ["60601", "60602", "60603", "60604", "60605", "60606", "60607", "60608", "60609", "60610", "60611", "60612", "60613", "60614", "60615", "60616", "60617", "60618", "60619", "60620", "60621", "60622", "60623", "60624", "60625", "60626", "60628", "60629", "60630", "60631", "60632", "60633", "60634", "60636", "60637", "60638", "60639", "60640", "60641", "60642", "60643", "60644", "60645", "60646", "60647", "60649", "60651", "60652", "60653", "60654", "60655", "60656", "60657", "60659", "60660", "60661", "60664", "60666", "60668", "60669", "60670", "60673", "60674", "60675", "60677", "60678", "60680", "60681", "60682", "60684", "60685", "60686", "60687", "60688", "60689", "60690", "60691", "60693", "60694", "60695", "60696", "60697", "60699", "60701", "60706", "60707", "60803", "60804", "60805", "60827"]

$(document).ready(function () {


    function sendZip(zip) {
        console.log("first part worked");

        $.get("/api/" + zip,
        {
            zip: zip
        },
            function (data, status) {
                console.log(data);
                $(".school-report-cards").empty();
                for (var i = 0; i < data.schools.length; i++) {
                    var school_name = data.schools[i].school_name;
                    var school_level = data.schools[i].level;
                    var school_safety = data.schools[i].safety_icon;
                    var instruction_score = data.schools[i].instruction_score;
                    $(".school-report-cards").append(`<ul><li>Name: ${school_name}</li><li>School Level: ${school_level}</li><li>Safety Strength: ${school_safety}</li><li>Instruction Score: ${instruction_score}</li></ul><hr>`);

                };
                
            })
    }

    $("#submit").on("click", function (event) {
        event.preventDefault();
        let userZip = $("#zipcode").val().trim();
        console.log(userZip);
        if(chicagoZips.includes(userZip)){
            sendZip(userZip);  
        } else {
            $("#zipcode").val("");
            $("#zipcode").attr("placeholder", "Chicago zipcodes only")
        }

    })
})

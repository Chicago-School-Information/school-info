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
                if (data.schools === undefined || data.schools.length == 0) {
                    $(".school-report-cards").append(`No CPS schools in that zip code.<br> Please reach out to CPS to find out more information about educational resources in this area.`);
     
                } else {
                for (var i = 0; i < data.schools.length; i++) {
                    var school_name = data.schools[i].school_name;
                    var school_level = data.schools[i].level;
                    var school_safety = data.schools[i].safety_icon;
                    var instruction_score = data.schools[i].instruction_score;
                    var ward = data.schools[i].ward_id;
                    var alderman = data.schools[i].Alderman.alderman;
                    var aldermanEmail =  data.schools[i].Alderman.email;
                    var aldermanPhone =  data.schools[i].Alderman.phone_ward;

                    $(".school-report-cards").append(`
                        <h5><b>${school_name}<b></h5>
                        <ul>
                            <li>School Level: ${school_level}</li>
                            <li>Safety Strength: ${school_safety}</li>
                            <li>Instruction Score: ${instruction_score}</li>
                            <li>Ward: ${ward}</li>
                           <li> <a  data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Alderman: ${alderman}
                            </a> </li>
                          <div class="collapse" id="collapseExample">
                            <div class="card card-body">
                            <ul><li><a href="mailto:${aldermanEmail}" target="_blank">${aldermanEmail}</a></li><li>${aldermanPhone}</li></ul>
                            </div>
                          </div>
                          </ul><hr>`);

                        
                        

                }};

            });
          
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

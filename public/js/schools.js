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
                    var alderman = data.schools[i].Alderman.alderman;
                    var aldermanEmail =  data.schools[i].Alderman.email;
                    var aldermanPhone =  data.schools[i].Alderman.phone_ward;

                    $(".school-report-cards").append(`
                        <ul>
                            <li>Name: ${school_name}</li>
                            <li>School Level: ${school_level}</li>
                            <li>Safety Strength: ${school_safety}</li>
                            <li>Instruction Score: ${instruction_score}</li>
                           <li> <a  data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Alderman: ${alderman}
                            </a> </li>
                          <div class="collapse" id="collapseExample">
                            <div class="card card-body">
                            <ul><li><a href="malito:${aldermanEmail}">${aldermanEmail}</li><li>${aldermanPhone}</li></ul>
                            </div>
                          </div>
                          </ul><hr>`);
                        
                        

                };

            });
          
    }
  

    $("#submit").on("click", function (event) {
        event.preventDefault();
        let userZip = $("#zipcode").val().trim();
        console.log(userZip);
        sendZip(userZip);
        sendAlderman(userZip);
    })
})

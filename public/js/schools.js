    

        $("#submit").on("click", function (event) {
            event.preventDefault();
            let userZip = $("#zipcode").val().trim();
            $.get("/api/" + userZip).then(function (data) {
            })
        })
 


   
        $(".petition-button").on("click", function (event) {
            alert("submit button hit")
        })


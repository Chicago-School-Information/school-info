$(document).ready(function () {  
    // Adding an event listener for when the form is submitted
    $("#sign").on("click", function () {
        event.preventDefault();
    // Getting jQuery references for the petition fields
    var signFirst = $("#signFirstName").val().trim();
    var signLast = $("#signLastName").val().trim();
    var signEmail = $("#signEmail").val().trim();
    var signWard = $("#signWard").val().trim();
        // Constructing a signatre object to hand to the database
        var newSignature = {
            first_name: signFirst,
            last_name: signLast,
            email: signEmail,
            ward_id: signWard
        };
        // Won't submit the signature if we are missing any info or if they enter a nonexistent ward
        if (!signFirst || !signLast || !signEmail || !signWard || signFirst==="" || signLast==="" || signEmail==="") {
            alert("Please fill out all fields.");
            return;
        }else if (signWard>50){
            alert("Please enter a correct ward.");
            return;
        } else {
        sendPetition(newSignature);
            alert(`${newSignature.first_name}, your name has been added.`)
        }
    });

    // Submits a new signature and refreshes the page (back to default map spot)
    function sendPetition(signature) {
        $.post("/api/petition", signature, function () {
        });
    }
})
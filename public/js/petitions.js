$(document).ready(function () {

    // displaying the number of people who have signed a petition in a ward
    function sendCount(ward) {
        $.get("/api/petition/" + ward,
            {
                ward: ward
            },
            function (data, status) {
                $("#numSignatures").empty();
                $("#numSignatures").html(`${data.count} people have signed the petition in your ward.`);
            }
        );

    }

    // Adding an event listener for when the form is submitted
    $("#sign").on("click", function () {
        event.preventDefault();
        // Getting jQuery references for the petition fields
        var signFirst = $("#signFirstName").val().trim();
        var signLast = $("#signLastName").val().trim();
        var signEmail = $("#signEmail").val().trim();
        var signWard = $("#signWard").val().trim();
        // Constructing a signature object to hand to the database
        var newSignature = {
            first_name: signFirst,
            last_name: signLast,
            email: signEmail,
            ward_id: signWard
        };
        // Won't submit the signature if we are missing any info or if they enter a nonexistent ward
        var goodEmail = ValidateEmail(signEmail);
        $("#petition-error").empty();
        if (!signFirst || !signLast || !signEmail || !signWard || signFirst === "" && signLast === "" && signEmail === "" || signWard === "") {
            $("#petition-error").append("<p>Please fill out all fields.</p>");
            return;
        } else if (signWard > 50 && !goodEmail) {
            $("#petition-error").append("<p>Please enter a correct ward.</p>");
            $("#petition-error").append("<p>Please enter a valid email address.</p>");
            return;
        } else if (signWard > 50 ) {
            $("#petition-error").append("<p>Please enter a correct ward.</p>");
            return;
        } else if (!goodEmail) {
            $("#petition-error").append("<p>Please enter a valid email address.</p>");
            return;
        } else {
            sendPetition(newSignature);
            alert(`${newSignature.first_name}, your name has been added.`)
            sendCount(newSignature.ward_id);
            // $("#numSignatures").html
        }
    });

    // Submits a new signature
    function sendPetition(signature) {
        $.post("/api/petition", signature, function () {
        });
    }
})

//Grabbed this email validate function from https://www.w3resource.com/javascript/form/email-validation.php
function ValidateEmail(mail) 
{
if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
{
    return (true)
}
    return (false)
}
$(document).ready(function () { 
function sendZip(zip) {
    $.post("/api/", zip, function () {
        console.log("i got hit");
    });
}
$("#submit").on("click", function (event) {
    event.preventDefault();
    let userZip = $("#zipcode").val().trim();
    console.log(userZip);
    sendZip(userZip);
})
})
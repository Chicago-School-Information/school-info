$(function(){
    $(".school-button").on("click", function(event){
        alert("submit button hit");
        $('html,body').animate({
            scrollTop: $(".map").offset().top},
            'slow');
    })
})

$(function(){
    $(".petition-button").on("click", function(event){
        alert("submit button hit")
    })
})


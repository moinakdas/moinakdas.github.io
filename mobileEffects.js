$(document).ready(function(){

    //console.log($("#blanket").length);
    setTimeout(() => {
        $("#blanket").animate({width: "60%"},{duration: 800, easing: "swing"});
        
    }, 300);
});
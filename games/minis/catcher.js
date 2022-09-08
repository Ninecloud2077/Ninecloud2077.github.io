$(document).ready(function(){
    function move(delay){
        $("#circle").animate({
            left:Math.round(Math.random()*1000),
            top:Math.round(Math.random()*500)
        },delay);
    }
    move(0);

    $("#circle").mouseenter(function(){move(50);});
    $("#circle").click(function(){move(50);});
    $("#circle").mouseleave(function(){move(50);});
});
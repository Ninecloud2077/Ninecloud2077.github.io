$(document).ready(function(){
    $.ajax({url:"https:/Ninecloud2077.github.io/bg.html",success:function(result){
            $("#head").after($(result));
    }});

    $("a.nav-link").addClass("display-5");
    $("browser").addClass("navbar navbar-dark bg-dark");
    $("#head").addClass("jumbotron bg-secondary text-center text-white");
    $("#end").addClass("jumbotron text-center text-secondary");
    $("#body").addClass("container");
});

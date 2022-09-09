$(document).ready(function(){
    $.ajax({url:"https://ninecloud2077.github.io/scripts/Navbar.html",
    success:function(result){
        $("#head").after(result);
    }
    });
    $.ajax({url:"https://ninecloud2077.github.io/scripts/End.html",
    success:function(result){
        $("#body").after(result);
    }
    });
    $.ajax({url:"https://ninecloud2077.github.io/scripts/Head.html",
    success:function(result){
        $("head").append(result);
    }
    });
});

function LinkName(){
    for(var i=0;i<$("a.nav-link").length;i++)
    {
      $("a.nav-link").eq(i).text(links[i])
    }
};

function SetClasses(){
    $("#browser").addClass("navbar navbar-dark bg-dark");
    $("#head").addClass("jumbotron bg-secondary text-center text-white");
    $("#end").addClass("jumbotron text-center text-secondary");
    $("#body").addClass("container");
    $("title").text(webtitle);
};

$(document).ajaxStop(function(){
    SetClasses();
    LinkName();
});
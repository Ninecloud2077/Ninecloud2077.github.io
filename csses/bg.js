var nav,end,head;
function DoAjax(){
    $.ajax({url:"https://ninecloud2077.github.io/scripts/Navbar.html",
    success:function(result){
        nav=$(result);
    }
    });

    $.ajax({url:"https://ninecloud2077.github.io/scripts/End.html",
    success:function(result){
        end=$(result);
    }
    });

    $.ajax({url:"https://ninecloud2077.github.io/scripts/Head.html",
    success:function(result){
        head=$(result);
        if(debug)
            head.find("#selfcss").attr("href",rootpath.concat("/csses/bg.css"));
    }
    });
}

function PutTemps(){
    $("#body").before(nav);
    $("#body").after(end);
    $("head").append([head,$("<title></title>").text(webtitle)]);
}

function SetClasses(){
    $("#browser").addClass("navbar navbar-expand-md navbar-dark bg-dark fixed-top");
    $("#head").addClass("jumbotron bg-secondary text-center text-white");
    $("#end").addClass("jumbotron text-center text-secondary");
    $("#body").addClass("container");
};

$(document).ajaxStop(function(){
    DoAjax();
    PutTemps();
    SetClasses();
    alert("Success to set debug!Configulations")
});
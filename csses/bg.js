var nav,end,head;
function DoAjax(){
    $.ajax({url:"https://ninecloud2077.github.io/scripts/Navbar.html",
    success:function(result){
        nav=$(result);
        nav.find("#before").attr("href",beforehref);
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
        if (debug)
        {
            head.find("#selfcss").attr("href",rootpath.concat("/csses/bg.css"));
        }
    }
    });
};
DoAjax();

function PutTemps(){
    $("#body").before(nav);
    $("#body").after(end);
    webtitle=webtitle.concat(" | NC_Const");
    $("head").append([head,$("<title></title>").text(webtitle)]);
}

function SetClasses(){
    $("#browser").addClass("navbar navbar-expand-md navbar-dark bg-dark fixed-top");
    $("#head").addClass("jumbotron bg-secondary text-center text-white");
    $("#end").addClass("jumbotron text-center text-secondary");
    $("#body").addClass("container");
};

$(document).ajaxStop(function(){
    PutTemps();
    SetClasses();
    //alert("Success to set debug!Configulations");
});
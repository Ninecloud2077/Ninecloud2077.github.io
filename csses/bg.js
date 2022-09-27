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
    $("#head").after(nav);
    $("#body").after(end);
    webtitle=webtitle.concat(" | NC_Const");
    $("head").append([head,$("<title></title>").text(webtitle)]);
}

function SetClasses(){
    $("#browser").addClass("navbar navbar-expand-md navbar-dark bg-dark sticky");
    $("#head").addClass("jumbotron bg-secondary text-center text-white");
    $("#end").addClass("jumbotron text-center text-secondary");
    $("#body").addClass("container");
    $("#links").addClass("container-fluid");
    $("a.nav-link i.fa").addClass("fa-fw");
    $(".left").addClass("col-6 col-sm-4");
    $(".left img").addClass("img-fluid");
    $(".right").addClass("col");
    $("h2,h3").addClass("text-info");
};

function SetLink(){
    $("#selfcss").attr("href",rootpath.concat("/csses/bg.css"));
}

$(document).ajaxStop(function(){
    PutTemps();
    SetClasses();
    $(document).foundation();
    if(debug)
    {
        SetLink();
    }
});
var nav,end,head;
var TempDid=false;
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
    $("#links").addClass("container small-block-grid-2 medium-block-grid-2 large-block-grid-4");
    $("a.nav-link i.fa").addClass("fa-fw");
    $("h1").addClass("text-white");
    $("h2,h3").addClass("text-info");
    $("a").addClass("text-secondary");

    $("img").attr("alt","这是一张图片，它可能没有成功加载");
};

function SetLink(){
    $("#selfcss").attr("href",rootpath.concat("/csses/bg.css"));
}

$(document).ajaxStop(function(){
    if (TempDid){return;}
    PutTemps();
    SetClasses();
    if(debug)
    {
        SetLink();
    }
    TempDid=true;
});
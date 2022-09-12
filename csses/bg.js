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
    $("#head").before(nav);
    $("#body").after(end);
    webtitle=webtitle.concat(" | NC_Const");
    $("head").append([head,$("<title></title>").text(webtitle)]);
}

function SetClasses(){
    $("#browser").addClass("navbar navbar-expand-md navbar-dark bg-dark fixed-top");
    $("#head").addClass("jumbotron bg-secondary text-center text-white");
    $("#end").addClass("jumbotron text-center text-secondary");
    $("#body").addClass("container");
    $("#links").addClass("container-fluid");
    $("a.nav-link i.fa").addClass("fa-fw");
    $(".left").addClass("col-6 col-sm-4 img-fluid");
    $(".right").addClass("col text-primary");

    /*
    $(".linkcard").prepend(
        $("<h4>").text($(this).attr("title"))
        );
    $(".linkcard").css(
        "background-image",
        "url(\"".concat($(this).attr("img"),"\")")
        );
    */
};

function SetLink(){
    $("#selfcss").attr("href",rootpath.concat("/csses/bg.css"));
}

/*
function SetCard(){
    $("div.linkcard").load("scripts/LinkCard.html");
    $("div.linkcard").addClass("card img-fluid");

    $("div.linkcard").text(function(i,o){
        $(this).find(".card-img-top").attr("src",carddiv.attr("img"));
        $(this).find(".card-title").text(carddiv.attr("cardtitle"));
        $(this).find(".card-text").text(carddiv.text());
        $(this).find(".btn").attr("href",carddiv.attr("hrefpath"));
        $(this).text("");

        return "";
    });

    for(var i=0;i<$("div.linkcard").length;i++){
        var carddiv=$("div.linkcard").eq(i);

        $(this).find(".card-img-top").attr("src",carddiv.attr("img"));
        $(this).find(".card-title").text(carddiv.attr("cardtitle"));
        $(this).find(".card-text").text(carddiv.text());
        $(this).find(".btn").attr("href",carddiv.attr("hrefpath"));
        $(this).text("");

        $(this).append($("div.linkcard").eq(i));
    }      
}
*/  


$(document).ajaxStop(function(){
    PutTemps();
    SetClasses();
    if(debug)
    {
        SetLink();
    }
});
var nav,end,head,ajaxcard;
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

    $.ajax({url:"https://ninecloud2077.github.io/scripts/LinkCard.html",
    success:function(result){
        ajaxcard=$(result);
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
    $("a.nav-link i.fa").addClass("fa-fw");
};

function SetLink(){
    $("#selfcss").attr("href",rootpath.concat("/csses/bg.css"));
}

function SetCard(){
    $("div.linkcard").addClass("card img-fluid");
    for(var i=0;i<$("div.linkcard").length;i++){
        var singlecard=ajaxcard;
        var carddiv=$("div.linkcard").eq(i);

        singlecard.find(".card-img-top").attr("src",carddiv.attr("img"));
        singlecard.find(".card-title").text(carddiv.attr("cardtitle"));
        singlecard.find(".card-text").text(carddiv.text());
        singlecard.find(".btn").attr("href",carddiv.attr("hrefpath"));
        singlecard.text("");

        $("div.linkcard").eq(i).append(singlecard);
    }        
}

$(document).ajaxStop(function(){
    PutTemps();
    SetClasses();
    SetCard();
    if(debug)
    {
        SetLink();
    }
});
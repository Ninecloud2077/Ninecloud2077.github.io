var nav,end,head,title;
var TempDid=false;
function DoAjax(){
    $.ajax({url:"https://ninecloud2077.github.io/scripts/Navbar.html",
    success:function(result){
        nav=$(result);
        nav.find("#before").attr("href",beforehref);
    },
    async:false
    });

    $.ajax({url:"https://ninecloud2077.github.io/scripts/End.html",
    success:function(result){
        end=$(result);
    },
    async:false
    });

    $.ajax({url:"https://ninecloud2077.github.io/scripts/Head.html",
    success:function(result){
        head=$(result);
        if (debug)
        {
            head.find("#selfcss").attr("href",rootpath.concat("/csses/bg.css"));
        }
    },
    async:false
    });

    PutTemps();
};
//DoAjax();

function PutTemps(){
    $("#head").after(nav);
    $("#body").after(end);
    webtitle+=" | NC_Const";
    $("head").append([head,$("<title></title>").text(webtitle)]);
}

function SetClasses(){
    $("#head").addClass("jumbotron bg-secondary text-center text-white");
    $("#body").addClass("container");
    $("#links").addClass("container small-block-grid-2 medium-block-grid-2 large-block-grid-4");
    $("h1").addClass("text-white");
    $("h2,h3").addClass("text-info");
    $("a").addClass("text-secondary");

    $("img").attr("alt","这是一张图片，它可能没有成功加载");
    $("a.linktext").text(function(i){
        return $("a.linktext").eq(i).attr("href");
    });
    $("#body h2,#body h3").before("<hr />");
};

function SetLink(){
    $("#selfcss").attr("href",rootpath.concat("/csses/bg.css"));
}

$(document).ready(function(){
    setTimeout(DoAjax,0);
    SetClasses();
    if(debug)
    {
        SetLink();
    }
});

/*
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
*/
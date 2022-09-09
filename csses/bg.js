var singlelink,nav;

$(document).ready(function(){
    $.ajax({url:"https://ninecloud2077.github.io/scripts/Link.html",
    success:function(result){
        singlelink=$(result);
    }
    });
    $.ajax({url:"https://ninecloud2077.github.io/scripts/Navbar.html",
    success:function(result){
        nav=$(result);
    }
    });
    $.ajax({url:"https://ninecloud2077.github.io/scripts/End.html",
    success:function(result){
        $("#body").after(result);
    }
    });
    $.ajax({url:"https://ninecloud2077.github.io/scripts/Head.html",
    success:function(result){
        $("head").append([result,$("<title></title>").text(webtitle)]);
    }
    });
});

function LinkName(){
    var lilist=[];
    for(var i=0;i<links.length;i++)
    {  
        singlelink.text(links[i]);
        singlelink.attr("href",hrefs[i]);
        lilist.push(singlelink);
    }
    nav.find("ul.navbar-nav").append(lilist);
    $("#head").after(nav);
};

function SetClasses(){
    $("#browser").addClass("navbar navbar-expand-md navbar-dark bg-dark");
    $("#head").addClass("jumbotron bg-secondary text-center text-white");
    $("#end").addClass("jumbotron text-center text-secondary");
    $("#body").addClass("container");
};

$(document).ajaxStop(function(){
    SetClasses();
    LinkName();
});
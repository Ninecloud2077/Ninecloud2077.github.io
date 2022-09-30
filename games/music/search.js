function SearchSplit(Locate){
    var LocaObj={};
    var Splited;
    Locate=Locate.replace('?','').split('&')
    for(var i=0;i<Locate.length;i++){
        Splited=Locate[i].split('=');
        LocaObj[Splited[0]]=Splited[1];
    }
    return LocaObj;
}

$(document).ready(function(){
    var Song=SearchSplit(location.search).s;
    if (!Song)
    {
        $("#body").text("查询出现错误！")
    }else{
        var url="https://ninecloud2077.github.io/games/music/songs/"+Song+".json";
        var infos=["name","others","author"];
        var passages=["songabout","gameabout"];
        $.ajax({url:url,
        success:function(result){
            for(var i=0;i<infos.length;i++){
                $("#"+infos[i]).text(function(n,o){
                    return o+result["info"][infos[i]];
                })
            };
            for(var i=0;i<passages.length;i++){
                $("#"+passages[i]).load(result.passages,"#"+passages[i]+"-temp")
            };
            $("#iframe").attr("src",result.iframe);
            $("#image").attr("src","songs/"+result.image);

        }
        });
    }

});
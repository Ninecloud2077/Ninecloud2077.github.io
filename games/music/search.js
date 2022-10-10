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

var abouts;

$(document).ready(function(){
    var Song=SearchSplit(location.search).s;
    if(!Song){
        $("#body").text("Not Found!");
        return;
    }else{
        Song=Song.toLowerCase();
    }

    var url="https://ninecloud2077.github.io/games/music/songs/songinfo.json";
    var infos=["name","others","author"];
    var passages=["songabout","gameabout"];
    $.ajax({url:url,
    success:function(result){
        var found=false;
        for(var i=0;i<result.length;i++){
            var obj=result[i];
            if(obj.url==Song){
                result=obj;
                found=true;
                break;
            }
        }

        if(!found){
            $("#body").text("Not Found!");
            return;
        }

        for(var i=0;i<infos.length;i++){
            $("#"+infos[i]).text(function(n,o){
                return o+result.info[infos[i]];
            })
        };
        $.ajax({url:"https://ninecloud2077.github.io/games/music/songs/"+result.passages,
            success:function(about){
                abouts=$(about);
            },
            async:false
        });
        for(var i=0;i<passages.length;i++){
            $("#"+passages[i]).append(abouts.find("#"+passages[i]+"-temp"));
        };

        $("#iframe").attr("src",result.iframe);
        $("#image").attr("src","songs/"+result.image);
    }
    });
});
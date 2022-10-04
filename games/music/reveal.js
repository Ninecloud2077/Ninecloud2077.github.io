var infos;

$.ajax({url:"https://ninecloud2077.github.io/games/music/songs/songinfo.json",
success:function(result){
    infos=result;
}})


$("#search").change(function(){
    var value=$("#search").val();
    if(!value){
        $("#results").empty();
        return;
    }

    for(var i=0;i<infos.length;i++){
        var songobj=infos[i];
        if(songobj.info.name.startsWith(value)){
            var link=$("<a></a>");
            var item=$("<li></li>");

            link.attr("href","songshow.html?s="+songobj.url);
            link.text(songobj.info.name);

            item.append(link);
            $("#results").append(item);
        }
    }
})



$(document).ready(function(){
})
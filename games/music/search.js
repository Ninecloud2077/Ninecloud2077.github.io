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
    alert(Song);
});
$(document).ready(function(){
    $("#search").val("Glaciaxion")
    var doc=$("#search").val().concat(".xml");
    $.ajax({url:doc,success:function(result){
        $("#ingame").html(result);
    }});
    
    /*
    $("#name").load(doc,"#name");
    $("#author").load(doc,"#author");
    $("#other").load(doc,"#other");
    $("#more").load(doc,"#more");
    $("#ingame").load(doc,"#ingame");
    */
});
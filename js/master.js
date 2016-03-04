/**
 * Created by Administrator on 2016/3/3 0003.
 */
$(document).ready(function(){

    var flag = false;
    $(".pas-op").click(function(){
        if(flag){
            $(this).html("c");
            $("#password").attr("type", "password");
            flag = false;
        }else{
            $(this).html("o");
            $("#password").attr("type", "text");
            flag = true;
        }
    })
});

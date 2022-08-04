$(document).ready(function(){
    $("#sendBtn").click(function(){
        var useName = $("#userName").val();
        if(useName.trim()==""){
            $("#msg").html("用户姓名不能为空！");
            return;
        }
        var content=$("#content").val();
        if(content.trim()==""){
            $("#msg").html("请输入留言内容");
            return;
        }
    
        var msg = "<li><h4>"+useName+"</h4><small>"+formatDate()+"</small>";
        msg+="<div>"+content+"</div></li>";
        $("#msgboard").prepend(msg)
        $("#userName").val("");
        $("#content").val("");
        $("msg").html("");
    });
        function formatDate(){
            var date = new Date();
            var str = date.getFullYear() + "-" + (parseInt(date.getMonth())+1)+"-"+date.getDate();
            str += " " + date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
            return str;
        }
        $(function () {
    $(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
        $('#btn_top').fadeIn();
    }
    else {
        $('#btn_top').fadeOut();
    }
    });
    });
    
    $('#btn_top').click(function () {
    $('html,body').animate({ scrollTop: 0 }, 500);
    });
    var content;
    var gf;
    
    content=document.getElementById("content");
    if(localStorage.text){
        content.value=localStorage.text
    }
    gf=document.getElementById("gf");
    gf.onclick=function(){
        localStorage.text=content.value;
        
    }
  });
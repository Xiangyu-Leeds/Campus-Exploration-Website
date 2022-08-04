'use strict';
function Functionabc() {
 var end1 =document.getElementById('end1') 
 var count = document.getElementById('count');
var spans = count.getElementsByTagName('span');
var asd = document.getElementById('asd')
var endtime = new Date(asd.value)
var timer = null;
timer=setInterval(countTime,1000)
function countTime() {
 var nowtime = new Date();
var lasttime = ((endtime-nowtime)/1000);
if(lasttime>=0){
 var day = parseInt(lasttime/60/60/24);
var hour = parseInt(lasttime/60/60%24);
var min = parseInt(lasttime/60%60);
var sec = parseInt(lasttime%60);
spans[0].innerHTML = day
spans[1].innerHTML = hour
spans[2].innerHTML = min
spans[3].innerHTML = sec
end1.innerText=""
}else if(lasttime<0){
    end1.innerText="时间已过，你提交作业了吗？"
}     
}  
}
function qa(){
 let date = new Date()
add();
function add(){
    let cyear = date.getFullYear();
    let cmonth = date.getMonth();
    let cday=date.getDate();
    let zhou=new Date(cyear,cmonth,1).getDay();
    let days=new Date(cyear,cmonth+1,-1).getDate()+1;
    document.getElementById("nian").innerHTML=cyear;
    let arr=["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];
    document.getElementById('yue').innerHTML=arr[cmonth];
    let html='';
    for(var i =0; i<zhou;i++){
        html+='<li></li>'
    }
    for(var i =1; i<=days;i++){
        if(i==cday){
         html+='<li class="active">'+i+'</li>'
        }else{
         html+='<li class="hover">'+i+'</li>'
        }
       
    }
    document.getElementById('date').innerHTML=html;
}
document.getElementById('prev').onclick=function(){
    date.setMonth(date.getMonth()-1);
    add()
}
document.getElementById('next').onclick=function(){
 date.setMonth(date.getMonth()+1);
 add()
}
}

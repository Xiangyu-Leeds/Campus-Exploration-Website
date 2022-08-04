'use strict';
function Function5() {
 var  b=document.getElementById('abcd');
 var  t = b.value;
 var e = document.getElementById("end");
 if(90<=t&&t<=100){
    e.innerText="您的绩点为4.0";
 }
 else if(85<=t&&t<=89){
     e.innerText="您的绩点为3.7";
 }
 else if(82<=t&&t<=84){
     e.innerText="您的绩点为3.3";
 }
 else if(78<=t&&t<=81){
     e.innerText="您的绩点为3.0";
 }
 else if(75<=t&&t<=77){
     e.innerText="您的绩点为2.7";
 }
 else if(72<=t&&t<=74){
     e.innerText="您的绩点为2.3";
 }
 else if(68<=t&&t<=71){
     e.innerText="您的绩点为2.0";
 }
 else if(66<=t&&t<=67){
     e.innerText="您的绩点为1.7";
 }
 else if(64<=t&&t<=65){
     e.innerText="您的绩点为1.3";
 }
 else if(t==''){
     e.innerText="请输入您的成绩";
 }
 else if(0<=t&&t<60){
     e.innerText="您的绩点为0,未通过考试";
 }
 else if(60<=t&&t<=63){
     e.innerText="您的绩点为1.0";
 }
 else if(t==''){
     e.innerText="请输入您的成绩";
 }
 else{
     e.innerText="您输入的成绩不合理，请重试"
 }}
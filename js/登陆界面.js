$(document).ready(function(){
const labels=document.querySelectorAll('.form-c label')
labels.forEach(label=>{
   label.innerHTML=label.innerText.split('').map((letter,idx)=>`<span style="transition-delay:${
       idx*50}ms">${letter}</span>`)
       .join('')
       ;
})
})
function checkuid(){
    var obj = document.getElementById("uid");
    var reg = new RegExp(/^[a-zA-Z]{1}\w*$/);
    if(!reg.test(obj.value)) 
    alert("用户名格式错误!");
    }
function iu(){
alert("必须以字母开头，且以字母、数字、下划线(_)随意组合");
}

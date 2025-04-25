let btn=document.querySelector(".b1");
btn.addEventListener('click',function(){
    document.querySelector('h1').innerHTML="File Has Been Submitted for Review";
});
let btn2=document.querySelector(".b2");
btn2.addEventListener('click',function(){
    document.querySelector('h1').innerHTML="";
});
let btn3=document.querySelector(".b3");
btn3.addEventListener('click',function(){
    alert("Danger....");
});
let para=document.querySelector("p");
para.addEventListener('click',function(){
    para.style="color:blue"});

let name=document.querySelector('input');
name.addEventListener('change', function(){
    document.querySelector('.p2').innerHTML="changed";
});
let btn=document.querySelector(".b1");
btn.addEventListener('click',function(){
    document.querySelector('h1').innerHTML="You Just Clicked Button 1";
});
let btn2=document.querySelector(".b2");
btn2.addEventListener('click',function(){
    document.querySelector('h1').innerHTML="";
});
let btn3=document.querySelector(".b3");
btn3.addEventListener('click',function(){
    alert("Danger....");
});
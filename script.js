let len=document.querySelectorAll(".btn").length;
for(let i=0;i<len;i++){
    document.querySelectorAll(".btn")[i].addEventListener("click", function(){
        var text=this.innerHTML;
        document.querySelector("h1").innerHTML=text+" is selected!";
    });
}

let len1=document.querySelectorAll(".btn1").length;
for(let i=0;i<len1;i++){
    document.querySelectorAll(".btn1")[i].addEventListener("click",function(){
        var text1=this.innerHTML;
        document.querySelector(".prof").innerHTML=text1;
    });
}

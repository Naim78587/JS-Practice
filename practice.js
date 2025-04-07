document.querySelector("button").addEventListener("click", function(){
    document.querySelector("h1").innerHTML="You Just Clicked Me!";
})

document.getElementById("hello1").innerHTML="This message has been altered!";

function myMsg(){
    alert("I warned you!");
}
function myJS(){
    document.querySelector("p").innerHTML="JavaScript is awesome!!!"
}
function image1(){
    document.querySelector("img").src="g2.jpg";
}

function image2(){
    document.querySelector("img").src="g4.jpg"
}
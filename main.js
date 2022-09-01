var btn = document.querySelector("#sayacbtn");
var number = document.querySelector("#number");
var reset = document.querySelector("#resetbtn");

var sayi = 0;

btn.onclick=function(){
    console.log("Tıklandı");
    var sayi=Number(number.innerHTML);
    number.innerHTML=++sayi;
}

reset.onclick=function(){
    number.innerHTML=0;
    console.log("Reset");
}

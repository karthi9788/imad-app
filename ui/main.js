console.log('Loaded!');
var imag = document.getElementById("madi");
var marginleft =0;
function moveRight () {
    marginleft = marginleft+10;
    madi.style.marginleft = marginleft + "px";
}
madi.onclick = function () {
    var interval = setInterval(moveRight,100);
   
    };
var button = document.getElementById("counter");
 button.onclick = function (){
     var span =document.getElementById("count");
     span.innerHtml = counter.toString();
     
   
};
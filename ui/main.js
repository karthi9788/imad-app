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
var counter = 0;
 button.onclick = function (){
     counter = counter + 1;
     var span =document.getElementById("count");
     span.innerHtml = counter.toString();
     
   
};
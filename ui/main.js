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
 function counter (){
    var counter = counter + 1;
     res.send(counter.toString());
 }

 button.onclick = function (){
    var counter = counter + 1;
     var span =document.getElementById("count");
     span.innerHtml = counter.toString();
 };
 var nameInput = document.getElementById("name");
 var name = nameInput.value;
 var submit = document.getElementById("submit_button");
 submit.onClick=function () {
   var names = ["name 1","name 2","name 3"];
   var list = "";
   for(var i-0; i= names.length; i++;) {
       list +-'<li>' + names[i]+ '</li>';
   }
       var ul = document.getElementById("name list");
       ul.innerhtml = list;
   
 };
 
   

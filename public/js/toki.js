var modal = document.getElementsByClassName('bg-modal');
var close = document.getElementsByClassName('close');
document.getElementById("button").addEventListener("click", display1);
function display1() {
  modal[0].style.display = 'flex';
}
close[0].addEventListener('click',function(){
  modal[0].style.display = 'none';
});

document.getElementById("button1").addEventListener("click", display2);
function display2() {
  modal[1].style.display = 'flex';
}
close[1].addEventListener('click',function(){
  modal[1].style.display = 'none';
});

document.getElementById("button2").addEventListener("click", display3);
function display3() {
  modal[2].style.display = 'flex';
}
close[2].addEventListener('click',function(){
  modal[2].style.display = 'none';
});

document.getElementById("button4").addEventListener("click", display5);
function display5() {
  modal[3].style.display = 'flex';
}
close[3].addEventListener('click',function(){
  modal[3].style.display = 'none';
});

document.getElementById("button5").addEventListener("click", display6);
function display6() {
  modal[4].style.display = 'flex';
}
close[4].addEventListener('click',function(){
  modal[4].style.display = 'none';
});

document.getElementById('zero').addEventListener("click", function(event) {
  var a = document.getElementById('t1').value;
  var b = document.getElementById('t2').value;
  var c = document.getElementById('t3').value;
  if(a == "" && b== "" && c== ""){
    window.alert("You cannot submit an empty form!");
    event.preventDefault();
  }
}, false);

document.getElementById("button3").addEventListener("click", display4);
function display4(){
  if(document.getElementById('cname') == null){
    window.alert("There is no Tokimon in the Tokidex");
  }
  else{
    document.getElementsByClassName('opq')[0].style.display = 'block';
  }
}

if(document.getElementById('cname') == null){
  document.getElementsByClassName('opq')[0].style.display = 'none';
}

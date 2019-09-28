function myfunc1() {
  var x = document.getElementById('first1').value;
  var y = document.getElementById('first2').value;
  if(x!=""&&y!=""){
    document.getElementById('p1').innerHTML = ((x/y)*100).toFixed(2) +'%';
  }
  if(x==""|| y==""){
    document.getElementById('p1').innerHTML =  " ";
  }
  if(x <= 0|| y <= 0){
    document.getElementById('p1').innerHTML =  " ";
  }
}
function myfunc2() {
  var x = document.getElementById('second1').value;
  var y = document.getElementById('second2').value;
  if(x!=""&&y!=""){
    document.getElementById('p2').innerHTML = ((x/y)*100).toFixed(2) +'%';
  }
  if(x==""|| y==""){
    document.getElementById('p2').innerHTML =  " ";
  }
  if(x <= 0|| y <= 0){
    document.getElementById('p2').innerHTML =  " ";
  }
}
function myfunc3() {
  var x = document.getElementById('third1').value;
  var y = document.getElementById('third2').value;
  if(x!=""&&y!=""){
    document.getElementById('p3').innerHTML = ((x/y)*100).toFixed(2) +'%';
  }
  if(x==""|| y==""){
    document.getElementById('p3').innerHTML =  " ";
  }
  if(x <= 0|| y <= 0){
    document.getElementById('p3').innerHTML =  " ";
  }
}
function myfunc4() {
  var x = document.getElementById('forth1').value;
  var y = document.getElementById('forth2').value;
  if(x!=""&&y!=""){
    document.getElementById('p4').innerHTML = ((x/y)*100).toFixed(2) +'%';
  }
  if(x==""|| y==""){
    document.getElementById('p4').innerHTML = " ";
  }
  if(x <= 0|| y <= 0){
    document.getElementById('p4').innerHTML =  " ";
  }
}

function myfunc5() {
  var x = document.getElementById('first1').value;
  var y = document.getElementById('first2').value;
  if(x!=""&&y!=""){
    document.getElementById('p1').innerHTML = ((x/y)*100).toFixed(2) +'%';
  }
  if(x==""|| y==""){
    document.getElementById('p1').innerHTML =  " ";
  }
  if(x <= 0|| y <= 0){
    document.getElementById('p1').innerHTML =  " ";
  }
}
function myfunc6() {
  var x = document.getElementById('second1').value;
  var y = document.getElementById('second2').value;
  if(x!=""&&y!=""){
    document.getElementById('p2').innerHTML = ((x/y)*100).toFixed(2) +'%';
  }
  if(x==""|| y==""){
    document.getElementById('p2').innerHTML =  " ";
  }
  if(x <= 0|| y <= 0){
    document.getElementById('p2').innerHTML =  " ";
  }
}
function myfunc7() {
  var x = document.getElementById('third1').value;
  var y = document.getElementById('third2').value;
  if(x!=""&&y!=""){
    document.getElementById('p3').innerHTML = ((x/y)*100).toFixed(2) +'%';
  }
  if(x==""|| y==""){
    document.getElementById('p3').innerHTML =  " ";
  }
  if(x <= 0|| y <= 0){
    document.getElementById('p3').innerHTML =  " ";
  }
}
function myfunc8() {
  var x = document.getElementById('forth1').value;
  var y = document.getElementById('forth2').value;
  if(x!=""&&y!=""){
    document.getElementById('p4').innerHTML = ((x/y)*100).toFixed(2) +'%';
  }
  if(x==""|| y==""){
    document.getElementById('p4').innerHTML = " ";
  }
  if(x <= 0|| y <= 0){
    document.getElementById('p4').innerHTML =  " ";
  }
}


function check1(a1,a2)
{
  if(a1 == "" && a2 !=""){
    return 0;
  }
  else if(a2 == "" && a1 !=""){
    return 0;
  }
  else if(a1 == "" && a2 ==""){
    return 1;
  }
  else if(a1 <= 0 || a2 <= 0){
    return 3;
  }
  else{
    return 2;
  }

}

function CalMean(){
  var v1 = document.getElementById('first1').value;
  var v2 = document.getElementById('first2').value;
  var v3 = document.getElementById('second1').value;
  var v4 = document.getElementById('second2').value;
  var v5 = document.getElementById('third1').value;
  var v6 = document.getElementById('third2').value;
  var v7 = document.getElementById('forth1').value;
  var v8 = document.getElementById('forth2').value;

  var pair1 = check1(v1,v2);
  var pair2 = check1(v3,v4);
  var pair3 = check1(v5,v6);
  var pair4 = check1(v7,v8);
  var flag = 0;
  var result =0;
  if(pair1 == false ||pair2 == false ||pair3 == false ||pair4 == false){
    window.alert("Calulation Error")
  }
  else if(pair1 == 3 ||pair2 == 3 || pair3 == 3 || pair4 == 3){
    document.getElementById('result').innerHTML  = "Error";
    window.alert("Please enter positive value")
  }
  else if(pair1 == 1 &&pair2 == 1 && pair3 == 1 && pair4 == 1){
    document.getElementById('result').innerHTML  = "&nbsp;&nbsp;&nbsp;&nbsp";
  }
  else{
    if(pair1 == 2){
      result = result + (v1/v2);
      flag++;
    }
    if(pair2 == 2){
      result = result + (v3/v4);
      flag++;
    }if(pair3 == 2){
      result = result + (v5/v6);
      flag++;
    }if(pair4 == 2){
      result = result + (v7/v8);
      flag++;
    }
    if(flag >0){
      result = ((result/flag) * 100).toFixed(2) + '%';
      document.getElementById('result').innerHTML = result;
    }

  }
}

function check2(a1,a2,a3)
{
  if(a1 == "" && a2 !=""){
    return 0;
  }
  else if(a2 == "" && a1 !=""){
    return 0;
  }
  else if(a1 == "" && a2 ==""){
    if(a3!=""){return 0;}
    else if(a3 < 0){return 3;}
    else{return 1};
  }
  else if(a1 < 0 || a2 < 0){
    return 3;
  }
  else{
    if(a3 == ""){return 0;}
    else if(a3 <0){return 3;}
    else{return 2;}
  }
}

function add(a1,a2){
  var x = Number(a1) + Number(a2);
  return x;
}


function CalWeight(){

  var v1 = document.getElementById('first1').value;
  var v2 = document.getElementById('first2').value;
  var v3 = document.getElementById('second1').value;
  var v4 = document.getElementById('second2').value;
  var v5 = document.getElementById('third1').value;
  var v6 = document.getElementById('third2').value;
  var v7 = document.getElementById('forth1').value;
  var v8 = document.getElementById('forth2').value;

  var a1 = document.getElementById('Weight1').value;
  var a2 = document.getElementById('Weight2').value;
  var a3 = document.getElementById('Weight3').value;
  var a4 = document.getElementById('Weight4').value;

  var pair1 = check2(v1,v2,a1);
  var pair2 = check2(v3,v4,a2);
  var pair3 = check2(v5,v6,a3);
  var pair4 = check2(v7,v8,a4);


  var flag = 0;
  var result = 0;
  if(pair1 == false ||pair2 == false ||pair3 == false ||pair4 == false){
    window.alert("Calulation Error")
  }
  else if(pair1 == 1 &&pair2 == 1 && pair3 == 1 && pair4 == 1){
    document.getElementById('result').innerHTML  = "&nbsp;&nbsp;&nbsp;&nbsp";
  }
  else if(pair1 == 3 ||pair2 == 3 || pair3 == 3 || pair4 == 3){
    document.getElementById('result').innerHTML  = "Error";
    window.alert("Please enter positive value")
  }
  else{
    if(pair1 == 2){
      result = result + (v1/v2) * a1;
      flag = add(flag,a1);
    }
    if(pair2 == 2){
      result = result + (v3/v4) * a2;
      flag = add(flag,a2);
    }if(pair3 == 2){
      result = result + (v5/v6) * a3;
      flag = add(flag,a3);
    }if(pair4 == 2){
      result = result + (v7/v8) * a4;
      flag = add(flag,a4);
    }
    if(flag >0){
      result = ((result/flag) * 100).toFixed(2) + '%';
      document.getElementById('result').innerHTML = result;
    }

  }
}

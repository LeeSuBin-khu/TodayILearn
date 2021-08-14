// 1. 공부 입력하면 화면에 띄우기(Create, Read)
// 2. 버튼 클릭하면 복습페이지로 넘어가기
// 3. 복습페이지가 끝나면 다시 메인화면으로 넘어오기
// 4. 메인화면에 공부 제거하기(Delete)

'use strict';

let inputLocal = localStorage.getItem('items')?JSON.parse(localStorage.getItem('items')):[];
localStorage.setItem('items', JSON.stringify(inputLocal));
let item = JSON.parse(localStorage.getItem('items'));

document.querySelector(".studyList").addEventListener("submit", Create);
Read();

function Create(event) {
  event.preventDefault();
  var input = document.querySelector(".input").value;
  if(input!=null) {
    inputLocal.push(input);
    localStorage.setItem('items', JSON.stringify(inputLocal));
    item = JSON.parse(localStorage.getItem('items'));
    document.querySelector(".input").value = "";
  }
  Read();
}

function Read() {
  LocalMode()
  var list = "";
  for(var i=0; i<inputLocal.length; i++) {
    list+="<li>"+inputLocal[i]+"<span class='ReviewBtn' id="+i+">"+"→"+"</span></li>";
  }
  document.querySelector(".output").innerHTML=list;

  var reviewBtn = document.querySelectorAll(".ReviewBtn");
  for(i=0; i<reviewBtn.length; i++) {
    reviewBtn[i].addEventListener("click", Delete);
  }
}

function NextPage() {
  location.href = "page/question.html";
}

function Delete() {
  NextPage();
  var i = this.getAttribute("id");
  item.splice(i,1);
  inputLocal = item;
  localStorage.setItem('items', JSON.stringify(inputLocal));
  Read()
}

function NightAndDay() {
  document.querySelector(".d").classList.toggle("n");
  let classLocal = localStorage.getItem('modes')?JSON.parse(localStorage.getItem('modes')):"";
  // document.querySelector(".dayTitle").classList.toggle("nightTitle");
  // document.querySelector(".main").classList.toggle("night");
  // document.querySelector(".output").classList.toggle("output-night");
  // document.querySelector(".Night").classList.toggle("Day");
  classLocal=document.querySelector(".d").classList.value;
  localStorage.setItem('modes', JSON.stringify(classLocal));
  //let BodyClassName = JSON.parse(localStorage.getItem('modes'));
  //BodyClassName = JSON.parse(localStorage.getItem('modes'));
  LocalMode();
}

document.querySelector(".Night").addEventListener("click", NightAndDay);


// let classLocal = localStorage.getItem('modes')?JSON.parse(localStorage.getItem('modes')):"";
// localStorage.setItem('modes', JSON.stringify(classLocal));
// let BodyClassName = JSON.parse(localStorage.getItem('modes'));

function LocalMode() {
  //let classLocal = localStorage.getItem('modes')?JSON.parse(localStorage.getItem('modes')):"d";
  let BodyClassName = JSON.parse(localStorage.getItem('modes'));
  if(BodyClassName === "d n") {
    document.querySelector(".dayTitle").classList.add("nightTitle");
    document.querySelector(".main").classList.add("night");
    document.querySelector(".output").classList.add("output-night");
    document.querySelector(".Night").classList.add("Day");
  } else {
    document.querySelector(".dayTitle").classList.remove("nightTitle");
    document.querySelector(".main").classList.remove("night");
    document.querySelector(".output").classList.remove("output-night");
    document.querySelector(".Night").classList.remove("Day");
  }
}
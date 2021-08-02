const form_study = document.querySelector(".study-input");
const IStudy = form_study.querySelector("input");
const output = document.querySelector(".study-output");
var review = document.querySelector("button");

function StudyList(text){
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const div3 = document.createElement("div");
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.classList.add("btn")
  div2.classList.add("btnClass")
  div3.classList.add("LiBtn");
  span.innerText = text;
  div1.appendChild(li);
  li.appendChild(span);
  div2.appendChild(button);
  div3.appendChild(div1);
  div3.appendChild(div2);
  output.appendChild(div3);
  // document.getElementsByTagName("button").onclick = function () {
  //   alert('I\'m clicked!');
  //};
}

function submit(event){
  event.preventDefault();
  const now = IStudy.value;
  StudyList(now);
  // if(StudyList(now)==true) {
  //   document.querySelector(".btn").addEventListener("click", console.log("asdf"))
  // }
  IStudy.value="";
}

// function ReviewButton(){
//   window.onload = function() {
//   var review = document.querySelector("button");
//   review.onclick=function(){
//     console.log("asdf")
//     alert("click!")
//   }
// }
// }


function init(){
  form_study.addEventListener("submit",submit);
}
init();
// review.addEventListener("click", console.log("asdf"))

$(document).on("click", ".btn", function() {
  document.body.style.webkitFilterr="blur(5px)";
  alert("버튼을 클릭");
});
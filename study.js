const form_study = document.querySelector(".study-input");
const IStudy = form_study.querySelector("input");
const output = document.querySelector(".study-output");
var review = document.querySelector("button");

function StudyList(text){
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.classList.add("btn")
  span.innerText = text;
  li.appendChild(span);
  output.appendChild(li);
  output.appendChild(button);
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
  alert("버튼을 클릭");
});
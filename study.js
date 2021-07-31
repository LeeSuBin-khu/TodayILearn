const form_study = document.querySelector(".study-input");
const IStudy = form_study.querySelector("input");
const output = document.querySelector(".study-output");

function StudyList(text){
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = text;
  li.appendChild(span);
  output.appendChild(li);
}

function submit(event){
  event.preventDefault();
  const now = IStudy.value;
  StudyList(now);
  IStudy.value="";
}

function init(){
  form_study.addEventListener("submit",submit);
}
init();
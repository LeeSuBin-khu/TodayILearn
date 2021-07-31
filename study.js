const form_study = document.querySelector("study-input");
const IStudy = form.querySelector("input");
const output = document.querySelector("study-output");

function StudyList(text){
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = text;
  li.appendChild(span);
  output.appendChild(li);
}

function submit(event){
  event.preventDefault();
  const now = input.value;
  StudyList(now);
  input.value="";
}

function init(){
  form.addEventListener("submit",submit);
}
init();
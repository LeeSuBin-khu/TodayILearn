function GoMain() {
    location.href="../study.html"
}

function NextQuestion() {
    document.getElementById("Q1").innerHTML="중요한 내용이나 기억해야 할 내용이 있나요?";
    document.querySelector(".nextBtn").className="GoMain"
    document.querySelector("textarea").value=""
    document.querySelector(".GoMain").addEventListener("click", GoMain);
}

document.querySelector(".nextBtn").addEventListener("click", NextQuestion);
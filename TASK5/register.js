const firstname = document.querySelector(".fname");
const surname = document.querySelector(".sname");
const email = document.querySelector(".mail");
const gender = document.querySelector(".gender");
const password = document.querySelector(".pass");
const confirmPassword = document.querySelector(".confirm-pass");

const form = document.querySelector("form");
const messageDiv = document.getElementById("message");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    messageDiv.innerHTML = "<h2>Welcome!</h2>";
    messageDiv.style.background = "gray";
    messageDiv.style.padding = "20px";
    messageDiv.style.borderRadius = "5px";
});
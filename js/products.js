const btnOpen = document.getElementById("btn-open");
const btnClose = document.getElementById("btn-close");
const modal = document.querySelector(".modal");

btnOpen.addEventListener("click", function (e) {
  modal.classList.add("open");
});

btnClose.addEventListener("click", function (e) {
  modal.classList.remove("open");
});

const loginForm = document.getElementById("login-form");

const toggleForm = document.getElementById("toggleForm");

toggleForm.addEventListener("click", function (e) {
  loginForm.classList.toggle("open");
});

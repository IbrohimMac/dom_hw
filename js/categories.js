const loginForm = document.getElementById("login-form");

const toggleForm = document.getElementById("toggleForm");

toggleForm.addEventListener("click", function (e) {
  loginForm.classList.toggle("open");
});

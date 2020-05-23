//JS to toggle between Login and Signup
var GoToSignup = document.getElementsByClassName("signup_switch1")[0];

var GoToLogin = document.getElementsByClassName("login_switch2")[0];

var signup = document.getElementsByClassName("signup")[0];

var login = document.getElementsByClassName("login")[0];

GoToSignup.onclick = function () {
  signup.style.display = "flex";
  login.style.display = "none";
};

GoToLogin.onclick = function () {
  login.style.display = "flex";
  signup.style.display = "none";
};

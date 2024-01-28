const regexName = document.getElementById("signInName");
const regexEmail = document.getElementById("signInEmail");
const regexPassword = document.getElementById("signInPassword");
const validationSignIn = document.getElementById("signIn");

let registeredUsers = [];
if (localStorage.getItem("registeredUsers") != null) {
  registeredUsers = JSON.parse(localStorage.getItem("registeredUsers"));
} else {
  registeredUsers = [];
}
function validateName() {
  const nameRegex = /^[A-z]{4,10}$/;
  const nameDivAlert = document.getElementById("nameDiv");
  if (nameRegex.test(regexName.value)) {
    regexName.classList.add("is-valid", "text-dark");
    regexName.classList.remove("is-invalid", "text-danger");
    nameDivAlert.classList.replace("d-block", "d-none");
    return true;
  } else {
    regexName.classList.add("is-invalid", "text-danger");
    regexName.classList.remove("is-valid", "text-dark");
    nameDivAlert.classList.replace("d-none", "d-block");
    return false;
  }
}
regexName.addEventListener("input", validateName);

function validateEmail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailDivAlert = document.getElementById("emailDiv");
  if (emailRegex.test(regexEmail.value)) {
    regexEmail.classList.add("is-valid", "text-dark");
    regexEmail.classList.remove("is-invalid", "text-danger");
    emailDivAlert.classList.replace("d-block", "d-none");
    return true;
  } else {
    regexEmail.classList.add("is-invalid", "text-danger");
    regexEmail.classList.remove("is-valid", "text-dark");
    emailDivAlert.classList.replace("d-none", "d-block");
    return false;
  }
}

regexEmail.addEventListener("input", validateEmail);

function validatePassword() {
  const passwordRegex = /^[\d]{8,}$/;
  const passwordDivAlart = document.getElementById("passwordDiv");
  if (passwordRegex.test(regexPassword.value)) {
    regexPassword.classList.add("is-valid");
    regexPassword.classList.remove("is-invalid");
    passwordDivAlart.classList.replace("d-block", "d-none");
    return true;
  } else {
    regexPassword.classList.add("is-invalid");
    regexPassword.classList.remove("is-valid");
    passwordDivAlart.classList.replace("d-none", "d-block");
    return false;
  }
}
regexPassword.addEventListener("input", validatePassword);

function submitSignIn() {
  if (validateName() && validateEmail() && validatePassword()) {
    validationSignIn.href = "../index.html";
    let userSignIn = {
      name: regexName.value,
      email: regexEmail.value,
      password: regexPassword.value,
    };
    registeredUsers.push(userSignIn);
    localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
  }
}

validationSignIn.addEventListener("click", function () {
  submitSignIn();
});

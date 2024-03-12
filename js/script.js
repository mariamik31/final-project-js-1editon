"use strict";

// burget bar

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//slider

var splide = new Splide(".splide", {
  type: "loop",
  perPage: 3,
  focus: "center",
});

splide.mount();

// form

const formElement = document.getElementById("resgitration");

formElement.addEventListener("submit", function (event) {
  event.preventDefault();

  const errors = {};

  let usernameValue = document.getElementById("usernamefield").value;

  if (usernameValue == "") {
    errors.username = "Please enter username";
  }

  let passwValue = document.getElementById("passwordfield").value;
  let passw2Value = document.getElementById("passwordfield2").value;

  if (passwValue == "") {
    errors.passw = "please enter paswword";
  }

  if (passwValue != passw2Value) {
    errors.passw2 = "Passwords do not match";
  }
  let passwShow = document.getElementById("passwordfield");
let icon = document.getElementById("showIcon");

icon.addEventListener("click", function () {
  if (passwShow.type == "password") {
    passwShow.setAttribute("type", "text");
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    passwShow.setAttribute("type", "password");
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
});

  let gender = false;

  formElement.querySelectorAll('[name = "gender"]').forEach(function (item) {
    if (item.checked) {
      gender = true;
    }
  });
  if (!gender) {
    errors.gender = "Please select Your Gender";
  }

  let checkInput = document.getElementById("agree").checked;
  if (!checkInput) {
    errors.check = "I agree terms and conditions";
  }

  formElement.querySelectorAll(".error-text").forEach((el) => {
    el.textContent = " ";
  });

  for (let item in errors) {
    console.log(item);
    let errorPelement = document.getElementById("error-" + item);
    console.log(errorPelement);

    if (errorPelement) {
      errorPelement.textContent = errors[item];
    }
  }

  if (Object.keys(errors).length == 0) {
    formElement.submit();
  }

  console.log(errors);
});

// show hide password
// let passwShow = document.getElementById("passwordfield");
// let icon = document.getElementById("showIcon");

// let showHidePassword = () => {

// };

// icon.addEventListener("click", showHidePassword);

// email validation - regex
// let email = document.getElementById("emailfield");

// function validationEmail() {}

// email.addEventListener("keyup", validationEmail);

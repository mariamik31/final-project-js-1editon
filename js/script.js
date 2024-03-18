"use strict";

// import * as burger from "./burger";
// burger.mobileMenu(); სლაიდერი მიქრება

// burget bar

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

//slider

var splide = new Splide(".splide", {
  type: "loop",
  perPage: 3,
  focus: "center",
});

splide.mount();

// 

let accordion = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    this.classList.toggle("active");

    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}



// form

const formElement = document.getElementById("resgitration");

formElement.addEventListener("submit", function (event) {
  event.preventDefault();

  const errors = {};

  let username = document.getElementById("usernamefield").value;

  if (username == "") {
    errors.username = "Please enter username";
  }
  //

  let email = document.getElementById("emailfield");

  email.addEventListener("keyup", function () {
    let emailValue = document.getElementById("emailfield").value;
    let textError = document.getElementById("emailError");
    let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (emailPattern.test(emailValue)) {
      textError.innerText = "Your Email is valid";
      textError.style.color = "green";
    } else {
      textError.innerText = "Your Email is Invalid";
      textError.style.color = "red";
    }

    if (emailValue == "") {
      textError.innerHTML = "";
    }
  });
    //სანამ არ დავასაბმითებ არ აქვს რეაგირება საბმით ღილაკის შემდეგ მუშაობს


  //

  //

  let passwordvalue = document.getElementById("passwordfield").value;
  let passw2Value = document.getElementById("passwordfield2").value;

  if (passwordvalue == "") {
    errors.passw = "please enter paswword";
  }

  if (passwordvalue != passw2Value) {
    errors.passw2 = "Passwords do not match";
  }

  let showPassword = document.getElementById("passwordfield");
  let icon = document.getElementById("showIcon");

  let showHidePassword = function () {
    if (showPassword.type == "password") {
      showPassword.atribute("type", "text");
      icon.classList.remove("fa-eye");
      icon.classList.add("fa-eye-slash");
    } else {
      showPassword.atribute("type", "password");
      icon.classList.remove("fa-eye-slash");
      icon.classList.add("fa-eye");
    }
  };
  icon.addEventListener("click", showHidePassword);
  //აქაც იგივე სანამ არ დავასაბმითებ არ ცვლის აიქონს და ვერ მიხვდი რატომ

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

// 

function scrollToTop(){
  window.scrollTo(0,0);
}






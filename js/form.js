

// show hide password
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

// email validation - regex
let email = document.getElementById("emailfield");

function validationEmail() {
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
}

email.addEventListener("keyup", validationEmail);

// async await
function test1() {
  setTimeout(() => {
    console.log("test1");
  }, 3000);
}
function test2() {
  setTimeout(() => {
    console.log("test2");
  }, 2000);
}
async function allFnc() {
  await test2();
  await test1();
}
allFnc();
console.log("hello World"); // hello world test2 test1

//
async function test() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Ok");
    }, 2000);
  });

  let result = await promise;
  console.log(result);
}

test();

// async await with fetch
//filter example

let ulResult = document.getElementById("result");
let inputField = document.getElementById("filter");

let listItems = [];

async function asyncFncfetch() {
  const response = await fetch("https://reqres.in/api/users?page=1");
  console.log(response);
  if (!response.ok) {
    throw new Error("can not fetch data");
  }
  const mosuliInfo = await response.json();
  return mosuliInfo;
}

asyncFncfetch()
  .then((responseData) => {
    // console.log(responseData);
    responseData.data.forEach((element) => {
      let li = document.createElement("li");
      li.textContent = `${element.first_name} ${element.last_name}`;
      listItems.push(li);
      ulResult.appendChild(li);
    });
  })
  .catch((err) => {
    console.log("rejected", err);
  });

function filterData(searchItem) {
  listItems.forEach((item) => {
    console.log(item); //li

    if (item.innerText.toLowerCase().includes(searchItem.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}

inputField.addEventListener("keyup", function () {
  // console.log(this);
  filterData(this.value);
});

// ----
function getComments(commnetId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (commnetId > 100) {
        resolve("Comments Ok Status");
      } else {
        reject("Comemnt Not Ok Status");
      }
    }, 2000);
  });
}

async function renderPage() {
  try {
    let comments = await getComments(40);
    console.log(comments);
  } catch (e) {
    console.log("შეცდომის ტექსტი", e);
  }
}

renderPage();


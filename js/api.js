"use strict";

let ulResult = document.getElementById("result");
let inputField = document.getElementById("filter");

let listItems = [];

async function searchHead() {
  const response = await fetch("https://reqres.in/api/users?delay=3");
  console.log(response);
  if (!response.ok) {
    throw new Error("Error");
  }
  const info = await response.json();
  return info;
}

searchHead()
  .then((responseData) => {
    responseData.data.forEach((element) => {
      let li = document.createElement("li");
      li.textContent = `${element.first_name} ${element.last_name} ${element.email}`;
      listItems.push(li);
      ulResult.appendChild(li);
    });
  })
  .catch((error) => {
    console.log("rejected", error);
  });

function filterHead(searchItem) {
  listItems.forEach((item) => {
    console.log(item); 

    if (item.innerText.toLowerCase().includes(searchItem.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}

inputField.addEventListener("keyup", function () {
  filterHead(this.value);
});


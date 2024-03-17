"use strict";

let ulResult = document.getElementById("result");
let inputField = document.getElementById("filter");

async function asyncFncfetch() {
  const response = await fetch("https://reqres.in/api/users?page=1");
  console.log(response);
  if (!response.ok) {
    throw new Error("Error")
  }
  const info = await response.json();
  return info;
}

asyncFncfetch()
  .then((responseData) => {
    console.log(responseData);
    responseData.data.forEach((element) => {
      let li = document.createElement("li");
      li.textContent = `${element.first_name} ${element.last_name}`;
      listItems.push(li);
      ulResult.appendChild(li);
    });
  })

// .catch((err) => {
//   console.log("rejected", err);
// });
"use strict";
// const financeLogerPerson = "Elvira";
// console.log(financeLogerPerson);
// const inputs = document.querySelectorAll("input");
// inputs.forEach((input) => {
//   console.log(input);
// });
const form = document.querySelector(".new-item-form");
// console.log(form.children);
// selecting all inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});

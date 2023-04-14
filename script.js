// document.querySelectorAll("textArea")
// document.querySelectorAll("textArea")[0].value = localStorage.getItem("9");
//

// use day js
//event.target is the i tag
// different logic for i tag and button
// if button / if i store in localStorage based off values
// localStorage.setItem(
//   temp2.dataset.time,
//   temp2.parentElement.previousElementSibling.value
// );

// pull out of local storage and slap it on the page
// for (let i = 0; i < localStorage.length; i++) {
// // probably not needed
//   newPlannerItem = document.createNewElement("p");
//   newPlannerItem.textContent = localeStorage.getItem();
//   divHour.appendChild(newPlannerItem)
// }

// if true I want it to be grey
// if equal i want it to be red
// else i want it to be green
// parseInt(document.querySelectorAll(".row")[0].dataset.time) < dayjs().hour();

// use event.target.matches("i") if/else (event delegation)
let currentDate = document.querySelector("#currentDay");
currentDate.textContent = dayjs().format("MMM DD, YYYY");

let px5Container = document.querySelector(".px-5");

px5Container.addEventListener("click", function (event) {
  if (event.target.matches("i")) {
    // .appendChild ?
    console.log("you clicked i");
  }
});

// changes color based on past/present/future
for (let i = 0; i < 9; i++) {
  let timeEl = document.querySelector("#hour-" + (i + 9));
  let presentTime = dayjs().hour();

  if (
    parseInt(document.querySelectorAll(".row")[0].dataset.time) < presentTime
  ) {
    timeEl.classList.add("past");
  } else if (
    document.querySelectorAll(".row")[0].dataset.time === presentTime
  ) {
    timeEl.classList.add("present");
  } else
    parseInt(document.querySelectorAll(".row")[0].dataset.time) > presentTime;
  {
    timeEl.classList.add("future");
  }
}

// $(function () {
// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage.
//HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.
// });

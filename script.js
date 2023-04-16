let currentDate = document.querySelector("#currentDay");
currentDate.textContent = dayjs().format("MMM DD, YYYY");
let px5Container = document.querySelector(".px-5");

let buttonArray = [];

// what is the content of .description
// the content is what is in the

// let newTextArray = []

let newText = document.querySelectorAll(".description");
let divNum = document.querySelectorAll("#py-3");

px5Container.addEventListener("click", function (event) {
  if (event.target.matches("i")) {
    // let newText = document.querySelectorAll(".description");
    // let divNum = document.querySelectorAll("#py-3");

    // for (let j = 0; j < divNum.length; j++) {
    //   console.log(divNum[j].value + "hello world");
    // }

    for (let i = 0; i < newText.length; i++) {
      // let divNum = document.querySelectorAll("#py-3");
      // console.log(newText[i].value);
      console.log(newText[i].parentNode.textContent);
      // console.log(divNum[i].value);
      // console.log(newText[0].name);
      // console.log(newText[i]);
      // console.log(newText);
      localStorage.setItem(newText[i].parentNode.textContent, newText[i].value);
      // console.log(divNum[0].value);
      // newText[i].value = "";
    }

    // let newTextArray = [];
    // let newText = document.querySelectorAll(".description");

    // newTextArray = newText;
    // console.log(newTextArray);

    // localStorage.setItem("9", newt);
    // console.log(newText.dataset.);
    // console.log(newText.dataset.time);
    // console.log(newText.innerHTML);

    // console.log(newText);
  }
});

// let txt1 = document.getElementsByTagName("textarea");

// console.log(txt1[0].value);

// changes color based on past(grey)/present(red)/future(green)
for (let i = 0; i < 9; i++) {
  let timeEl = document.querySelector("#hour-" + (i + 9));
  let presentTime = dayjs().hour();

  if (
    parseInt(document.querySelectorAll(".row")[i].dataset.time) < presentTime
  ) {
    timeEl.classList.add("past");
  } else if (
    parseInt(document.querySelectorAll(".row")[i].dataset.time) === presentTime
  ) {
    timeEl.classList.add("present");
  } else {
    timeEl.classList.add("future");
  }
}

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

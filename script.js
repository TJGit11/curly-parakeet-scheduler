let currentDate = document.querySelector("#currentDay");
let px5Container = document.querySelector(".px-5");
let buttonArray = [];
let newText = document.querySelectorAll(".description");
// let divNum = document.querySelectorAll("#py-3");

currentDate.textContent = dayjs().format("dddd, " + "MMM DD, YYYY");

// checks for click on the button
// loops through class .description
// finds text inside of element & stores that value in local storage
px5Container.addEventListener("click", function (event) {
  if (event.target.matches("i")) {
    for (let i = 0; i < newText.length; i++) {
      // console.log(newText[i].parentNode.textContent);
      localStorage.setItem(newText[i].parentNode.textContent, newText[i].value);
      // resets the input area after saving
      // newText[i].value = "";
    }
  }
});

//
// changes color based on past(grey)/present(red)/future(green)
// input sections will be grey between the hours of 6PM - 11:59 PM
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

let currentDate = document.querySelector("#currentDay");
let px5Container = document.querySelector(".px-5");
let buttonArray = [];
let newText = document.querySelectorAll(".description");
let divNum = document.querySelectorAll("#py-3");

currentDate.textContent = dayjs().format("MMM DD, YYYY");

px5Container.addEventListener("click", function (event) {
  if (event.target.matches("i")) {
    for (let i = 0; i < newText.length; i++) {
      console.log(newText[i].parentNode.textContent);
      localStorage.setItem(newText[i].parentNode.textContent, newText[i].value);
      // resets the input area after saving
      newText[i].value = "";
    }
  }
});

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

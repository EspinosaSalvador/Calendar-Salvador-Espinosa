// * This code sets the cirrent date and time to the variables "currentDate" and "currentTime" respectevely, and then logs them to the console.
// * The date and Time are obtained using day.js

var currentDate = dayjs().format("dddd, D, MMMM, YYYY");
var currentTime = dayjs().format("h:mm:ss a");
console.log(currentDate, currentTime);

// * this code below assigs the DOM elemtn with the id "day" to the variables "dateEl" and the DOM element with the id "timer" to the variable "dayEl".

const dateEl = document.getElementById("day");
const dayEl = document.getElementById("timer");

// * This code sets an interval that updates the innerHTML fo the dateEL and dayEL with the current date and time every second 

setInterval(function(){
  var currentDate = dayjs().format("dddd, D, MMMM, YYYY");
  var currentTime = dayjs().format("h:mm:ss:a");

  dateEl.innerHTML = currentDate;
  dayEl.innerHTML = currentTime;
  })

  // * Styles for the Clock.

timer.style.fontSize = "5rem";
timer.style.position = "center";
timer.style.textAlign = "center";

// * Styles for the Dates

day.style.fontSize = "3rem";
day.style.position = "center";
day.style.textAlign = "center";

// * here we add an event listener to all the elemst with the class "saveBtn" when we click, it will save the valie of the text area element that precedes it in the DOM
const saveBtns = document.querySelectorAll(".saveBtn");
saveBtns.forEach(btn => {
  btn.addEventListener('click', function(e) {
    const textarea = e.target.previousElementSibling;
    const id = textarea.parentElement.id;
    localStorage.setItem(id, textarea.value);
  });
});
// * here we retrieve the value of the text are elemts if it has been previously saved in the local storage and set the value of the text are with the value previously saved.
  const textareas = document.querySelectorAll(".description");
  textareas.forEach(textarea => {
    const id = textarea.parentElement.id;
    const value = localStorage.getItem(id);
    if (value) textarea.value = value;
  });
// * here we add another event listener to the element with the ID "clear-local-storage" that, when clicked, will clear all the data stored in the broswer and the reload the current page.

  const clearBtn = document.getElementById("clear-local-storage");
  clearBtn.addEventListener("click", function(){
    localStorage.clear(); 
    location.reload();
  })

  // * here we create an empty array called "hours" and we are using a for loop that works with it 24 times and at each time it pushes the value of hour in the array.

  var hours = []
  for (let i = 0; i < 24; i++) {
    let hour = i % 12;
    if (hour === 0) {
      hour = 12;
    }
    hours.push(`${hour} ${i < 12 ? "AM" : "PM"}`);
  }

  console.log(hours)
// * here we get the current hour and throught the hours array we can add the classes of past, present and future to change the color in the boxes.
  const timeblocks = document.querySelectorAll(".time-block");
  if(timeblocks.length) {
    const currentHour = new Date().getHours();
    hours.forEach((hour, index) =>{
      const hoursInt = parseInt(hour.replace("AM", "").replace("PM", ""));
      const timeblock = timeblocks[index];
      if(timeblock && hoursInt < currentHour) {
        timeblock.classList.add("past");
      } else if (timeblock && hoursInt === currentHour) {
        timeblock.classList.add("present");
      } else if (timeblock) {
        timeblock.classList.add("future");
      }
    });
  }
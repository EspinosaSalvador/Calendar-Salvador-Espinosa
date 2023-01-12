var currentDate = dayjs().format("dddd, D, MMMM, YYYY");
var currentTime = dayjs().format("h:mm:ss a");
console.log(currentDate, currentTime);

const dateEl = document.getElementById("day");
const dayEl = document.getElementById("timer");

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


const saveBtns = document.querySelectorAll(".saveBtn");
saveBtns.forEach(btn => {
  btn.addEventListener('click', function(e) {
    const textarea = e.target.previousElementSibling;
    const id = textarea.parentElement.id;
    localStorage.setItem(id, textarea.value);
  });
});
  const textareas = document.querySelectorAll(".description");
  textareas.forEach(textarea => {
    const id = textarea.parentElement.id;
    const value = localStorage.getItem(id);
    if (value) textarea.value = value;
  });

  const clearBtn = document.getElementById("clear-local-storage");
  clearBtn.addEventListener("click", function(){
    localStorage.clear(); 
    location.reload();
  })

  // * for loop

  var hours = []
  for (let i = 0; i < 24; i++) {
    let hour = i % 12;
    if (hour === 0) {
      hour = 12;
    }
    hours.push(`${hour} ${i < 12 ? "AM" : "PM"}`);
  }

  console.log(hours)

  const timeblocks = document.querySelectorAll(".time-block");
  const currentHour = new Date().getHours();

  hours.forEach((hour, index) => {
    const hoursInt =
    parseInt(hour.replace("AM", "").replace("PM", ""));
    const timeblock = timeblocks[index];
    if(hoursInt < currentHour) {
      timeblock.classList.add("past");
    } else if (hoursInt === currentHour) {
      timeblock.classList.add("present");
    } else {
      timeblock.classList.add("future");
    }
  });
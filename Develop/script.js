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


  
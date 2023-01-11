// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var nineClock = $("#9am");
var tenClock = $("#10am");
var elevenClock = $("#11am");
var twelveClock = $("#12pm");
var oneClock = $("#1pm");
var twoClock = $("#2pm");
var threeClock = $("#3pm");
var fourClock = $("#4pm");
var fiveClock = $("#5pm");

const containerEl = $("#day");
var hour = dayjs().hour();

// ? Using this code below to see if my day.js is working on the terminal it should show me the current time.
// console.log(dayjs())

const timer = document.getElementById("timer");
const day = document.getElementById("day");

// ? Update the timer every 1000 milliseconds (1 second)

setInterval(function() {

  // ? Using day.js to get the current time.

  var currentTime = dayjs().format("hh:mm:ss A");
  var currentDay = dayjs().format("dddd, DD, MMMM, YYYY");

  // ? Update the contents of the element 

  day.innerHTML = currentDay
  timer.innerHTML = currentTime;
}, 1000);

// * Styles for the Clock.

timer.style.fontSize = "5rem"
timer.style.position = "center"
timer.style.textAlign = "center"

// * Styles for the Dates

day.style.fontSize = "3rem"
day.style.position = "center"
day.style.textAlign = "center"

// * For 
function pageLocalStorage () {
  console.log ("Current Hour " + hour);
  var nineHtml = 
  JSON.parse(localStorage.getItem("09:00 am"))
  nineClock.val(nineHtml);

  var tenHtml = 
  JSON.parse(localStorage.getItem("10:00 am"))
  tenClock.val(tenHtml)

  var elevenHtml = 
  JSON.parse(localStorage.getItem("11:00 am"))
  elevenClock.val(elevenHtml)

  var twelveHtml = 
  JSON.parse(localStorage.getItem("12:00 pm"))
  twelveClock.val(twelveHtml)

  var oneHtml = 
  JSON.parse(localStorage.getItem("01:00 pm"))
  oneClock.val(oneHtml)

  var twoHtml = 
  JSON.parse(localStorage.getItem("02:00 pm"))
  twoClock.val(twoHtml)

  var threeHtml = 
  JSON.parse(localStorage.getItem("03:00 pm"))
  threeClock.val(threeHtml)

  var fourHtml = 
  JSON.parse(localStorage.getItem("04:00 pm"))
  fourClock.val(fourHtml)

  var fiveHtml = 
  JSON.parse(localStorage.getItem("05:00 pm"))
  fiveClock.val(fiveHtml)
}



$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
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
// localStorage.setItem()


  // TODO: Add code to display the current date in the header of the page.
});

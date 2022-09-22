//setting time
let hour = document.getElementById("hours"),
  minute = document.getElementById("minutes"),
  second = document.getElementById("seconds"),
  session = document.getElementById("session");

function showTime() {
  const currentDate = new Date();

  let hours = currentDate.getHours(),
    minutes = currentDate.getMinutes(),
    seconds = currentDate.getSeconds(),
    sessions = "AM";

  if (hours > 12) {
    hours -= 12;
    sessions = "PM";
  }
  if (hours == 0) {
    hours = 12;
  }

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  //displaying time in html
  hour.innerText = hours; //hours
  minute.innerText = minutes; // minutes
  second.innerText = seconds; // seconds
  session.innerText = sessions; // session AM/PM

  setInterval(showTime, 1000);
}

showTime();

//settin date
var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  Days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Satarday",
  ];

let day = document.getElementById("day"),
  dayNumber = document.getElementById("day-number"),
  month = document.getElementById("month"),
  year = document.getElementById("year");

//function
function showDate() {
  const currentDate = new Date();

  let yearValue = currentDate.getFullYear(),
    monthAsNumber = currentDate.getMonth(),
    dayValue = currentDate.getDay(),
    dayAsNumber = currentDate.getDate();

  //displaying date in html
  day.innerHTML = Days[dayValue]; // day naMR
  month.innerHTML = months[monthAsNumber]; // month name
  dayNumber.innerHTML = dayAsNumber; // date
  year.innerHTML = yearValue; // year

  setInterval(showDate, 1000);
}

showDate();

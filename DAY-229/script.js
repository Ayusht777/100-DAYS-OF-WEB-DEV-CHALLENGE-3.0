//Query Selector
const eventContainer = document.querySelector(".event-container");
const formContainer = document.querySelector(".form-container");
//events selectors
const dayTitle = document.querySelector("#day__title");
const dayName = document.querySelector("#day__name");
const hourTitle = document.querySelector("#hour__title");
const hourName = document.querySelector("#hour__name");
const minuteTitle = document.querySelector("#minute__title");
const minuteName = document.querySelector("#minute__name");
const secondsTitle = document.querySelector("#seconds__title");
const secondsName = document.querySelector("#seconds__name");

// Time Selector

const second = 1000;
const minute = second * 60;
const hours = minute * 60;
const day = hours * 24;

//countdown timer

let countdownTimer;

//Function :to add class and remove

function addHiddenClass(element) {
  element.classList.add("hidden");
}
function removeHiddenClass(element) {
  element.classList.remove("hidden");
}

//Function : check storage  it will be local storage
function checkLocalStorage() {
  if (
    (localStorage.getItem("eventTracker.event") === "",
    localStorage.getItem("eventTracker.event") === "[]")
  ) {
    showForm();
  } else {
    const event = JSON.parse(localStorage.getItem("eventTracker.event"));
    showEvent(event.title, event.date);
  }
}
function saveEventToLocalStorage(title, date) {
  const event = {
    title,
    date,
  };
  localStorage.setItem("eventTracker.event", "[]");
}

function deleteEventFromLocalStorage() {
  localStorage.setItem("eventTracker.event", "[]");
}

function startCountdownTimer(title, date) {
  const eventTitle = document.querySelector(".event__title");
  eventTitle.textContent = title;
  updateCountDown(date);
  countdownTimer = setInterval(() => {
    updateCountDown(date);
  }, 1000);
}

//funtcion  updatecountndown

function updateCountDown(date) {
  const currentTime = new Date.getTime();
  const countdownTime = date - currentTime;
  //time maths

  const newDay = Math.floor(countdownTime / day);
  const newHour = Math.floor((countdownTime % day) / hour);
  const newMinute = Math.floor((countdownTime % day) / minute);
  const newSeconds = Math.floor((countdownTime % day) / second);

  dayTitle.textContent = newDay;
  hourTitle.textContent = newHour;
  minuteTitle.textContent = newMinute;
  secondsTitle.textContent = newSeconds;

  dayName.textContent = `day${newDay === 1 ? "" : "s"}`;
  hourName.textContent = `hours${newHour === 1 ? "" : "s"}`;
  minuteName.textContent = `minute${newMinute === 1 ? "" : "s"}`;
  secondsName.textContent = `seconds${newSeconds === 1 ? "" : "s"}`;

  if (newDay === 0 && newHour === 0 && newMinute === 0 && newSeconds === 0) {
    // do this for 30 seconds
    var duration = 3 * 1000;
    var end = Date.now() + duration;

    (function frame() {
      // launch a few confetti from the left edge
      confetti({
        particleCount: 7,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      // and launch a few from the right edge
      confetti({
        particleCount: 7,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });

      // keep going until we are out of time
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
    clearInterval(countdownTimer);
    setTimeout(()=> {
        showForm()
    },2000)
  }
}

//function : showForm

function showForm() {
  removeHiddenClass(formContainer);
  addHiddenClass(eventContainer);
  deleteEventFromLocalStorage();
  const title = document.querySelector("#title");
  title.focus();
}

//function show event
function showEvent(title, event) {
  saveEventToLocalStorage(title,event)
  startCountdownTimer(title,event)
  removeHiddenClass(eventContainer);
  addHiddenClass(formContainer);
}

//event submit

const form = document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.querySelector("#title");
  const eventInput = document.querySelector("#event");
  const event = new Date(eventInput.value).getTime();
  // console.log(event)
  if (title === "" || eventInput === "") {
    return alert("Please Fill");
  }
  showEvent(title.value, event);

  title.value = "";
  eventInput.value = "";
});

//eVNET DELETE bUTTON

const eventBtn = document
  .querySelector(".event__btn")
  .addEventListener("click", showForm);

//Event Window

window.addEventListener("DOMContentLoaded", checkLocalStorage);

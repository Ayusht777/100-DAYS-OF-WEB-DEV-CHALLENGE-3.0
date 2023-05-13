//Query Selector
const eventContainer =document.querySelector('.event-container')
const formContainer =document.querySelector('.form-container')
//events selectors
const dayTitle = document.querySelector("#day__title")
const dayName = document.querySelector("#day__name")
const hourTitle = document.querySelector("#hour__title")
const hourName = document.querySelector("#hour__name")
const minuteTitle = document.querySelector("#minute__title")
const minuteName = document.querySelector("#minute__name")
const secondsTitle = document.querySelector("#seconds__title")
const secondsName = document.querySelector("#seconds__name")

// Time Selector

const second = 1000;
const minute =second * 60;
const hours = minute * 60;
const days =hours * 24;

//countdown timer

let countdownTimer;

//Function :to add class and remove

function addHiddenClass(element){
    element.classList.add("hidden")
}
function removeHiddenClass(element){
    element.classList.remove("hidden")
}


//Function : check storage  it will be local storage
function checkLocalStorage(){
    if(localStorage.getItem("eventTracker.event")==="" ,localStorage.getItem("eventTracker.event")==="[]" ){
       showForm();
    }
    else{
        const event  = JSON.parse(localStorage.getItem("eventTracker.event"))
        showEvent(event.title,event.date)
    }
}
//function : showForm

function showForm(){
     removeHiddenClass(formContainer)
     addHiddenClass(eventContainer)
}

//function show event
function  showEvent(title,event){
    saveEventToLocalStorage(title,event)
    startCountdownTimer(title,event)
    removeHiddenClass(eventContainer)
    addHiddenClass(formContainer)
}

//Event Window 

window.addEventListener("DOMContentLoaded",checkLocalStorage)



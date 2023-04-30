const startBtn = document.querySelector("#startStopBtn");
const resetBtn = document.querySelector("#resetBtn");

//var for time

let sec = 0;
let min = 0;
let hr  = 0;

let leadingSec = 0;
let leadingMin = 0;
let leadingHr = 0;


let timeInterval = null;
let timeStatus = "stopped"

function stopwatch(){
    sec++
    if(sec/60 === 1){
        sec = 0;
        min++;
        if(min/60===1){
           min=0;
           hr++;
        }
    }
    if(sec<10){
        leadingSec = '0' + sec.toString();

    }else{
        leadingSec =sec;
    }
    if(min<10){
        leadingMin = '0' + min.toString();

    }else{
        leadingMin =min;
    }
    if(hr<10){
        leadingHr = '0' + hr.toString();

    }else{
        leadingHr =hr;
    }

    let displayTimer = document.getElementById('timer').innerText = leadingHr + ":" + leadingMin + ":" + leadingSec;
}

 
// startBtn.setInterval(stopwatch,1000)


startBtn.addEventListener('click',function(){
    if(timeStatus === "stopped")
    {
       timeInterval =  window.setInterval(stopwatch,1000)
        document.getElementById("startStopBtn").innerHTML = `<i class="fa-solid fa-pause" id="fa-pause" ></i>`
        timeStatus ="started"
    }else{
        window.clearInterval(timeInterval)
        document.getElementById("startStopBtn").innerHTML = `<i class="fa-regular fa-circle-play" id="play"></i>`
        timeStatus = "stopped"
    }
})



resetBtn.addEventListener('click',function(){
    window.clearInterval(timeInterval)
    sec = 0 ;
    min = 0;
    hr =0;
    document.getElementById('timer').innerHTML = "00:00:00";
})
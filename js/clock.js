/* Clock */

let currentHour = 0;
let currentMinute = 0;
let currentSecond = 0;

setInterval (function(){
    let currentTime = new Date();
    currentHour = currentTime.getHours();
    currentMinute = currentTime.getMinutes();
    currentSecond = currentTime.getSeconds();    
    document.getElementById("clockDisplay").innerHTML = String(currentTime.getHours()).padStart(2, "0") + ":" + String(currentTime.getMinutes()).padStart(2, "0") + ":" + String(currentTime.getSeconds()).padStart(2, "0");
}, 1000);

/* Timer preset */

let timeInterv;
let pause;
let timeLeft;
let time;

let timerDays = 0;
let timerHours = 0;
let timerMinutes = 0;
let timerSeconds = 0;

function timer(time) {

    clearInterval(timeInterv)

    timeInterv = setInterval (function(){

    timerHours = Math.floor(time/3600);
    timerMinutes = Math.floor(time/60) % 60;
    timerSeconds = time % 60;

    console.log(timerMinutes);

    document.getElementById("timerDisplay").innerHTML = String(timerHours).padStart(2, "0") + ":" + String(timerMinutes).padStart(2, "0") + ":" + String(timerSeconds).padStart(2, "0");

    if (time===0){
        clearInterval(timeInterv);
        document.getElementById("timerDisplay").innerHTML = "Done.";
    }

    time--; 

    timeLeft = time;
    return timeLeft;

}, 1000);
}

function clearInterv(){
    if(pause===1){
        clearInterval(timeInterv);
        timer(timeLeft+1);
        pause=0;
    } else {
        clearInterval(timeInterv);
        pause=1;
    }
}

/* Timer input */

let timeIntervInp;
let timeInp;
let timeLeftInp;
let inputCheck;

function timerInput() {

    if (document.getElementById("inputTime").value != ""){

    if(document.getElementById("inputTime").value != inputCheck){
    timeInp = document.getElementById("inputTime").value;
    inputCheck = timeInp;
    }
    
    if(timeInp>360000){
        document.getElementById("timerInputDisplay").innerHTML = "Error. Max. 360'000s"
        return;
    }

    clearInterval(timeIntervInp)

    timeIntervInp = setInterval (function(){
    
    timerHours = Math.floor(timeInp/3600);
    timerMinutes = Math.floor(timeInp/60) % 60;
    timerSeconds = timeInp % 60;
   
    document.getElementById("timerInputDisplay").innerHTML = String(timerHours).padStart(2, "0") + ":" + String(timerMinutes).padStart(2, "0") + ":" + String(timerSeconds).padStart(2, "0");

    if (timeInp===0){
        clearInterval(timeIntervInp);
        document.getElementById("timerInputDisplay").innerHTML = "Done.";
    }

    timeInp--; 

    console.log(timeInp);

    timeLeftInp = timeInp;
    return timeLeftInp;

    }, 1000);
}}

let pauseInp;

function clearIntervInp(){
    if(pauseInp===1){
        clearInterval(timeIntervInp);
        timerInput(timeLeftInp);
        pauseInp=0;
    } else {
        clearInterval(timeIntervInp);
        pauseInp=1;
    }
}

/* Timer enter */

let enterCheck;
let timeEnt;
let timeIntervEnt;
let timeLeftEnt;

function timerEnter() {

    if(document.getElementById("enterTime").value != "") {

            if(document.getElementById("enterTime").value != enterCheck){
                timeEnt = Math.floor((new Date(document.getElementById("enterTime").value)-new Date())/1000);
                enterCheck = document.getElementById("enterTime").value;
            }
    
        clearInterval(timeIntervEnt)

        timeIntervEnt = setInterval (function(){
    
            timerDays = Math.floor(timeEnt/3600/24);
            timerHours = Math.floor(timeEnt/3600) % 24;
            timerMinutes = Math.floor(timeEnt/60) % 60;
            timerSeconds = timeEnt % 60;
   
            document.getElementById("timerEnterDisplay").innerHTML = String(timerDays).padStart(2, "0") + "d:" + String(timerHours).padStart(2, "0") + "h:" + String(timerMinutes).padStart(2, "0") + "m:" + String(timerSeconds).padStart(2, "0")+"s";

                if (timeEnt<=0){
                clearInterval(timeIntervEnt);
                document.getElementById("timerEnterDisplay").innerHTML = "Done.";
                }

            console.log(timeLeftEnt);
            console.log(new Date());
            console.log(new Date(document.getElementById("enterTime").value));
            console.log(enterCheck);

            timeEnt--;

            timeLeftEnt = timeEnt;
            return timeLeftEnt;
        
    },1000);
}}

let pauseEnt;

function clearIntervEnt(){
    if(pauseEnt===1){
        clearInterval(timeIntervEnt);
        timerEnter(timeLeftEnt);
        pauseEnt=0;
    } else {
        clearInterval(timeIntervEnt);
        pauseEnt=1;
    }
}

/* Fragen:

Warum überschreiben sich die gleichen Variablen innerhalb der unterschiedlichen
intervals nicht, obwohl sie global definiert sind?

*/

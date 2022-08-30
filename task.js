let timer = document.querySelector("#timer");
let startBtn = document.querySelector("#start-button");
let stopBtn = document.querySelector("#stop-button");
let resetBtn = document.querySelector("#reset-button")


let milliseconds = 0;
let seconds = 0;
let minutes = 0;


resetBtn.addEventListener("click", function(e){
    e.preventDefault(); 
    console.log("here")
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    clearInterval(interv);
})

startBtn.addEventListener("click", function(e){
    e.preventDefault();
    var interv = setInterval(function() {
        setTimer()
    }, 1000);
})

stopBtn.addEventListener("click", function(e){
    e.preventDefault();

})

function setTimer(){
    if(milliseconds < 2){
        milliseconds++
     }
     else if(milliseconds == 2){
        milliseconds = 0;
        if(seconds < 2){
            seconds ++;
        }
        else if(seconds == 2){
            minutes++;
            seconds = 0;
            console.log("min", minutes)
        }
        console.log("sec",seconds)
     }
     timer.innerText = `${minutes}: ${seconds} : ${milliseconds}`;
}


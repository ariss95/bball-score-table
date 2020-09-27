let seconds = 0;
let minutes = 10;

var interval = null;
var clockStatus = "stopped";
function clock(){
    seconds --;
    if (seconds < 0){
        seconds = 59;
        minutes --;
    }
    if (seconds===0 && minutes===0){
        startButton();
        minutes = 10;
    }
    outputSeconds = seconds;
    outputMinutes = minutes;

    if (minutes < 10){
        outputMinutes = "0" + minutes.toString();
    }
    if(seconds < 10){
        outputSeconds = "0" + seconds.toString(); 
    }
    document.getElementById("display").innerHTML = outputMinutes + ":" + outputSeconds;
}



function startButton(){
    if(clockStatus === "stopped"){
        interval = window.setInterval(clock, 1);
        clockStatus = "running";
    }else{
        window.clearInterval(interval);
        clockStatus = "stopped";
    }
}
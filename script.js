let seconds = 0;
let minutes = 10;
let homeScore = 0;
let awayScore = 0;

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
        document.getElementById("start").innerHTML = "STOP";
        interval = window.setInterval(clock, 1000);
        clockStatus = "running";
    }else{
        document.getElementById("start").innerHTML = "START";
        window.clearInterval(interval);
        clockStatus = "stopped";
    }
}

function addHomePoints(){
    homeScore ++;
    document.getElementById("homeScore").innerHTML = homeScore;
}
function addAwayPoints(){
    awayScore ++;
    document.getElementById("awayScore").innerHTML = awayScore;
}
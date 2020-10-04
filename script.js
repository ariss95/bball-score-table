let seconds = 0;
let minutes = 10;
let homeScore = 0;
let awayScore = 0;
let period = 1;

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
        if (period < 4){
            minutes = 10;
            period ++;
            document.getElementById("period").innerHTML = period;
        }else if (period >= 4 && homeScore === awayScore){
            minutes = 5;
            period ++;
            document.getElementById("period").innerHTML = "OT" + (period - 4).toString();
        }else{
            document.getElementById("start").style.display = "none";
            document.getElementById("final-score").innerHTML = "FINAL SCORE:";
        }
        
        
        
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
        interval = window.setInterval(clock, 1);
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
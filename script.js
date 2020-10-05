let seconds = 0;
let minutes = 10;
let homeScore = 0;
let awayScore = 0;
let quarter = 1;
let homeFouls = 0;
let awayFouls = 0;

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
        clearFouls();
        if (quarter < 4){
            minutes = 10;
            quarter ++;
            document.getElementById("quarter").innerHTML = quarter;
        }else if (quarter >= 4 && homeScore === awayScore){
            minutes = 5;
            quarter ++;
            document.getElementById("quarter").innerHTML = "OT" + (quarter - 4).toString();
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
function clearFouls(){
    homeFouls = 0;
    awayFouls = 0;
    document.getElementById("homeFouls").style.animationName = "none";
    document.getElementById("awayFouls").style.animationName = "none";
    document.getElementById("homeFouls").innerHTML = homeFouls;
    document.getElementById("awayFouls").innerHTML = homeFouls;

}

function addHomePoints(){
    homeScore ++;
    document.getElementById("homeScore").innerHTML = homeScore;
}
function addAwayPoints(){
    awayScore ++;
    document.getElementById("awayScore").innerHTML = awayScore;
}

function addHomeFouls(){
    homeFouls++;
    if (homeFouls > 4){
        document.getElementById("homeFouls").style.animationName = "bonus";
        document.getElementById("homeFouls").style.animationDuration = "3s";
        document.getElementById("homeFouls").style.animationIterationCount ="infinite";
    }
    if (homeFouls === 0) {
        document.getElementById("homeFouls").style.animationName = "none";        
    }
    document.getElementById("homeFouls").innerHTML = homeFouls;
}
function addAwayFouls(){
    awayFouls++;
    if (awayFouls > 4){
        document.getElementById("awayFouls").style.animationName = "bonus";
        document.getElementById("awayFouls").style.animationDuration = "3s";
        document.getElementById("awayFouls").style.animationIterationCount ="infinite";
    }
    document.getElementById("awayFouls").innerHTML = awayFouls;
}
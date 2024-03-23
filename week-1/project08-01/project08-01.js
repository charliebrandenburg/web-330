"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Charlie Brandenburg
      Date: 03/22/24

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/

// Constructor function for the timer object
function timer(min, sec) {
  this.minBox = min // timer minutes
  this.secBox = sec // timer seconds
  this.timer.timeID = "" // returns null
}

// timer prototype method and runPause() method
timer.prototype.runPauseTimer = function(timer, minBox, secBox) {
  // if else statement
    if (timer.timeID = true) {
      window.clearInterval(timer.timeID);
    } else {
      timer.timeID = window.setInterval(countdown, 1000);
    }
  }

  // add a countdown function that updates timer every second
  function countdown() {
    if (timer.seconds > 0) {  // timer seconds set to begin at 1
    } else if (timer.minutes > 0) {
      timer.minutes--;  // decrease the timer clock time
      timer.seconds = 59;
    } else { (timer < 0)  // timer reaches 0
      window.clearInterval(timer.timeId);
      timer.timeID = ""; // returns null
    }
  }
  // timer minutes and seconds value
  timer.minutes = minBox.value;
  timer.seconds = secBox.value;










/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

// declare myTimer object
let myTimer = (minBox.value, secBox.value);

// create an onchange event handler
myTimer.minutes.onchange="minBox.value";

myTimer.seconds.onchange="secBox.value";

// create an onclick event handler for the runPauseTimer button
runPauseButton.onclick = function() {
  this.runPause("myTimer", "minBox", "secBox");
}
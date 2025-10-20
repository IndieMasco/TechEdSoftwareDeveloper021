console.log("HELLO!");

// Timers

// Timeouts

// A countdown --> after an amount of time, a task will happen ONCE

// Structure
// Callback function / Anonymous sunction
// setTimeout(function () {
// Task
// }, 5000 Delay in milliseconds);

// TODO: I want to see a message in the console after 5 seconds have passed

setTimeout(function () {
  //   console.log("This happened after 5 seconds");
}, 5000);

// Intervaals
// A task is performed repeatedly after a specific amount of time --> we need to stop the interval; otherwise, it will run the task infinitely

// setInterval(function() {
// Task
// }, delay)

// TODO: I want to send a message to the console repeatedly after 2 seconds

setInterval(function () {
  //   console.log("I happen every 2 seconds forever");
}, 2000);

//==================================================================

// What if we used a timeout to stop an interval

const robotInterval = setInterval(function () {
  console.log("Please, someone stop meeeeeeeeeeeeee");
}, 3000);

function stopTheInterval() {
  setTimeout(function () {
    clearInterval(robotInterval);
  }, 120000); // 120000 = 120 seconds
}

stopTheInterval;

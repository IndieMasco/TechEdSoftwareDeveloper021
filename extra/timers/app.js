console.log("hello!");

setTimeout(() => {
  console.log("Delayed for 1 second.");
}, 1000);

//====================================================

setTimeout(() => {
  console.log("this is the first message");
}, 5000);
setTimeout(() => {
  console.log("this is the second message");
}, 3000);
setTimeout(() => {
  console.log("this is the third message");
}, 1000);

// Output:
// this is the third message
// this is the second message
// this is the first message

//====================================================

const myArray = ["zero", "one", "two"];
myArray.myMethod = function (sProperty) {
  console.log(arguments.length > 0 ? this[sProperty] : this);
};

myArray.myMethod(); // Prints "zero,one,two"
myArray.myMethod(1); // Prints "one"

//====================================================

setTimeout(function () {
  myArray.myMethod();
}, 2.0 * 1000); // Prints "zero,one,two" after 2 seconds
setTimeout(function () {
  myArray.myMethod("1");
}, 2.5 * 1000); // Prints "one" after 2.5 seconds

//====================================================

const myArray = ["zero", "one", "two"];
const myBoundMethod = function (sProperty) {
  console.log(arguments.length > 0 ? this[sProperty] : this);
}.bind(myArray);

myBoundMethod(); // Prints "zero,one,two" because 'this' is bound to myArray in the function
myBoundMethod(1); // Prints "one"
setTimeout(myBoundMethod, 1.0 * 1000); // Still prints "zero,one,two" after 1 second because of the binding
setTimeout(myBoundMethod, 1.5 * 1000, "1"); // Prints "one" after 1.5 seconds

//====================================================

let last = 0;
let iterations = 10;

function timeout() {
  // Log the time of this call
  log(new Date().getMilliseconds());
  // If we are not finished, schedule the next call
  if (iterations-- > 0) {
    setTimeout(timeout, 0);
  }
}

function run() {
  // Clear the log
  const log = document.querySelector("#log");
  while (log.lastElementChild) {
    log.removeChild(log.lastElementChild);
  }

  // Initialize iteration count and the starting timestamp
  iterations = 10;
  last = new Date().getMilliseconds();
  // Start timer
  setTimeout(timeout, 0);
}

function log(now) {
  // Log the last timestamp, the new timestamp, and the difference
  const tableBody = document.getElementById("log");
  const logRow = tableBody.insertRow();
  logRow.insertCell().textContent = last;
  logRow.insertCell().textContent = now;
  logRow.insertCell().textContent = now - last;
  last = now;
}

document.querySelector("#run").addEventListener("click", run);

//====================================================

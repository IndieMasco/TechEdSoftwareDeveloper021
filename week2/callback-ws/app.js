console.log("hello world");

//======================================================================

// Logs a string to the console to tell the user the function was called
function notifyUser() {
  console.log("notifyUser function was called!");
}

// Accepts a function as an argument to run when it has done it's work
function myAwesomeFunction(notifyUserCallback) {
  console.log("Running myAwesomeFunction... doing complex tasks...");
  console.log("Complex task complete. I will notify the user");
  notifyUserCallback();
}

// Run the awesome function, and pass the notifyUser function to it
myAwesomeFunction(notifyUser);

//===========================================================================

function myAwesomeFunction(onCompleteCallback) {
  console.log("Running myAwesomeFunction... doing complex tasks...");
  console.log("Complex task complete. I will notify the user");
  onCompleteCallback();
}

myAwesomeFunction(function () {
  console.log("notifyUser function was called!");
});

//====================================================================

function myAwesomeFunction(onSuccessCallback, onFailureCallback) {
  console.log("Running myAwesomeFunction... doing complex tasks...");
  console.log("Complex task complete. I will notify the user");

  // Randomly choose if success is true or false
  const success = Math.random() > 0.5;
  if (success) {
    onSuccessCallback({
      message: "This is the message of success",
    });
  } else {
    onFailureCallback();
  }
}

function onAwesomeSuccess(data) {
  console.log("It was successful: ", data.message);
}

function onAwesomeFailure() {
  console.log("It failed :(");
}

myAwesomeFunction(onAwesomeSuccess, onAwesomeFailure);

//============================================================

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function myCalculatorFunction(a, b, operationCallback) {
  console.log("Doing a calculation using the numbers: ", a, b);
  console.log(
    "We might have code that saves the result to a log or a database"
  );

  return operationCallback(a, b);
}

const result = myCalculatorFunction(1, 2, add);
console.log(result); // Output: 3

// Const result2 = myCalculatorFunction(2, 3, multiply);
console.log(result2); // Output: 6

// Add the two results together
const finalResult = myCalculatorFunction(result, result2, add);
console.log(finalResult); // Output: 9

//========================================================================

function add(a, b, c, d, e, f) {
  return a + b + c + d + e + f;
}

function multiply(a, b, c, d, e, f) {
  return a * b * c * d * e * f;
}

function myCalculatorFunction(a, b, c, d, e, f, operationCallback) {
  console.log("Doing a calculation using the numbers: ", a, b, c, d, e, f);
  console.log(
    "We might have code that saves the result to a log or a database"
  );

  return operationCallback(a, b, c, d, e, f);
}

const result1 = myCalculatorFunction(10, 20, 30, 40, 50, 60, add);
console.log(result1);

const result2 = myCalculatorFunction(10, 20, 30, 40, 50, 60, multiply);
console.log(result2);

//=====================================================================

function add(a, b, c) {
  return a + b + c;
}

function multiply(a, b, c) {
  return a * b * c;
}

function myCalculatorFunction(a, b, c, operationCallback) {
  console.log("Doing a calculation using the numbers: ", a, b, c);
  console.log(
    "We might have code that saves the result to a log or a database"
  );

  return operationCallback(a, b, c);
}

// Const result1 = myCalculatorFunction(10, 20, 30, add);
console.log(result1);

// Const result2 = myCalculatorFunction(40, 50, 60, multiply);
console.log(result2);

const result3 = myCalculatorFunction(result1, result2, 1, add);
console.log(result3);

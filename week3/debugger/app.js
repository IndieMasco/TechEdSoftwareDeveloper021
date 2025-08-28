// Code to test the debugger tool

function countToTen() {
  for (let i = 0; i < 10; i++) console.log(i);
  debugger; // This debugger will stop the code execution
}

countToTen();

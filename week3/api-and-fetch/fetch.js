console.log("hello!");

// APIs and how to manage data

// TODO: I want to get data from JSONlaceholder (API)
// STEPS:

async function getData() {
  // - Connect with the API to request the data --> fetch () <-- is a methed
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  console.log(response);
  // - Format the response (JSON)
  const data = await response.json();
  console.log(data);
}
getData();

//=============================================

// Key words --> Stack, Await,

// Asynchronous and Synchronous code
// Synchronous code --> our code is read by the browser top to bottom at its own pace
// If we run asynchronous code in the synchronous way, we get a promise (the browers acknowledges there is a request, but the response has not been sent yet, so we can,t get the data)
// Asynchronous code --> code that requires a different timing to be executed (the brower put it onto a different priority STACK)
// We need to tell the browers to wait until the async code finishes to execute it
//

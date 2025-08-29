console.log("HELLO!")

// Game logic
// When the user clicks on the img, the total count will go up by 1
// When the user clicks on the buy button in the upgrade shop, the total count will go down by the cost of the upgrade, and the CPS value goes up

// You you will need functions to contain the game logic
// To create the logic for the shop upgrades:
// OPTION 1: You could have a function per upgrade
// OPTION 2: You could have a reusable function that works for ALL the upgrades

// TIP on local storage:
// - Make sure the local storage values are updated after the user buys an upgrade or when the user clicks on the img

//==============================================================================================

// Data storage
let cookieCount = 0;
let cps = 0;

// let stats = {
//     cookieCount: 0,
//     cps: 0,
// }

// If there is data in local storage, update stats with this data, so the users picks it up where they left off

//==============================================================================================

// Shop upgrades

// Fetch the upgrades from the API
// To create multiple DOM elements in a more conventent way, you can use a loop

// TODO: Create DOM elements to contain the upgrades in the shop
// Create an element
// Assign the value to its text content
// append it to the DOM

// After you complete this task, you should see the upgrades on your page

//==============================================================================================

// The interval

setInterval(function () {
    cookieCount += cps; // this is the same as this --> cookieCount = cookieCount + cps
    // UPdate the DOM to reflect the changes in the calues
    // Save the values in local storage
}, 1000);
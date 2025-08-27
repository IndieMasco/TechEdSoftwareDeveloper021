console.log("HELLO!");

// Local storage

// TODO: I want ro store Joe's data in local storage
const staff = {
  staffName: "Joe",
  staffLocation: "Norwich",
  staffRole: "TA",
};

// Add new data to local storage
// STEP 1: We need to turn this data into strings

const stringifiedStaff = JSON.stringify(staff);

// {
//     "staffName: "Joe",
//     "staffLocation: "Norwich",
//     "staffRole: "TA",
// }

// STEP2: Add the stringified data to local storage

localStorage.setItem("staff", stringifiedStaff);

// Read (GET) data from local storage
// STEP 1: Get the data from local storage

const retrievedData = localStorage.getItem("staff");

// STEP 2: Parse the stringified data to its original shape

JSON.parse(retrievedData);

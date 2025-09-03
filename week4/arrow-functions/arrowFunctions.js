// Example of arrow functions
// The fat arrow => replaces the function keyword

function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => {
  return a + b;
};

//  In this example, the return keywordis implied
const add = (a, b) => {
  return a + b;
};
//or
const add = (a, b) => a + b;

// Callback function

const array = [1, 2, 3];

array.gotEach(function (item) {
  console.log(item);
});

// Arrow Function
array.forEach((item) => console.log(item));

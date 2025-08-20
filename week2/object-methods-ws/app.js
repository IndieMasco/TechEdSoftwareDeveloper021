console.log("good morning world!");

// const person = {
//   name: "Sam",
//   age: 31,
//   favouriteColour: "Purple",
//   sayHello: function (name) {
//     console.log("Hello " + name + "!");
//   },
// };

// person.sayHello("Ruby");

//=======================================================

const person = {
  name: "Sam",
  age: 31,
  favouriteColour: "Purple",
  getAge: function () {
    return this.age;
  },
};

const age = person.getAge();

console.log(age);

//===========================================

const car = {
  make: "bad",
  model: "fuze",
  colour: "purple",
};

const ad = `For sale: a stylish ${car.make} ${car.model} ${car.colour} be quick to get it as its a very popular car.`;

console.log(ad);

//=======================================================

const book = {
  title: "big smelly socks",
  author: "sock puppet",
  numberofpages: 2,
};

const ad2 = `grab ${book.title} by ${book.author} it may only be a ${book.numberofpages} book but its selling fast.`;

console.log(ad2);

//=============================================================

const food = {
  item1: "bacon",
  item2: "pizza",
  item3: "toast",
};

const amount = {
  item1: "12",
  item2: "43",
  item3: "22",
};

const price = {
  item1: "£5",
  item2: "£52.46",
  item3: "£99.99",
};

const order1 = `${amount.item1} ${food.item1} will cost ${price.item2} any takers?`;
const order2 = `${amount.item2} ${food.item3} will cost ${price.item3} any takers?`;

console.log(order1, order2);

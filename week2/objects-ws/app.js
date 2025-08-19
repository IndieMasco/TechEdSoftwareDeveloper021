console.log("hello world");

const person = {
  name: "Bob",
  age: 30,
  favouriteColour: "red",
};

console.table(person);

//====================================================

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

//========================================================

const food = {
  breakfast: "bacon",
  lunch: "pizza",
  dinner: "toast",
};

const random = {
  item: "12",
  item2: "43",
  item3: "22",
};

const order = `i want ${random.item} ${food.breakfast}`;

console.log(order);

//========================================================

const blogPost = {
  title: "My first blog post",
  author: {
    name: "Bob",
    age: 30,
    favouriteColour: "red",
  },
  tags: ["coding", "javascript", "objects", "arrays"],
  content: "This is my blog post about learning objects and arrays.",
};

console.log(blogPost.author.name);
console.log(blogPost.tags[0]);
console.log(blogPost.tags.length);

// You can combine this with a traditional for loop

console.log(
  `There are ${blogPost.tags.length} tags for post "${blogPost.title}":`
); // Output: There are 4 tags for post "My first blog post":
for (let i = 0; i < blogPost.tags.length; i++) {
  console.log(blogPost.tags[i]); // Output: coding, javascript, objects, arrays
}

//Or use a for of loop if you don’t need the index

console.log(`Tags for post "${blogPost.title}":`); // Output: Tags for post "My first blog post":
for (let tag of blogPost.tags) {
  console.log(tag); // Output: coding, javascript, objects, arrays
}

//=======================================================================

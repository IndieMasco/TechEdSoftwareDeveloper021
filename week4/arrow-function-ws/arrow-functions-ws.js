// Ordinary function
function add(a, b) {
  return a + b;
}

add(1, 2);

// Arrow function
const add = (a, b) => {
  return a + b;
};

add(1, 2);
// OR
const add = (a, b) => a + b;

add(1, 2);

//================================================

// Arrow function

const add = (a, b, c, d) => {
  return a + b + c + d;
};

add(5, 7, 3, 12);
// OR
const add = (a, b, c, d) => a + b + c + d;

add(5, 7, 3, 12);

//================================================

// Ordinary function
async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
}

// Arrow function
const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
};

async function main() {
  const posts = await getPosts();
  console.log("Posts:", posts);
}
main();

//================================================

// Arrow function
const getAlbums = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  const data = await response.json();
  return data;
};

async function main() {
  const albums = await getAlbums();
  console.log("Albums:", albums);
}
main();

//================================================

// Challenge 1
// Normal function
function greet(name) {
  return `Hello ${name}`;
}
// Arrow function
const greet = (name) => `Hello ${name}`;

// Challenge2
// Normal function
button.addEventListener("click", function () {
  let count = 0;
  count += 1;
});

// Arrow function
button.addEventListener("click", () => {
  let count = 0;
  count += 1;
});

// Challenge 3
// Normal function
async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
}

// Arrow function
const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
};

// Storing out array in a variable

let myArray = ["item1", "item2", "item3"];

// Exaples
// An array can have multiple data types stored in it
let TecgEdStaff = ["Seth", "Chris", "John"];
let MyFavoriteFoods = ["Pizza", 10, null, true];

// Length of an array
// The length of an array is the number of items in it
// TechEdStaff.length; // 3
// MyFavoriteFoods.length; // 4

// We can access the length property of an array
TechEdStaff.length; // 3

console.log(TechEdStaff.length); // 3
console.log(MyFavoriteFoods.length); // 4

// We can also use the length property to loop through an array
for (let i = 0; i < TechEdStaff.length; i++) {
  console.log(TechEdStaff[i]);
}

// We can access the items in an array using their index
// Index starts at 0
// TechEdStaff[0]; // "Seth"
// TechEdStaff[1]; // "Chris"
// TechEdStaff[2]; // "John"

// We can also use the length property to access the last item in an array
// TechEdStaff[TechEdStaff.length - 1]; // "John"

// Index
// Index is a valur (number) that represents the position of an item in an array
// The first item in an array has an index of 0
// The second item in an array has an index of 1
// The third item in an array has an index of 2
// And so on...

TechEdStaff[0]; // "Seth"
TechEdStaff[1]; // "Chris"
TechEdStaff[2]; // "John"

console.log(TechEdStaff[0]); // "Seth"

// What is the index of the last item in an array?
// We can use the length property to find the index of the last item in an array
TechEdStaff(TechEdStaff.length - 1); // "John"
console.log(TechEdStaff[TechEdStaff.length - 1]); // "John"

// We can also use the length property to loop through an array backwards
for (let i = TechEdStaff.length - 1; i >= 0; i--) {
  console.log(TechEdStaff[i]);
}

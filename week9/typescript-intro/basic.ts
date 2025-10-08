// TypeScript Basics

// - The extenstion of TYpeScript files is .ts

// Variables

// TypeScript will infer the data type you store in a variable and it will enforce it --> type inference
// TypeScript has a type system --> guidelines of types, based on the shape of the type
// Type annotation --> how we tell the type a variable will store (: number)
// Data type in TypeScript are similar to the ones in JavaScript --> primitive and complex data types
let myAge: number = 57; // integer or number
myAge = 89;

let myName: string = "Manny";

let isInstructor: boolean = true;

// In complex data types, we also need to specify the types of the inner items
let favouriteColours: string[] = ["purple", "yellow"];
let favouriteFood: Array<string> = ["pizzza", "burritos", "waffles"];
let favouriteThing: (number | string | boolean)[] = [7, "sun", false, "water"];
let moreFavouriteThing: Array<number | string | boolean> = [7, "sun", false];

let staff: { staffName: string; location: string; role: string } = {
  staffName: "Bertie",
  location: "super secret",
  role: "TA",
};

// If we have to reuse a data annotation, we could declare it separatly as a type
type staffType = {
  staffName: string;
  location: string;
  role: string;
  contract?: string; // Optional chaining ?. --> if we want to have a property in our type that may not be part of the following objects, we could make it "optional"
};

let staff2: staffType = {
  staffName: "Joe",
  location: "Unknown",
  role: "TA",
};

let staff3: staffType = {
  staffName: "Tim",
  location: "Unknown",
  role: "course director",
  contract: "full time",
};

// DON'T overuse type "any"
let myVariable: any = null;

// Functions

function add(a: number, b: number) {
  return a + b;
}

// add(1, "2"); // THis will error because the b parameter needs a number

// Type inference
let thisVariable; // Undefined
thisVariable = 6;
thisVariable = "string";
thisVariable = null;

console.log(typeof thisVariable); // when we have a undefined variable, TypeScript will infer type "any"

// Union types
// Union types are custom types that you can create to have more control over your data

type schoolSubjects = "maths" | "english" | "science" | "pe";

// let mySubjects: schoolSubjects = "spanish"; // This error is because "spanish" is not defined in the schoolSubjects type

let bertiesSubjects: schoolSubjects = "science";

type menu = {
  name: string;
  menuItem: "food" | "drink" | "snack";
  price: number;
  period: "morning" | "afternoon" | "evening";
  customerReview?: string; // Optional property
};

const breakfast: menu = {
  name: "breakfest",
  menuItem: "food",
  price: 5,
  period: "morning",
};

// type annotation for an array of objects
// In this case, we have a separate type for our objects (menu), so we need to add the menu type with []
const restaurantMenu: menu[] = [
  {
    name: "breakfast",
    menuItem: "food",
    price: 5,
    period: "morning",
  },
  {
    name: "lunch",
    menuItem: "food",
    price: 10,
    period: "afternoon",
  },
];

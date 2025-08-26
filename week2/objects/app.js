console.log("Hello, World!");

// Objects
// Data containers for more complex data

// Structre
// We use {} for objects
// Each property has two parts --> key: value

let city = {
  ciryName: "Norwich",
  population: 250000,
  hasTrainStation: true,
};

console.log(city);

// TODO: see the value of cityName in the console
console.log(city.cityName); // Norwich

// TODO: see the value of population in the console
console.log(city.population); // 250000

// TODO: add a new property for contry
city.country = "United Kingdom";

console.log(city);

//==========================================

let newCity = {
  cityName: "London",
  population: 9000000,
  hasTrainStation: true,
  country: "United Kingdom",
  coffeeShops: [
    "Starbucks",
    "Costa",
    "Cafe Nero",
    "Prêt à Manger",
    "Flat White",
  ],
  companies: [
    { companyName: "Tech Educators", location: "some building" },
    { companyName: "Tech Waffle", location: "another building" },
  ],
};

console.log(newCity.coffeeShops);
console.log(newCity.coffeeShops[1]);

//TODO: i want to see Tech Educators in the console
console.log(newCity.companies[0].companyNames);

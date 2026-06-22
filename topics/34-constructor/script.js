// constructor = special method for defining the properties and methods of objects

// Previously we constructed objects like this
const car11 = {
    make: "Ford",
    model: "Mustang",
    year: 2024,
    color: "red",
    drive: function(){console.log(`You drive the ${this.model}`)}
}

// But what if we have to create alot of objects

// Using constructor to construct objects
// Constructor name starts with a capital letter
// it accepts the stuff that will be diff for each object
// separated by ,
// helps with code reusability

function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function(){console.log(`You drive the ${this.model}`)} // model alone works too
}

// Creating object 
const car1 = new Car("Chevrolet", "Camaro", 2026, "blue"); // [car1 is an object]
const car2 = new Car("Bugatti", "Chiron", 2024, "black");
const car3 = new Car("Porsche", "911", 2020, "red");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
car1.drive();

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
car2.drive();

console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);
car3.drive();
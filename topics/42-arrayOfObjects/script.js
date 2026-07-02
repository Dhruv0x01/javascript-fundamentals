

const fruits = [{name: "apple", color: "red", calories: 95}, 
                {name: "orange", color: "orange", calories: 45}, 
                {name: "banana", color: "yellow", calories: 105}, 
                {name: "coconut", color: "white", calories: 77},
                {name: "mango", color: "yellow", calories: 205}];

// To add a new object, we can use push method
fruits.push({name: "grapes", color: "purple", calories: 66});


// Pop method to remove last element
//fruits.pop();



// To remove element at certain indecies- splice()
//fruits.splice(1, 2); // element at index 1 and 2 is removed
//fruits.splice(1, 1); // element at index 1 is removed


// forEach() method to loop through each object of the array
fruits.forEach(fruit => console.log(fruit)); // this will display each object of the array
fruits.forEach(fruit => console.log(fruit.name)); // this will display object.name attribute of each i.e name of each object


// map() method to run each object through a function and return a new array
const fruitNames = fruits.map(fruit => fruit.name); // this created an array fruitNames including name of each object in the fruits array
console.log(fruitNames);

const fruitColors = fruits.map(fruit => fruit.color);
console.log(fruitColors);

const fruitCalories = fruits.map(fruit => fruit.calories);
console.log(fruitCalories);



// filter() method -> it will return a new array after using each element and checking a condition
//                                        this became the returning condition
const colorYellow = fruits.filter(fruit => fruit.color === "yellow");
// It returned the object only if its color attribute is strictly equals to yellow
console.log(colorYellow);

// it returns object who calories are below 100
const lowCalories = fruits.filter(fruit => fruit.calories < 100);
console.log(lowCalories);

const highCalories = fruits.filter(fruit => fruit.calories >= 100);
console.log(highCalories);


// reduce() method => used to return a single value in this case a single object
const highestCalories = fruits.reduce( (max, fruit) => 
                                    fruit.calories > max.calories? fruit: max);
console.log(highestCalories);

const leastCalories = fruits.reduce( (min, fruit) => 
                                    fruit.calories < min.calories ? fruit: min);
console.log(leastCalories);

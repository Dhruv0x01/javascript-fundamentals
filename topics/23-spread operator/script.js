// spread operator = ... allows an iterable such as an array or string to be expanded into separate elements
//                   (unpacking the elements)



// Math.max() me directly array nhi dal sakte 

let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);
// [1, 2, 3, 4, 5] converted to 1, 2, 3, 4, 5
// individual digits me convert kiye

console.log(maximum); // 5
console.log(minimum); // 1


let name = "Dhruv Darad";
let letters = [...name];
console.log(letters);
// "Dhruv Darad" string ko 'D', 'h', 'r', 'u', 'v', ' ', 'D', 'a', 'r', 'a', 'd' 
// We converted a string to an array of characters

let a = [...name].join('-'); // we first took out individual character through ... then we joined each of them
                             //  by adding - in between
console.log(a);
// D-h-r-u-v- -D-a-r-a-d

// We can use spread operator to combine arrays
let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "potatoes", "cauliflower"]
let foods = [...fruits, ...vegetables, "eggs", "milks"]; // we have all the elements from two arrays and we appended 
                                                         // new elements eggs and milks
console.log(foods);
// Creating a shallow copy of array fruits
// shallow copy means it is a different data structure but it contains identical values

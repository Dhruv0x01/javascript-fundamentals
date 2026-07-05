// sort() = method used to sort elements of an array in place
//          Sorts elements as strings in lexicographic order, not alphabetic order
//          lexicographic = (alphabet + numbers + symbols) as strings

// While sorting, we treat any elements as strings
let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];

fruits.sort(); // Sorted the array in alphabetical order
console.log(fruits);


let numbers = [1, 6, 2, 10, 24, 51, 3, 7];

numbers.sort(); // this compares "1" "10" "2" "24" "3" "51" "6" and so on

console.log(numbers);


// sort(compareFunction)
// We put inside compare function and js follow this
// sort( compareFunction(a, b) > 0) {b comes first and then a}
// sort( compareFunction(a, b) < 0) {a comes first and then b}
// sort( compareFunction(a, b) === 0) {keep same}

/*

let digits = [2, 6, 1, 10, 15, 21, 166, 3, 7, 14];

// digit sorted ascending order
//digits.sort((a, b) => a - b); 
// if a-b is positive then we put them as b, a
// if a-b is negative then we put in a, b

// digit sorted descending order
digits.sort((a, b) => b - a);


console.log(digits);

*/


const people = [{name: "Dhruv", age: 21, CGPA: 9.47},
                {name: "Ravi", age: 19, CGPA: 7.1},
                {name: "Jackson", age: 25, CGPA: 4.2},
                {name: "Ram", age: 17, CGPA: 9.99}
                ];


// You can sort people array of objects directly too
// people.sort((a, b) => a.age - b.age)
// This will sort the original array people

// Sorting with each person's age(ascending)
const ascendingsortedByAge = people.sort((a, b) => a.age - b.age);
console.log(ascendingsortedByAge);

// Sorted with each person's age(descending)
const descendingsortedByAge = people.sort((a, b) => b.age - a.age);
console.log(descendingsortedByAge);

// Sorted by CGPA(top to bottom)
const sortedByCGPA = people.sort((a, b) => b.CGPA - a.CGPA);
console.log(sortedByCGPA);

// To sort strings lexicographically(alphabetically only)
// a.name.localeCompare(b.name) 
const sortedByName = people.sort((a, b) => a.name.localeCompare(b.name));
console.log(sortedByName);

// For reverse
const sortedReverseByName = people.sort((a, b) => b.name.localeCompare(a.name));
console.log(sortedReverseByName);
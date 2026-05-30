// striing slicing = creating a substring from a portion of another string
// string.slice(start, end)
// [start, stop)

const fullName = "Dhruv Darad";

/*
let firstName = fullName.slice(0,5);

let lastName = fullName.slice(6);

let firstChar = fullName.slice(0, 1);

let lastChar = fullName.slice(-1);

let lastTwoChar = fullName.slice(-2);

let lastThreeChar = fullName.slice(-3);
*/

// To make the program more dynamic, we will combine string slicing with indexOf method, 
// we will search the string for the first instance of space. 
// Anything before space is first name and after space is last name.

let firstName = fullName.slice(0, fullName.indexOf(" "));
console.log(firstName);

let lastName = fullName.slice(fullName.indexOf(" ")+1);
console.log(lastName);

const newName = "Dhruv Darad Kumar";
let firstPart = newName.slice(0, newName.indexOf(" "));
console.log(firstPart);
let secondPart = newName.slice(newName.indexOf(" ")+1, newName.lastIndexOf(" "));
console.log(secondPart);
let lastPart = newName.slice(newName.lastIndexOf(" ")+1);
console.log(lastPart);


const email = "dhruvdarad04@gmail.com"
let userName = email.slice(0, email.indexOf("@"));
console.log(userName);

let extension = email.slice(email.indexOf("@")+1)
console.log(extension);
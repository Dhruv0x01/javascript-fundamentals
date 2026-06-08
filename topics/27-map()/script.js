// .map() = accepts a callback and applies that function to each element of an array, [similar to forEach() method]
//          then return a new array (this is the new thing in .map(), in forEach() return doesnt happen)

// array.map(callback)
// We don't change the elements in the original array, we create a new array instead

const numbers = [1, 2, 3, 4, 5];

function square(element){
    return Math.pow(element, 2); // Here we are returning the updated element we want
}

const squaredNumbers = numbers.map(square); // map() method returns so we are storing it in a new array variable
//console.log(squaredNumbers);



function cube(element){
    return Math.pow(element, 3);
}

const cubedNumbers = numbers.map(cube);
//console.log(cubedNumbers);




const students = [`dhruv`, `rohit`, `AyUSh`, `AbhINAV`, `GIRI`];

function upperCase(element){
    return element.toUpperCase();
}
const upperStudents = students.map(upperCase);
//console.log(upperStudents);


function lowerCase(element){
    return element.toLowerCase();
}
const lowerStudents = students.map(lowerCase);
//console.log(lowerStudents);

function capitalizeFirstElement(element){
    return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
}
const capitalizeStudents = students.map(capitalizeFirstElement);
//console.log(capitalizeStudents);



const dates = ["2026-06-08", "2026-02-03", "2024-03-19", "2015-12-30"];


function formatDates(element){
    const parts = element.split("-");             // With this we splitted each element the moment it hit -            
    return `${parts[2]}/${parts[1]}/${parts[0]}`; // 08, 06, 2026 and so on and stored it in a new array parts
}

const formattedDates = dates.map(formatDates);
console.log(formattedDates);
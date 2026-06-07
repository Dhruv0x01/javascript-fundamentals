// forEach() = method used to iterate over the elements of an array
//             and apply a specified function (callback) to each element

// array.forEach(callback)
// In forEach() method -> element, index, array are provided to us automatically
// order is imp -> element, index and array
// element is the element of the array 
// index is the index of the current element looping through the array
// array is the array we are using the forEach() method for

// We are sending in callback btw 

/*

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(cube);
numbers.forEach(display);

function double(element, index, array){ 
    array[index] = element*2; 
}

function triple(element, index, array){
    array[index] = element*3;
}

function square(element, index, array){
    array[index] = Math.pow(element, 2);
}

function cube(element, index, array){
    array[index] = Math.pow(element, 3);
}


function display(element){
    console.log(element);
}

*/


let fruits = [`APPLE`, `OrAnGe`, `banana`, `cocONUT`];


fruits.forEach(capitalizeFirstElement);
fruits.forEach(display);


function lowerCase(element, index, array){
    array[index] = element.toLowerCase();
}

function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}

function capitalizeFirstElement(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
}

function display(element, index, array){
    console.log(`Element at index ${index} is ${element}`);
}
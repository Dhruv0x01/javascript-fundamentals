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
    array[index] = element.toLowerCase(); // changing individual elements in the array, no need to return anything
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



/* forEach() vs map()

array.forEach(callback) 
array.map(callback)

-element, index and array will be provided for us with forEach() and map() both methods
-Both accepts a callback function
-Both iterate through an array
-Both go through each element one by one
-Both apply that callback to each element

-forEach() returns undefined and does not modify the original array by default 
-Modification happens only if you explicitly do it inside the callback

-map() returns a new array, original stay unchanged

-map() is chainable (eg. .map().filter())
-forEach() is not chainable

We use forEach() for side effects (logging, DOM updates), 
We use it when we just want to do something with each item
Side effect -> when a function does something outside of itself, like changing something in the world
rather than just returning a value



We use map() when you need a transformed array back
 
*/
// const = Variables that can't be changed

// Writing a program to calculate the circumference of the circle

/*
Defining variables
let pi = 3.14159;

pi = 100000;  
This is why we don't use variables to put constants
We might end up changing constant value mid program

*/

/*
// Window prompt method
radius = window.prompt(`Enter radius of a circle: `);
radius = Number(radius);

circumference = 2*PI*radius;

console.log(circumference);
*/
const PI = 3.14159;

let radius;
let circumference;
// Let's do the text box method

document.getElementById("button").onclick = function(){   // Choose button, this happens on clicking button
    radius = document.getElementById("content").value;   // radius = chose input id .value so radius is equals to the input user entered 
    radius = Number(radius); // User entered stuff was string so converted to number so we can perform mathematical operation
    circumference = 2*PI*radius;  // Mathematical operation  
    document.getElementById("result").textContent = circumference + " cm";  // Chose h1 tag by id .textContent help us change content
}

// We didn't needed to conv circumference to String, and in change content we just = circumference;




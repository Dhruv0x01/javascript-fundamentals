// callback = a function that is passed as an argument to another function.

// Some activities take time to complete(reading a file), but we continue with the program anyways
// We might attempt to showcase that file(that we haven't completed reading), so to manage that we use callback
// When you're done, call this next.

// To use a callback:- You pass the name of the function as argument to another function

// Used to handle asynchronous operations:
// 1. Reading a file
// 2. Network requests
// 3. Interacting with databases

// This is used when we are not sure when these activities will complete, by using callbacks
// we are ensuring that a function executes after these processes are complete and not before

// We are basically saying, "Hey when you are done, call this next"


// Example 1:-


hello(wait); // make sure you only write the name of function that you wanna pass that is 
            // dont write () after goodbye as that will call the goodbye function right away
            // By using callbacks, we are making sure that the function passed in is executed next 

function hello(callback){
    console.log(`Hello`);
    callback(); // invoked the received callback function
}

function wait(){
    console.log(`Wait`);
}

function leave(){
    console.log(`Leave`);
}

function goodbye(){
    console.log(`Goodbye`);
}



// Example 2

// Within our sum function, we calculated the result first, and once that step is done, then display the result to the console.

const selectH1 = document.getElementById("myH1");

sum(displayDOM, 6, 13);

function sum(callback, x, y){
    let result = x+y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}

function displayDOM(result){
    selectH1.textContent = result;
}
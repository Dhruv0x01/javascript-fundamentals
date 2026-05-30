/*
// we called the function before defining them, it works in js, because of hoisting 
// hoisting - js automatically moves certain declarations to the top before executing
// dont work for arrow functions or function expressions
function1();
function2();

function function1(){
    let x = 1;
    console.log(x);
}

function function2(){
    let x = 2;
    console.log(x);
}
*/

// functions can't see inside other functions without calling that other function

let x = 3;
function showX(){
    console.log(x);
}
showX();

// this works as the variable declared outside the function has global scope, hence it is known from inside the function too
// it is not recommended to declare global variables in a large program because you can have naming conflicts


// when inside of a function, we use any local instance of a variable first, if we can't find it then we move to global instance

function showwX(){
    let x = 10;
    console.log(x);
}
showwX(); // printed the local instance which is 10


// if we have two variables with the same name in different scopes, we will use the local instance first
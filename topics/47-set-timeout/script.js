// setTimeout() = function in js that allows you to schedule the execution of a function after an amount of time (milli seconds)
//                Times are approximate (varies based on the workload of the js runtime env.) (dont use it for stopwatch)

//               setTimeout(callback, delay);

/*
function sayHello(){
    window.alert("Hello");
}

setTimeout(sayHello, 3000);
*/

//setTimeout(function(){window.alert('Hello');}, 3000)

//setTimeout(() => window.alert('Hello everyone!!'), 2000);



/*
// ------------------------------------
// clearTimeout(timeoutId) = can cancel a timeout before it triggers


const timeoutId = setTimeout( () => window.alert('Hello world!!'), 2000); // even this code alone does trigger the function

clearTimeout(timeoutId);


// here we called setTimeout function and then cleared timeout so nothing happened

*/


// ---------------------------------
// Make a button, trigger setTimeout when you click the button

let timeoutId;

function startTimer(){
   timeoutId = setTimeout(() => window.alert('Hello'), 3000);
   console.log('started');
}

function endTimer(){
    clearTimeout(timeoutId);
    console.log('cleared');
}










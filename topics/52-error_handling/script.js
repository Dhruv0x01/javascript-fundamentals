// Error = An object that is created to represent a problem that occurs
//         Occur often with user input or establishing a connection

// Errors when they are uncaught interrupt the normal flow of our program
// Errors must be handled by these:-

// try{ } = Encloses code that might potentially cause an error
// catch(){ } = Catch and handle any thrown Errors from try { }
// finally{ } = (optional) always executes. Used mostly for clean up.
//              eg: close files, close connections, release resources

/*
// Example 1

try{
    console.log("Hello");
    // Network Errors 
    // Promise Rejection 
    // Security Errors
}

// It will catch the error object and store in its parameter which is error here.
catch(error){
    console.error(error);
}
// console.error will highlight any error that occured and still handle them(i.e we reached the end of the program)
// Good for debugging
// If no error occured then nothing will be printed from the catch block


finally{
    // Close files
    // Close connections
    // Release resources
    // Used to do any cleanup at the end
    console.log("This always executes.");
}



console.log("You have reached the end!");

*/



// Example 2
// Errors can also occur when accepting input because we dont know what the user's gonna type in, they might enter malicious script
// Dividing by 0 in js gives infinity, we will intentionally cause error

try{
    const divident = Number(window.prompt("Enter a divident: "));
    const divisor = Number(window.prompt("Enter a divisor: "));

    // We intentionally caused error
    if(divisor == 0){
        throw new Error("You can't divide by 0"); // We are calling the error contructor to construct a new error object
    }

    // To check if your variable is not a number, we use a function -> isNaN() and pass variable to it, returns true means not a number
    if(isNaN(divident) || isNaN(divisor)){
        throw new Error("Values must be a number.");
    }



    const result = divident/divisor;
    console.log(result);
}


// Since we handled the error, we will reach end of the program
catch(error){
    console.error(error);
    // .error is only for highlighting 
}

console.log("You have reached the end of the program.");
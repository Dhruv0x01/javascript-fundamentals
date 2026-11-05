// Synchronous = Executes line by line consecutively in a sequential manner
//               Code that waits for an operation to complete.


// Asynchronous = Allows multiple operations to be performed concurrently without waiting 
//                Doesn't block the execution flow and allows the program to continue
//                (I/O opeations, network requests, fetching data)
//                Handled with: Callbacks, Promises, Async/Await


// If it is crucial that task 2, 3, 4 comes once task 1 is done then 


function func1(){
    setTimeout(() => {console.log("Task 1");
                      callback()}, 3000);
}


function func2(){
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}





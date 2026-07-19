// console.time() = tool that allows you to measure the time it takes for a section of code or process to execute
//                  great for identifying performance bottlenecks

// to start keeping track of time
// console.time("label"); 

// to stop keeping track of time
// console.timeEnd("label"); 


// To start keeping track of time
/*
console.time('test')
for(let i=0; i < 1090000000; i++){
    // some code
}
console.timeEnd('test'); // stop keeping track of time
*/


function loadData(){

    console.time('loadData');

    for(let i = 0; i<1000000000; i++){
        ////
    }

    console.timeEnd('loadData');

}

function processData(){
    console.time('processData');

    for(let j = -10000000; j<10000000000; j++){
        ///
    }
    console.timeEnd('processData');
}


loadData();
processData();

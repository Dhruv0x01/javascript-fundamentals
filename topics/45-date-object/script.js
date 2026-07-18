// Date objects = Objects that contain values that represent dates and times
//                These date objects can be changed and formatted



// To create your own custom date and time object -> pass in parameters
// Date(year, month, day, hour, minute, second, ms) 0 -> January, time in military btw(12.13...24)
/*

const date = new Date(2027, 1, 3, 13, 1, 0, 0);
//const date = new Date(0); // Gave Jan 1 1970 5:30 

//const date = new Date(1700000000); // im asking date to give me time that is 1.7 billion milli seconds after the time it gave at 0
// Passing in milli seconds will be good for some sort of timer

console.log(date);

*/



/*

const date = new Date();

// You can extract individual values from date object
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const dayOfWeek = date.getDay();
const hr = date.getHours();
const min = date.getMinutes();
const sec = date.getSeconds();
const milliSec = date.getMilliseconds();

console.log(day); // gives date
console.log(datee);
console.log(month); // 6 which is july as jan is 0
console.log(year);
console.log(dayOfWeek); // 6 as saturday
console.log(hr);
console.log(min);
console.log(sec);
console.log(milliSec);

*/


/*
// You can set date with a method

const date = new Date();

date.setFullYear(2027);
date.setMonth(1);
date.setDate(14);
date.setHours(2);
date.setMinutes(4);
date.setSeconds(10);

console.log(date);

*/



const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01"); // in the string type 1 is jan

if(date2 > date1){
    console.log("Happy New Year!!");
}
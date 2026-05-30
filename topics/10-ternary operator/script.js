// Ternary operator = a shortcut to if{} and else{} statements
//                    helps to assign a variable based on a 
//                    condition ? codeIfTrue : codeIfFalse;

let age = 17;

let message = age>=18 ? "You are an adult": "You are a kid";
console.log(message);

// if true then the message will be assigned to first string, else second.

// alternative to this
/* 
if(age>=18){
    message = "You are an adult";
}else{
    message = "You are a kid";
}
*/

// can't include else if{} one. Only if and else
let time = 8;
let greetings = time<12 ? "Good Morning" : "Good Afternoon"; 
console.log(greetings);


let isStudent = false;
let notification = isStudent ? "You are a student" : "You are NOT a student";
console.log(notification);


let purchaseAmount = 199;
let discount = purchaseAmount>100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount*(discount/100)}`);
console.log(`You got ${discount}% discount`);







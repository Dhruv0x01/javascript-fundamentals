/*
let age = 14;

if(age >= 18){
    console.log("You are old enough to enter this site!!");
}else{
    console.log("You must be 18+ to enter this site!!");
}
*/

/*
let time = 14;

if(time < 12){
    console.log("Good morning!!");
}else if(time>=12 && time < 17){
    console.log("Good afternoon!!");
}else{
    console.log("Good evening!!");
}
*/

/*
let isStudent = false;

if(isStudent){
    console.log("You are a student!!");
}else{
    console.log("You are not a student!!");
}
*/

// Nested if/else
/*
let age = 18;
let hasLicence = true;

if(age>=18){
    console.log("You are old enough for driver's licence!!");    

    if(hasLicence){
        console.log("You have your licence!!");
    }else{
        console.log("You do not have your licence yet!!");
    }

}else{
    console.log("You must be atleast 18 for driver's licence!!");
}
*/

/*

let age = 0;

if(age >= 100){
    console.log("You are TOO OLD to enter this site!!");
}else if(age == 0){
    console.log("You are a newborn g, sleep");
}else if(age < 0){
    console.log("Your age can't be below zero!!");
}else if(age >= 18){
    console.log("You are too old to enter this site!!");
}
else{
    console.log("You must be 18+ to enter this site");
}

*/

const subButton = document.getElementById("submit");
const input = document.getElementById("age");
const result = document.getElementById("result");
let age;

subButton.onclick = function(){
    age = input.value;
    
    if(age<0){
        result.textContent = "Like How?";
    }else if(age>=0 && age<18){
        result.textContent = "You must be 18 or above to enter this website";
    }else if(age>=18 && age<100){
        result.textContent = "You are old enough to enter this website";
    }else{
        result.textContent = "You are TOO OLD to enter";
    }

}
// while Loop = repeat some code while some condition is true

// When we enter cancel, then username becomes null



/* While Loop */

/* Syntax
while(condition){
    code
}
*/

/*
let username = "";

while(username === "" || username === null){
    username = window.prompt(`Enter your name: `);
}

console.log(`Hello ${username}`);
*/

/* Do While - First execute the code under do and then check condition*/

/* Syntax
do{
    code
}while(condition){
    code
}
*/


let loggedIn = false;
let username;
let password;


while(!loggedIn){
    username = window.prompt(`Enter your username: `);
    password = window.prompt(`Enter your password: `);

    if(username === "dhruv" && password === "Razorrazor"){
        loggedIn = true;  // hence when we go back, we get out of while loop as loggedIn is true now
        console.log(`You are logged in!!`);
    }else{
        console.log(`Invalid credentials! Please try again`);
    }
}


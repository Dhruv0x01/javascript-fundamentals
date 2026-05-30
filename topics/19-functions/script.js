function happyBirthday(username, age){
    console.log(`Happy birthday to you ${username}!!`);
    console.log(`You are ${age} years old!!`);
}
// username, age -> parameters
// Dhruvvv, 20 -> arguments

/*
happyBirthday(`Dhruvvv`, 21);
happyBirthday(`Rohan`, 24);
*/

function add(a, b){
    return a+b;
}

console.log(add(4, 21));

function subtract(a, b){
    return a-b;
}

console.log(subtract(89,10));


/*
function determineEvenOdd(a){
    if(a%2 === 0){
        return `even`;
    }else{
        return `odd`;
    }
}
*/

function determineEvenOdd(a){
    return a % 2 === 0? `even` : `odd`;
}

console.log(determineEvenOdd(69));


function validEmail(email){
    if(email.includes(`@`)){
        return true;
    }else{
        return false;
    }
}
/*
function validEmail(email){
    return email.includes(`@`)? true: false;
}
*/

console.log(validEmail(`dhruv@gmail.com`));
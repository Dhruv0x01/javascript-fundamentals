// string methods = allow you to manipulate and work with text (strings)


let userName = "Dhruv Darad";
console.log(userName.charAt(4));
console.log(userName.indexOf(`d`));
console.log(userName.lastIndexOf(`D`));
console.log(userName.length);

/*
// let userName = "DhruvDarad       ";
userName = "    DhruvDarad";
userName = userName.trim();
console.log(userName);
*/

/*
userName = userName.toUpperCase();
console.log(userName);

userName = userName.toLowerCase();
console.log(userName);
*/

/*
userName = userName.repeat(3);
console.log(userName);
*/

/*
let result = userName.startsWith(" "); // does userName begins with an empty space? returns true or false
if(result){
    console.log(`Your username can't start with an empty space`);
}else{
    console.log(userName);
}

let result2 = userName.endsWith(" "); // returns true or false
if(result2){
    console.log(`Your username can't ends with an empty space`);
}else{
    console.log(userName);
}

let space = userName.includes(` `);
if(space){
    console.log(`Your username can't include an empty space`);
}else{
    console.log(userName);
}
*/


let phoneNumber = "995-284-2765";

//phoneNumber = phoneNumber.replaceAll("-", "/");
//phoneNumber = phoneNumber.padStart(23, "0");
phoneNumber = phoneNumber.padEnd(14, "0");
console.log(phoneNumber);





    






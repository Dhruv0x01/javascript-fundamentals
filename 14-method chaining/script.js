// Method Chaining = Calling one method after another in one continuous line of code
// Instead of ending method with a ; we will end it with . to continue writing methods

// I would like to trim any white space and take the character only
// Take the first character, make it uppercase 
// Take all the other characters, make them lowercase

// ----No Method Chaining----

/*

let username = window.prompt(`Enter your username: `);

username = username.trim();
let letter = username.charAt(0); // as we had to select a single character, we could use 
// let letter = username.slice(0,1); 
letter = letter.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();
username = letter+extraChars;
console.log(username);
*/

// ------ Method Chaining ------
// Instead of ending method with a ; we will end it with . to continue writing methods

let username = window.prompt(`Enter your username: `);

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase(); 
// or 
// username = username.trim();
// username = username.charAt(0).toUpperCase() + username.slice(1).toLowerCase();
console.log(username);
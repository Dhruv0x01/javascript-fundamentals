// Easy Way
/*
let username;
username = window.prompt("What's your username: ");
console.log(username);
*/

//Professional Way

// To print output on console
/*
let username;


document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
}
*/


//To print output on page only

let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`;
}

// DOM = DOCUMENT OBJECT MODEL
//       Object{} that represents the page you see in the web browser and provides you with an API to interact with it.
//       Web browser constructs the DOM when it loads an HTML document, and structures all the elements in a tree-like representation.
//       JavaScript can access the DOM to dynamically
//       change the content, structure, and style of a web page.


// document is an object, it contains properties and methods and other nested objects 
document.getElementById("");

//console.log(document); // going to display the html document(index.html)



document.title = "My Website"; // title was previously set as DOM in the html file, we changed it from here


//document.body.style.backgroundColor = "hsl(0, 0%, 15%)"; // Even without css we can dynamically change background color 

// dir meaning directory
//console.dir(document); // this will list all the properties of this object


const username = "";

const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === ""? ` Guest`: ` ${username}`;
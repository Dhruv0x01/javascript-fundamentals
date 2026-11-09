// Element Selectors = Methods used to target and manipulate HTML elements.
//                     They allow you to select one or multiple HTML elements from the DOM (Document Object Model)

// 1. document.getELementById()                // ELEMENT OR NULL
// 2. document.getElementsByClassName()          // HTML COLLECTION
// 3. document.getElementsByTagName()          // HTML COLLECTION
// 4. document.querySelector()                 // First ELEMENT OR NULL
// 5. document.querySelectorAll()              // NODELIST 



/*
// Eg : getElementById
const myHeading = document.getElementById("my-heading");

myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

console.log(myHeading); // <h1 id="myHeading" style="background-color: yellow; text align: center;">Food R Us</h1>


// if myHeading doesn't exist it will return null, so document.getElementById() either returns element or null
// eg: gonna create one that doesnt exist
const test = document.getElementById("test");
console.log(test); // null
*/


/*
// Eg: getElementsByClassName()
// Similar to array but not technically same

const fruits = document.getElementsByClassName("fruits");

console.log(fruits); 
// Printed:-
//  0: div.fruits
//  1: div.fruits
//  2: div.fruits
//  length: 3

// These are the three objects, inside each object there exist all the methods/properties 
// under 0: div.fruits we can find textContent: "Apple"

// To select one of these objects you will use index

fruits[0].style.backgroundColor = "red";

fruits[1].style.textAlign = "center";

// Can use loop too
// This made all three have backgroundColor = "yellow"
for(let fruit of fruits){
    fruit.style.backgroundColor = "yellow";
}

// Html collection don't have a forEach method
// What we could do is typecast our html collection as an array and then use forEach() 

Array.from(fruits).forEach(fruit => {
    fruit.style.textAlign = "center";
});

*/

/*
// eg: getElementsByTagName()
// By tag you mean h1, h2, h3, h4, li, ul, etc

const h4Elements = document.getElementsByTagName("h4");
console.log(h4Elements);

const liElements = document.getElementsByTagName("li");
console.log(liElements);


// We can access individual elements of this html collection by an index

liElements[2].textContent = "wow";
h4Elements[1].style.backgroundColor = "red";

for(let li of liElements){
    li.style.backgroundColor = "Grey";
}


for(let h4 of h4Elements){
    h4.style.backgroundColor = "yellow";
}

const divElements = document.getElementsByTagName("div");

Array.from(divElements).forEach(div => {
    div.style.textAlign = "center";
})

*/



/*
// Eg: querySelector() -> It will return the first matching element or null if it doesn't find any matches


// To select element by class name we will use .className
const element = document.querySelector(".fruits");
// Apple, Orange, Watermelon -> All three are in the class = fruits, we select Apple as its first
console.log(element); // div.fruits, Apple
element.style.backgroundColor = "Red";



const test = document.querySelector(".test"); // doesnt exist
console.log(test); // null as no class test exist



const li = document.querySelector("li"); // selected elements by tag name -> li
li.style.backgroundColor = "lightblue"; // highlighted beets 
console.log(li); 
*/

// Eg: querySelectorAll() -> returns nodelist
// A nodeList is similar to HTML collection, but it has built-in methods similar to arrays
// nodelist are static, they do not update automatically in the dom
// html collections are live, they will

// Node list do have built-in forEach() method


const fruits = document.querySelectorAll(".fruits");

fruits[0].style.backgroundColor = "Yellow"; // highlighted apple
fruits[1].style.backgroundColor = "lightgreen"; // highlighted orange
fruits[2].style.backgroundColor = "orange"; // highlighted watermelon


const foods = document.querySelectorAll("li");

foods[4].style.backgroundColor = "orange"; // highlighted celery

console.log(foods); // gives all list items, that is nodelist  


// This will take all list item elements and change background color to yellow
foods.forEach(food => {
    food.style.backgroundColor = "yellow";
})



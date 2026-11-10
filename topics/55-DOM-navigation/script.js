// DOM Navigation = The process of navigating through the structure of an HTML document using JavaScript.


// HTML element includes but are not limited to following properties:-

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children


// Our unorderedList are elements, they each have their own children
// Eg: our unorderedList of fruits have three children:- apple orange banana


// ----------Properties of .firstElementChild-----------------

/*
// Eg: using getElementById()
const element = document.getElementById("fruits"); // storing this unorderedList of fruits within the element
//console.log(element);

const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "lightgreen";
*/

/*
// Eg: using querySelectorAll()
// This will return a nodeList, which have their own forEach method

const ulElements = document.querySelectorAll("ul"); 

ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "yellow";
});
*/



// ----------Properties of .lastElementChild----------------

/*
// Eg: using getElementById()
const element = document.getElementById("fruits");

const lastChild = element.lastElementChild;

lastChild.style.backgroundColor = "lightgreen";
*/

/*
// Eg: using querySelectorAll(), it returns nodeList which has build-in forEach() method
const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElement => {
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor = "yellow";
});
*/


// ----------Properties of .nextElementSibling----------------

/*
// fruits, vegetables and desserts are all children of the body
// so if you choose nextElementSibling of fruits directly it will give vegetables

// apple, orange, banana are siblings
// if i select apple, next sibling is orange and next is banana

const element = document.getElementById("fruits").firstElementChild; // or you could have just selected getElementById("apple");
const firstSibling = element.nextElementSibling;
firstSibling.style.backgroundColor = "yellow";

const secondSibling = firstSibling.nextElementSibling;
secondSibling.style.backgroundColor = "orange";

// There is no next sibling for banana

*/



/*
// ----------Properties of .previousElementSibling-------------
// Previous Sibling of a first child doesn't exist


const element = document.getElementById("potatoes");
const prevSibling = element.previousElementSibling;
prevSibling.style.backgroundColor = "yellow";


const fullElement = document.getElementById("vegetables");
const allPrevSibling = fullElement.previousElementSibling;
allPrevSibling.style.backgroundColor = "yellow";

*/


/*
// ----------Properties of .parentElement----------------
const element = document.getElementById("apple");

const parent = element.parentElement;

parent.style.backgroundColor = "yellow"; // highlighted unordered list of fruits
*/


// ----------Properties of .children---------------------
const element = document.getElementById("desserts");
const childrens = element.children;
console.log(childrens); // returns an html collection
//0: li#cake
//1: li#pie
//2: li#ice-cream

// HTML collection don't have built-in forEach method hence we need to typecast it as array

Array.from(childrens).forEach(child =>{
    child.style.backgroundColor = "yellow";
});


// You can access childrens by their index number too
childrens[1].style.backgroundColor = "orange";
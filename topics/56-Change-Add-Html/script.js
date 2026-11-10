/* HTML file for example 1:
<div id="box1" class="box">
            <p>Box1</p>
        </div>

        <div id="box2" class="box">
            <p>Box2</p>
        </div>

        <div id="box3" class="box">
            <p>Box3</p>
        </div>

        <div id="box4" class="box">
            <p>Box4</p>
        </div>
*/
/*
// Example 1 <h1> 

// Step 1: Create the Element
const newH1 = document.createElement("h1");

// Step 2: Add Attributes/Properties
newH1.textContent = "I like pizza";
newH1.id = "myH1";
newH1.style.color = "Tomato";
newH1.style.textAlign = "center";

// Step 3: Append Element to Dom
//document.body.append(newH1); // We append the element to the parent, this new child is the last child

// If you want it to be the first child, you should prepend
//document.body.prepend(newH1);

// To include this h1element inside the box4
document.getElementById("box4").append(newH1);
// When we are append(), the new h1 element is the last child 

// For the h1 element to be first child:- (the second child here is <p>Box4</p> )
//document.getElementById("box4").prepend(newH1);

// If you want to sandwich the newH1 element between box 3 and 4 i.e before box4
// We can use insertBefore() method
// It has two parameters -> newElement and the currentElement
// NewElement is the one you are inserting
// CurrentElement is the one before which the newElement is being inserted
//const box4 = document.getElementById("box4");
//document.body.insertBefore(newH1, box4);


// What if the boxes don't have id? We are using classes here, it returns a node list
//const boxes = document.querySelectorAll(".box");
//document.body.insertBefore(newH1, boxes[2]);



// Remove HTML element 

//(We need to select the location where our html element is, its in the body)
// Basically went to the direct parent of the element we want to remove then did .removeChild() method
//document.body.removeChild(newH1);

// What if the element was inside box4, we will go till the direct parent of the element we want to remove then removeChild() property
document.getElementById("box4").removeChild(newH1);

*/





// Example 2 <ul>


// Step 1: Create The Element
const newLi = document.createElement("li");


// Step 2: Add Attributes/Properties
newLi.textContent = "Guava";
newLi.id = "guava";
newLi.style.fontWeight = "bold";
newLi.style.fontSize = "2rem";
newLi.style.backgroundColor = "yellow";

// Step 3: Append Element to the DOM // To append inside the li, we need to go till the direct parents of list Items which is orderedList (id = fruits) here
document.getElementById("fruits").append(newLi);
//document.getElementById("fruits").prepend(newLi);

//const orange = document.getElementById("orange");
//document.getElementById("fruits").insertBefore(newLi, orange); // this line goes till the direct parent and then insert before

// What if we want to do without id? we will use querySelector() to go through all the listItems
//const li = document.querySelectorAll("#fruits li"); // selected id of ordered_list #fruits then space li
//document.getElementById("fruits").insertBefore(newLi, li[2]);

// Remove HTML Element
//document.getElementById("fruits").removeChild(newLi); // we went till direct parent of the element we want to remove



/*
HTML File for example 2
<ol id="fruits">
            <li id="apple">Apple</li>
            <li id="orange">Orange</li>
            <li id="banana">Banana</li>
        </ol>
*/
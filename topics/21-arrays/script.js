// arrays

let fruits = ["mango", "watermelon", "apple", "banana"];
console.log(fruits[3]);

// To change an element of the array
fruits[3] = "guava";

// To push an element to the end
fruits.push("pineapple");

// To remove last element
fruits.pop();

// To add an element in the beginning 
fruits.unshift("strawberry")

// To remove an element from the beginning
fruits.shift();

// To get length of an array 
// .length
console.log(fruits.length);

for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

// To get index of a specific element
// .indexOf()
console.log(fruits.indexOf("guava")); // if element not in array then it returns -1


// Enhanced for loop, shortcut to display the elements of an array

for(let fruit of fruits){
    console.log(fruit);
}
// this fruit variable can be anything, we just used singular version of the array name

// To sort an array, we can use sort method
// .sort()

fruits.sort(); // this will sort the elements in alphabetical order
for(let fruit of fruits){
    console.log(fruit);
}


// To sort them in reverse alphabetical order 
// .sort().reverse()

fruits.sort().reverse();
for(fruit of fruits){
    console.log(fruit);
}
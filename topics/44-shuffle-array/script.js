// To shuffle an array (to add randomness)

// Fisher-Yates algorithm

const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

shuffle(cards);

console.log(cards);


// What we will do? 
// Loop through the elements of the array
// Start from last element and work your way towards beginning
function shuffle(array){
    for(let i=array.length-1; i>0; i--){
        const random = Math.floor( Math.random() * (i+1) ); // random index: 0 to i
        [array[i], array[random]] = [array[random], array[i]]; // swap i <-> random 
    }
}
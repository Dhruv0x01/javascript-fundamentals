// .reduce() = reduce the elements of an array to a single value

const prices = [20, 2, 5, 9, 19, 10, 210];

const total = prices.reduce(sum); // now total variable contains only a single value which is sum of all elements in this case

// element is next element
function sum(accumulator, element){
    return accumulator + element;
}
//console.log(`$${total}`); // Returns a single value .reduce(callback)




const grades = [75, 69, 99, 82, 89, 96, 56, 41];

const max = grades.reduce(maxScore);
// accumulator is basically previous element, and element is next element
function maxScore(accumulator, element){
    return Math.max(accumulator, element);
}
console.log(max);


function minScore(accumulator, element){
    return Math.min(accumulator, element);
}
const min = grades.reduce(minScore);
console.log(min);

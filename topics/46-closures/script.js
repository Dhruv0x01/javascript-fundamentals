// closure = A function defined inside another function, the inner function has access to the variables
//           and score of the outer function. 
//           Allow for private variables and state maintenance
//           Used frequently in JS frameworks: React, Vue, Angular

// The inner function has access to everything within the outer function

function outer(){
    let message = 'Hello';

    function inner(){
        console.log(message);
    }

    inner();
}

// If you want to call the inner function by invoking outer function, you need to call inner() somewhere in outer() function
outer();

//console.log(message); // Fails -> Encapsulated variables and made it private so anyone outside the outer() can't access it



// --------------------------------------------
// Maintaining state of a variable


//let count = 0; // we can just declare the variable outside function but then there is no security for the variable

// What we are doing with creating function, then returning object, storing it in a variable through which we can access method inside it
// Basically this is what we do with classes

function createCounter(){
    let count = 0;

    function increment(){
        count++;
        console.log(`Count increased to ${count}`);
    }

    function getCount(){
        return count;
    }

    return {increment, getCount}; // returning an object with access to the increment method and getCount method

}

const counter = createCounter(); // since it returns an object we stored in a const counter, no need for new as createCounter() is a function and not a class

// Now the counter object has access to increment() method.
counter.increment();
counter.increment();
counter.increment();

console.log(counter.count); // gives undefined, hence it is protected 

console.log(`The current count is ${counter.getCount()}`); // We can access the count variable through the method provided by the function itself



// ---------------------------------------------------------------------
// Game system example

function createGame(){
    let score = 0;
    function increaseScore(points){
        score += points;
        console.log(`+${points}pts`);
    }
    function decreaseScore(points){
        score -= points;
        console.log(`-${points}pts`);
    }
    function getScore(){
        return score;
    }

    return {increaseScore, decreaseScore, getScore};

}

const game = createGame(); // on invoking createGame() it returns an object with access to increaseScore, decreaseScore and getScore methods
// Hence we stored the returned object in a variable game, now that variable x becomes object with access to them
// We do this by creating class and making objects too, here we just did it through functions, hence no const game = new createGame()
// We would have needed to do that if createGame() was a class


// By doing this, we safeguard our score variable and no one ouside can change it unless we provide specific method to do so

game.increaseScore(5);
game.increaseScore(15);
game.decreaseScore(12);
console.log(`Current score is ${game.getScore()}pts`);
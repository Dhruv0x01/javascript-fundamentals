const numOfDice = document.getElementById("input");
const diceResult = document.getElementById("diceResult");
const diceImages = document.getElementById("diceImages");


function rollDice(){
    const values = []; // store all dice rolls
    const images = []; // to store images of dice

    // each iteration of for loop give one random dice image
    // during each iteration we need to generate a random number between 1 and 6
    for(let i=0; i<numOfDice.value; i++){
        const randomValue = Math.floor(Math.random()*6 + 1) ; // gives random number between 1 to 6
        values.push(randomValue);
        images.push(`<img src="dice_images/${randomValue}.png" alt="Dice ${randomValue}">`);
    }
    diceResult.textContent = `dice: ${values.join(`, `)}`;
    diceImages.innerHTML = images.join('');
} 
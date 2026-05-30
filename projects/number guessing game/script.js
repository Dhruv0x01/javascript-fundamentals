// Number Guessing Game

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random()*(maxNum - minNum + 1)) + minNum; 

let attempt = 0;
let running = true;
 

while(running){
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum} (Attempt ${attempt + 1}/10)`);
    guess = Number(guess);


    if(isNaN(guess)){
        window.alert(`Please enter a valid number!!`);
    }
    else if(guess < minNum || guess > maxNum){
        window.alert(`Your number is out of range`);
    }
    else{
        attempt++;
        let attemptLabel = attempt === 1 ? "1st" :
                           attempt === 2 ? "2nd" :
                           attempt === 3 ? "3rd" :
                           attempt === 4 ? "4th" :
                           attempt === 5 ? "5th" :
                           `${attempt}th`;

        if(attempt > 10){
            window.alert(`You ran out of attempts! The answer was ${answer}.`);
            running = false;
        }
        else if(guess < answer){
            window.alert(`Nope, try a higher number`);
        }else if(guess > answer){
            window.alert(`Nope, try a lower number`);
        }else{
            window.alert(`Congratulation!! You are correct on your ${attemptLabel} try`);
            running = false;
        }
}
}

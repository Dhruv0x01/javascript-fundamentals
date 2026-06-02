/*
Simple point system
Length:-
x >= 8 ----> 2 point
5 <= x < 8 ----> 1 points
Contain uppercase ----> 1 points
Contain lowercase ----> 1 points
Contain numbers ----> 1 points
Contain special characters ----> 1 points

6 points --> very strong
5 points ---> strong
4 points ---> medium
3 points ---> weak
0-2 points ----> very weak

*/



const input = document.getElementById("pass");
const result = document.getElementById("strengthResult");
const bar = document.getElementById("strengthBar");

function checkStrength(){
    const lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChar = "1234567890";
    const specialChar = "`~!@#$%^&*()_-+=[]{};:',.<>/?";

    let x = input.value;
    let point = 0;

    let hasLowercase = false;
    let hasUppercase = false;
    let hasNumber = false;
    let hasCharacter = false;

    for(let i=0; i<x.length; i++){
        if(lowercaseChar.includes(x[i])){
            hasLowercase = true;
        }
        if(uppercaseChar.includes(x[i])){
            hasUppercase = true;
        }
        if(numberChar.includes(x[i])){
            hasNumber = true;
        }
        if(specialChar.includes(x[i])){
            hasCharacter = true;
        }
        if(hasLowercase && hasUppercase && hasNumber && hasCharacter){
            break;
        }
    }

    if(hasLowercase) point++;
    if(hasUppercase) point++;
    if(hasNumber) point++;
    if(hasCharacter) point++;
    
    if(x.length >= 8){
        point+=2;
    }else if(x.length >= 5){
        point++;
    }
    
        
    let resultLabel = "";

    if(point >= 6 && x.length >= 10){
        resultLabel = "Very Strong";
        bar.style.width = `100%`;
        bar.style.backgroundColor = `hsl(128, 75%, 51%)`;
    }else if(point >= 5 && x.length >= 8){
        resultLabel = "Strong";
        bar.style.width = `75%`;
        bar.style.backgroundColor = `hsl(209, 75%, 51%)`;
    }
    else if(point >= 4 && x.length >= 8){
        resultLabel = "Medium";
        bar.style.width = `50%`;
        bar.style.backgroundColor = `hsl(59, 75%, 51%)`;
    }
    else if(point >= 3 && x.length >= 6){
        resultLabel = "Weak";
        bar.style.width = `25%`;
        bar.style.backgroundColor = `hsl(36, 86%, 47%)`;
    }
    else{
        resultLabel = "Very Weak";
        bar.style.width = `10%`;
        bar.style.backgroundColor = `hsl(14, 86%, 47%)`;
    }

    result.textContent = `Strength: ${resultLabel}`;
}





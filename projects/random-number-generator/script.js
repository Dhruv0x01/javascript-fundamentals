// RANDOM NUMBER GENERATOR

/*
const min = 50;
const max = 100;

let randomNum = Math.floor(Math.random()* (max - min)) + min;

console.log(randomNum);
*/

const rollBut = document.getElementById("roll");
const selLabel1 = document.getElementById("label1");
const selLabel2 = document.getElementById("label2");
const selLabel3 = document.getElementById("label3");

rollBut.onclick = function(){
    let min = document.getElementById("min").value;
    let max = document.getElementById("max").value;
    min = Number(min);
    max = Number(max);
    if(min > max){
        selLabel1.textContent = "Min > Max";
        selLabel2.textContent = '';
        selLabel3.textContent = '';
        return;
    }
    let randomNum1 = Math.floor(Math.random()*(max - min + 1)) + min;
    selLabel1.textContent = randomNum1;
    let randomNum2 = Math.floor(Math.random()*(max - min + 1)) + min;
    selLabel2.textContent = randomNum2;
    let randomNum3 = Math.floor(Math.random()*(max - min + 1)) + min;
    selLabel3.textContent = randomNum3;
}

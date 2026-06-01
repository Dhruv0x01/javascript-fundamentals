const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;
let finalResult;

function convert(){
    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        finalResult = temp*(9/5) + 32
        result.textContent = finalResult.toFixed(1) + "°F"; // .toFixed(1) will give us 1 number after decimal point
    }
    else if(toCelsius.checked){
        temp = Number(textBox.value);
        finalResult = (temp - 32)*(5/9)
        result.textContent = finalResult.toFixed(1) + "°C";
    }
    else{
        result.textContent = "Select a unit";
    }
}
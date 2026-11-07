// Calculator Program

const display = document.getElementById("display");

// appendToDisplay(), calculate(), clearDisplay()

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = '';

}

// IMPORTANT NOTE: eval() allows you to execute a string of code as if it were actual JavaScript code.
// While it is a useful tool, it is a security risk. I would recommend using eval() ONLY for learning purposes and not any actual production code.

function calculate(){
    // eval() function takes in expression and solves them

    try{
        display.value = eval(display.value); 
    }

    catch(error){
        display.value = "Error";
    }
}
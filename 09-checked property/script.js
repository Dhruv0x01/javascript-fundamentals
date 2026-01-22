// .checked = property that determines the checked state of an 
//            HTML checkbox or radio button element

const checkBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const submitBtn = document.getElementById("mySubmitBtn");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");
const resetBtn = document.getElementById("myResetBtn");

submitBtn.onclick = function(){
    if(checkBox.checked){
        console.log("You are subscribed");
        subResult.textContent = "You are subscribed";
    }else{
        console.log("You are NOT subscribed");
        subResult.textContent = "You are NOT subscribed";
    }

    if(visaBtn.checked){
        console.log("You are paying with Visa");
        paymentResult.textContent = "You are paying with Visa";
    }else if(mastercardBtn.checked){
        console.log("You are paying with Master Card");
        paymentResult.textContent = "You are paying with Master Card";
    }else if(paypalBtn.checked){
        console.log("You are paying with Paypal");
        paymentResult.textContent = "You are paying with Paypal";
    }else{
        console.log("You must select a payment type");
        paymentResult.textContent = "You must select a payment type";
    }
}

resetBtn.onclick = function(){
    subResult.textContent = "";
    paymentResult.textContent = "";
    checkBox.checked = false;
    visaBtn.checked = false;
    mastercardBtn.checked = false;
    paypalBtn.checked = false;
}

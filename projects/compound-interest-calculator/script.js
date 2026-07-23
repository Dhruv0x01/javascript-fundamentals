



function calculate(){
    
    const totalAmount = document.getElementById("total-amount");
    const principalInput = document.getElementById("principal");
    const interestInput = document.getElementById("rate");
    const yearsInput = document.getElementById("years");

    let principal = Number(principalInput.value);
    let rate = Number(interestInput.value/100); // As it is percentage so 20% is 0.2
    let years = Number(yearsInput.value);


    if(principal < 0 || isNaN(principal)){
        principal = 0;
        principalInput.value = 0;
    }
    if(rate < 0 || isNaN(rate)){
        rate = 0;
        interestInput.value = 0;
    }
    if(years < 0 || isNaN(years)){
        years = 0;
        yearsInput.value = 0;
    }

    const result = principal*Math.pow((1 + (rate/1)), 1*years);

    totalAmount.textContent = result.toLocaleString('de-DE', {style: "currency", currency: "EUR"});
    //totalAmount.textContent = result.toLocaleString('hi-IN', {style: "currency", currency: "INR"});
    //totalAmount.textContent = result.toLocaleString('en-US', {style: "currency", currency: "USD"});

}
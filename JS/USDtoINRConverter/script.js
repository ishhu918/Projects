// #1. we will take user USD input value and assign this to a variable
// #2. create logic
// #3. assign the logic value into result box 

function convertCurrency(){
    let usdCurrencyEL = document.getElementById("usdCurrency").value;
    let changedEl= usdCurrencyEL*79.61;
    document.getElementById("inrCurrency").value = `${changedEl}`;
}
convertCurrency();
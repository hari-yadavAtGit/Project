function calculateTip(billAmount, tipPercentage) {
    // Write your code here 
    const tipAmount = billAmount * (tipPercentage / 100);
    const totalAmount = billAmount + tipAmount;
    return Number(totalAmount.toFixed(2))
}
console.log(calculateTip(761, 3));

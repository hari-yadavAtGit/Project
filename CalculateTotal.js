function calculateTotal(cart) {
    // Write your code here
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity;
    }
    return total;
}




const cart = [
  { name: "Fruits", price: 10, quantity: 5 },
  { name: "Vegetables", price: 8, quantity: 3 },
  { name: "Dairy", price: 5, quantity: 2 },
  { name: "Snacks", price: 3, quantity: 10 },
];

console.log(calculateTotal(cart))

// Do not modify the below lines
module.exports = { calculateTotal };
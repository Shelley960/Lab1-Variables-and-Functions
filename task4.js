let price = 100;
let quantity = 2;
let taxRate = 0.05;
let discount = 10;


function calculateTotalCost(price, quantity, taxRate, discount) {

    if (isNaN(price) || isNaN(quantity) || isNaN(taxRate)) {
        return "Please enter an item.";
    } else if (discount === "") {
    let totalCost = (price * quantity) * (1 + taxRate);
    return totalCost;
    } else {
    let totalCost = ((price * quantity) - discount) * (1 + taxRate);
    return totalCost;
}}

console.log(calculateTotalCost(price, quantity, taxRate, discount));
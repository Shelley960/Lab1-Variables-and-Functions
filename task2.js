let price = 100;
let quantity = 2;
let taxRate = 0.05;


function calculateTotalCost(price, quantity, taxRate) {

    if (isNaN(price) || isNaN(quantity) || isNaN(taxRate)) {
        return "Please enter an item.";
    }
    let totalCost = (price * quantity) * (1 + taxRate);
    return totalCost;
}

console.log(calculateTotalCost(price, quantity, taxRate));
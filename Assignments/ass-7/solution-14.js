/*14. Write a js program to input electricity unit charges and calculate total
electricity bill according to the given condition:
For the first 50 units Rs. 0.50/unit
For the next 100 units Rs. 0.75/unit
For the next 100 units Rs. 1.20/unit
For units above 250 Rs. 1.50/unit
An additional surcharge of 20% is added to the bill */

let units = parseInt(prompt("Enter the electricity units consumed:"));

let totalBill, surcharge;

if (units <= 50) {
    totalBill = units * 0.5;
} else if (units <= 100 && units > 50) {
    totalBill = 50 * 0.5 + (units - 50) * 0.75;
} else if (units <= 200 && units > 100) {
    totalBill = 50 * 0.5 + 100 * 0.75 + (units - 100) * 1.2;
} else {
    totalBill = 50 * 0.5 + 100 * 0.75 + 100 * 1.2 + (units - 200) * 1.5;
}

// Calculate the surcharge (20% of total bill)
surcharge = 0.2 * totalBill;

// adding tthe surcharge to the total bill
totalBill += surcharge;

console.log(`Total Electricity Bill: Rs. ${totalBill.toFixed(2)}`);

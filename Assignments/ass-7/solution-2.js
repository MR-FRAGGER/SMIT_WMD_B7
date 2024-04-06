//2. Write a js program to find the maximum between three numbers.

let num1 = parseInt(prompt("Enter the number 1:"));
let num2 = parseInt(prompt("Enter the number 2:"));
let num3 = parseInt(prompt("Enter the number 3:"));

// Check if the conversion was successful
if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {

    if (num1 > num2 && num1 > num3) {
        console.log(`${num1} is greater than ${num2} and ${num3}`); }
     else if (num2 > num3) {
        console.log(`${num2} is greater than ${num1} and ${num3}`); }
     else if (num3 > num1 && num3 > num2) {
        console.log(`${num3} is greater than ${num1} and ${num2}`); }
     else if (num1 === num2 || num1 === num3 || num2 === num3) {
        console.log(`Multiple numbers are equal. So, try again.`); }

} 

else {
    console.log(`Try to enter valid numbers.`);
}

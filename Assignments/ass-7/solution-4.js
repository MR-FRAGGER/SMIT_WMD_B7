/*4. Write a js program to check whether a number is divisible by 5 and 11 or
not.*/

let num1 = parseInt(prompt("Enter the number 1:"));


if (num1 % 5 === 0 && num1 % 11 === 0) {
    console.log(`${num1} is divisible by both 5 and 11.`); }
     else if (num1 % 5 === 0 && num1 % 11 !== 0) {
    console.log(`${num1} is divisible by 5 but not by 11.`); }
     else if (num1 % 11 === 0 && num1 % 5 !== 0) {
    console.log(`${num1} is divisible by 11 but not by 5.`);
} 

else {
    console.log(`${num1} is neither divisible by 5 nor by 11.`);
}

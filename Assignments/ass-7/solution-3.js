/*3. Write a js program to check whether a number is negative, positive or
zero.*/

let num1 = parseInt(prompt("Enter the number 1:"));

if (num1 === 0) {

    console.log(`${num1} is a zero number.`); }
     else if (num1 < 0) {
    console.log(`${num1} is a negative number.`);

}

else {
    console.log(`${num1} is a positive number.`);
}
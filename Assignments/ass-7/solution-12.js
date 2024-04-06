/*12. Write a js program to input marks of five subjects Physics, Chemistry,
Biology, Mathematics, and Computer. Calculate percentage and grade
according to the following:
Percentage >= 90% : Grade A
Percentage >= 80% : Grade B
Percentage >= 70% : Grade C
Percentage >= 60% : Grade D
Percentage >= 40% : Grade E
Percentage < 40% : Grade F
 */

let physics = parseInt(prompt("Enter marks obtained in Physics:"));
let chemistry = parseInt(prompt("Enter marks obtained in Chemistry:"));
let biology = parseInt(prompt("Enter marks obtained in Biology:"));
let mathematics = parseInt(prompt("Enter marks obtained in Mathematics:"));
let computer = parseInt(prompt("Enter marks obtained in Computer:"));

let totalMarks = physics + chemistry + biology + mathematics + computer;
let percentage = (totalMarks / 500) * 100;

let grade;

if (percentage <= 100 && percentage >=90) {
    grade = 'A';
} else if (percentage < 90 && percentage >=80) {
    grade = 'B';
} else if (percentage < 80 && percentage >=70) {
    grade = 'C';
} else if (percentage < 70 && percentage >=60) {
    grade = 'D';
} else if (percentage < 60 && percentage >=40) {
    grade = 'E';
} else {
    grade = 'F';
}

console.log(`Percentage: ${percentage.toFixed(2)}%`);
/*for calculateong the percentage with two decimal places using the {toFixed(2) method}. For example, 
if the percentage is 85.4321, toFixed(2) will round it to 85.43.*/
console.log(`Grade: ${grade}`);

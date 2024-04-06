/*13. Write a js program to input the basic salary of an employee and calculate
its Gross salary according to the following:
Basic Salary <= 10000 : HRA = 20%, DA = 80%
Basic Salary <= 20000 : HRA = 25%, DA = 90%
Basic Salary > 20000 : HRA = 30%, DA = 95% */

let basicSalary = parseInt(prompt("Enter the basic salary of the employee:"));

let hra, da;

// ddetermine HRA and DA based on basic salary
if (basicSalary <= 10000) {
    hra = 0.2 * basicSalary;
    da = 0.8 * basicSalary;
} else if (basicSalary <= 20000 && basicSalary > 10000) {
    hra = 0.25 * basicSalary;
    da = 0.9 * basicSalary;
} else {
    hra = 0.3 * basicSalary;
    da = 0.95 * basicSalary;
}

let grossSalary = basicSalary + hra + da;

console.log(`Gross Salary: ${grossSalary}`);

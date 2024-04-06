//6. Write a js program to check whether a year is leap year or not.

let year1 = parseInt(prompt(`enter the year.`));


if (year1 % 4===0){

    console.log(`${year1} is a leap year.`); }
else if (year1 % 100===0 && year1 % 400===0){
    console.log(`${year1} is a leap year.`); }
    else if (year1 % 400===0){
        console.log(`${year1} is a leap year.`);
    
    }

else {
    console.log(`${year1} is not a leap year.`);
}
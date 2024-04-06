/*10. Write a js program to input the month number and print the number of
days in that month. */

let monthNumber = parseInt(prompt("Enter the month number (1-12):"));

if (monthNumber >= 1 && monthNumber <= 12) {
    let monthDay;

    switch (monthNumber) {
        case 1:
            monthDay = "31";
            break;
        case 2:
            monthDay = "28 or 29";
            break;
        case 3:
            monthDay = "31";
            break;
        case 4:
            monthDay = "30";
            break;
        case 5:
            monthDay = "31";
            break;
        case 6:
            monthDay = "30";
            break;
        case 7:
            monthDay = "31";
            break;
        case 8:
            monthDay = "31";
            break;
        case 9:
            monthDay = "30";
            break;
        case 10:
            monthDay = "31";
            break;
        case 11:
            monthDay = "30";
            break;
        case 12:
            monthDay = "31";
            break;
        default:
            monthDay = "Invalid month number";
    }
    console.log(`The month number ${monthNumber} has ${monthDay} days.`);

} 

else {
    console.log("Invalid month number. Please enter a number between 1 and 12.");
}

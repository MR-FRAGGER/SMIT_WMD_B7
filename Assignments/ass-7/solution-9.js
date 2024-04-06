//9. Write a js program to input the week number and print weekday.

let weekNumber = parseInt(prompt("Enter the week number (1-7):"));

if (weekNumber >= 1 && weekNumber <= 7) {
    let weekday;
    // using switch statement to assign weekday based on week number
    switch (weekNumber) {
        case 1:
            weekday = "Monday";
            break;
        case 2:
            weekday = "Tuesday";
            break;
        case 3:
            weekday = "Wednesday";
            break;
        case 4:
            weekday = "Thursday";
            break;
        case 5:
            weekday = "Friday";
            break;
        case 6:
            weekday = "Saturday";
            break;
        case 7:
            weekday = "Sunday";
            break;
        default:
            weekday = "Invalid week number";
    }
    console.log(`Weekday for week number ${weekNumber} is ${weekday}.`);

} 

else {
    console.log(" Invalid week number. Please enter a number between 1 and 7.");
}

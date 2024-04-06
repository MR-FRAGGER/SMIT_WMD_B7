/*8. Write a js program to check whether a character is uppercase or
lowercase alphabet.*/

let character = prompt("Enter a character:");

if ( (character >= 'A' && character <= 'Z') || (character >= 'a' && character <= 'z') ) {
    if (character >= 'A' && character <= 'Z') {
          console.log(`${character} is an uppercase alphabet.`); }
         else {
        console.log(`${character} is a lowercase alphabet.`); 
    
    }

} 

else {
    console.log(`${character} is not an alphabet.`);
}

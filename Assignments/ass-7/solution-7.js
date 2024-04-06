/*7. Write a js program to input any alphabet and check whether it is vowel or
consonant.*/

let vowel = prompt("Enter a character:");

if (vowel === 'a' || vowel === 'A' || vowel === 'e' || vowel === 'E' ||
vowel === 'i' ||   vowel === 'I' || vowel === 'o' || vowel === 'O' ||
vowel === 'u' || vowel === 'U') 

{

    console.log(`${vowel} is a vowel.`);

}

else {
    console.log(`${vowel} is not a vowel.`);
}
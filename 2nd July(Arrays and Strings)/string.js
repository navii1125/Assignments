var prompt = require('prompt-sync')();

//reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("hello")); 

//check a palindrome
 function IsPalindrome(str) {
    let reverse = str.split('').reverse().join('')
    if(reverse==str)
    {
       return true
    }
    else {
        return false
    }
 }
 console.log(IsPalindrome("madam"))
 
 //Count Vowels

 function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("Javascript")); 

//capitalize

function CapitalizeWords(str) {
    let cap = str[0].toUpperCase() + str.slice(1,6) + str[6].toUpperCase() + str.slice(7)
    return cap
}

console.log(CapitalizeWords("hello world"))

//charFrequency

function charFreq(str) {
    let obj={}
    let char;
    for(i=0; i<str.length; i++) {
       char = str[i]
       if(obj[char]) {
        obj[char]++;
       }
       else{
        obj[char] = 1
       }
    }
    return obj
}
console.log(charFreq("Heellooo"))
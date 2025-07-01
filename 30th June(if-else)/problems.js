var prompt = require('prompt-sync')();

//even and odd
let num=prompt("enter a number: ")
num= parseInt(num)
if(num%2==0){
    console.log(num,  "is even!")
}
else{
    console.log(num, " is odd!")
}
//positive, negative, or zero
let num1=prompt("Enter the number: ")
num1= parseInt(num1)
if(num1>0) {
    console.log(num1, "is postive")
}
else if(num1<0) {5

    console.log(num1, "is negative")
}
else {
    console.log("number is zero")
}
//greater between two numbers
let a = prompt("Enter number 1: ")
let b= prompt("Enter number 2: ")
if(a>b) {
    console.log(a,"is greater than", b)
}
else{
    console.log(b,"is greater than", a)
}
//divisible by 3
let n = prompt("Enter a number: ")
if(n%3==0) {
    console.log(n, "is divisible by 3")
}
else{
    console.log(n, "is not divisible by 3")
}
//multiple of 7
let n1 = prompt("Enter a number: ")
if(n1%7==0) {
    console.log(n1, "is multiple of 7")
}
else{
    console.log(n1, "is not  multiple of 7")
}
// //vowel or consonant
let word=prompt("enter a letter: ")
if(word=='a' || word=='e' || word =='i' || word =='o' || word=='u') {
    console.log("letter is a vowel")
}
else{
        console.log("letter is a consonant")

}
//number between 10 to 50
let n2= prompt("Enter a number: ")
if(n2>=10 && n2<=50) {
    console.log(n2,"lies between 10 and 50")
}
else{
    console.log(n2, "does not lie between 10 to 50")
}
// three digit number
let num4 = 123; 

if (num4 >= 100 && num4 <= 999) {
  console.log(num4 + " is a 3-digit number");
} else {
  console.log(num4 + " is NOT a 3-digit number");
}
//vote eligibility
let age=prompt("Enter the age: ")
if(age>=18){
    console.log("Eligible to vote")
} else{
    console.log("Not eligible to vote")
}
// //temperature
let temp=prompt("Enter the temperature in degrees: ")
if(temp>30)
{
    console.log("Temperature is hot")
}
else if(temp>15 && temp<30){
 console.log("Temperature is moderate")
}
else{
     console.log("Temperature is cold")
}
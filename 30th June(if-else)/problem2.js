var prompt = require('prompt-sync')();
//greatest between three numbers
let a=prompt("Enter a number:")
let b=prompt("Enter a number:")
let c=prompt("Enter a number:")
if(a>b && a>c) {
    console.log(a, "is the greatest number")
}
else if(c>a && c>b) {
        console.log(c, "is the greatest number")

}
else{
    console.log(b, " is the greatest number")

}
//leapyear
let year=prompt("Enter a year: ")
if((year%4==0 && year%100!=0) || year%400==0) {
    console.log(year, "is a leap year")
}
else{
    console.log(year, "is not a leap year")
}
// lower case, digit, uppercase
let char=prompt("Enter a character: ")
if(char>='A' && char<='Z') {
    console.log("Uppercase")
}
else if(char>='a' && char<='z') {
        console.log("lowercase")

}
else if(char>='0' && char<='9'){
        console.log("digit")

}
else{
    console.log("special character")
}
// //grades
let marks=prompt("Enter the marks of the student out of 100: ")
if(marks>=90) {
    console.log("Grade:A")
}

else if(marks>=75 && marks <90
)
{
        console.log("Grade:B")

}
else if(marks>=60 && marks <75)
{
        console.log("Grade:C")

}
else if(marks>=40 && marks <60)
{
        console.log("Grade:D")

}
else{
    console.log("Grade:F")
}
//days of the weak
let day= prompt("Enter the day: ")
if(day==1){
    console.log("Monday")
}
else if(day==2)
{
    console.log("Tuesday")

}
else if(day==3)
{
    console.log("Wednesday")

}
else if(day==4)
{
    console.log("Thursday")

}
else if(day==5)
{
    console.log("Friday")

}
else if(day==6)
{
    console.log("Saturday")

}
else{
        console.log("Saturday")

}
//number divisible by 5 and 11 both
let num=prompt("Enter a number: ")
if(num%5==0 && num%11==0) {
    console.log(num, "is divisible by 5 and 11")
}
else{
    console.log(num, "is not divisible by 5 and 11 both")
}
//prime number
let no= parseInt(prompt("enter a number of your choice: "))
if (no<2) {
    console.log(num, "is not a prime number")
} else{
    let count=0
    for(i=2; i<=num; i++)
    {
if(num%i===0)
    count++
    } }
if (count===0) {
    console,log("prime number")
}
else{console.log("not a prime number")}


//drivers license
let age=prompt("Enter the age of the candidate: ")
if(age>=18) {
    console.log("The candidate is eligible to get a drivers license")
}
else{
        console.log("The candidate is not eligible to get a drivers license")

}
//equal or greater
let num1=prompt("enter num1: ")
let num2=prompt("enter num2: ")
if(num1==num2) {
    console.log("Numbers are equal. Hence, cannot be compared")
}
else{
    if(num1>num2) {
        console.log(num1, "is greater than", num2)
    }
    else{
             console.log(num2, "is greater than", num1)
   
    }
}
//even and odd, positive and neagative
let n=prompt("Enter a number: ")
if(n>0 && n%2==0){
    console.log("number is positive and even")}
    else{
        console.log("number is positive and odd")
    }
    if(n<0 && n%2==0)
    {
        console.log("number is negative and even")
    }
    else{
                console.log("number is negative and odd")

    }

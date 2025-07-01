var prompt = require('prompt-sync')();

//result
console.log("enter your marks in the 5 subjects: ")
let m1= prompt("Enter marks: ")
let m2= prompt("Enter marks: ")
let m3= prompt("Enter marks: ")
let m4= prompt("Enter marks: ")
let m5= prompt("Enter marks: ")
let avg= m1+m2+m3+m4+m5/5
if(avg>=90) {
    console.log("Grade:A")
}

else if(avg>=75 && avg <90
)
{
        console.log("Grade:B")

}
else if(avg>=60 && avg <75)
{
        console.log("Grade:C")

}
else if(avg>=40 && avg<60)
{
        console.log("Grade:D")

}
else{
    console.log("Grade:F")
}
//divisible by either 3 or 5 but not both
let num3=prompt("Enter a number: ")
if((num3%5==0 || num3%3==0) && num3%15!=0) {
    console.log(num3, "is divisible by 3 or 5")
}
else{
    console.log(num3, "is not divisible by 5 and 3 ")
}
palindrome number
let num = 121;
let original = num;
let reverse = 0;

while (num > 0) {
  let digit = num % 10
    reverse = reverse * 10 + digit;
 
}

if (original === reverse) {
  console.log(original + " is a palindrome number");
} else {
  console.log(original + " is NOT a palindrome number");
}
check if the sum of the digits of a number is even or odd
let k=145
let sum=0
let digit=0
let num =k
while(num>0) {
digit=parseInt(num%10)
sum=sum+digit
num=parseInt(num/10)

}
console.log(sum)
if(sum%2===0) {
    console.log(sum, "is even")
}
else {
    console.log(sum, "is odd")
}
//overtime pay
let hoursWorked = 45; 
let overtimePay = 0;

if (hoursWorked > 40) {
  let overtimeHours = hoursWorked - 40;
  overtimePay = overtimeHours * 12;
  console.log("Overtime hours:", overtimeHours);
  console.log("Overtime pay: Rs.", overtimePay);
} else {
  console.log("No overtime. Total hours:", hoursWorked);
}
//salary
let basic = 9000; 
let hra, da, netSalary;

if (basic < 10000) {
  hra = 0.20 * basic;
  da = 0.50 * basic;
} else {
  hra = 0.30 * basic;
  da = 0.80 * basic;
}

netSalary = basic + hra + da;

console.log("Basic Salary: Rs.", basic);
console.log("HRA: Rs.", hra);
console.log("DA: Rs.", da);
console.log("Net Salary: Rs.", netSalary);
//days of a month
let month = 2; 

if (month === 1 || month === 3 || month === 5 || month === 7 || 
    month === 8 || month === 10 || month === 12) {
  console.log("Month", month, "has 31 days");
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
  console.log("Month", month, "has 30 days");
} else if (month === 2) {
  console.log("Month 2 has 28 or 29 days (leap year check needed)");
} else {
  console.log("Invalid month number. Please enter 1 to 12.");
}
//password
let pass = prompt("Enter the password: ")


let hasDigit = 0;
let hasSpecial = 0;
let length = password.length;

for (let i = 0; i < length; i++) {
  let ch = password[i];

  // Check if character is a digit
  if (ch >= '0' && ch <= '9') {
    hasDigit = 1;
  }

  // Check for special characters manually
  if (ch === '@' || ch === '#' || ch === '!' || ch === '$') {
    hasSpecial = 1;
  }
}

// Final condition
if (length >= 8 && hasDigit === 1 && hasSpecial === 1) {
  console.log("Password is strong");
} else {
  console.log("Password is weak");
}
//triangle
let s1 =55
let s2=65
let s3=60
if(s1===s2 && s2===s3 && s1===s3) {
    console.log("equilateral")
} else if (s1!=s2&&s2!=s3 && s1!=s3){
    console.log("scalene")
}
else{
    console.log("isosceles")
}

//login system
let storedname="navita"
let storedpass="navi123"
let name=prompt("enter name: ")
let pass = prompt("enter pass: ")
if(storedname==name && storedpass==pass) {
    console.log("matched")
}
else{
    console.log("not matched")
}
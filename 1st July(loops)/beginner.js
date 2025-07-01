var prompt = require('prompt-sync')();
//loop basics
//print 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
//print down 10 to 1
let i = 10;
while (i >= 1) {
  console.log(i);
  i--;
}
//print 1 to 5
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 5);
//Even, Odd Multiples
//Even numbers 1 to 50
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) console.log(i);
}
//odd numbers 20 to 50
for (let i = 20; i <= 50; i++) {
  if (i % 2 !== 0) console.log(i);
}
//numbers divisible by 3 from 1 to 30
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0) console.log(i);
}

//summation and product
//sum 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) 
    {sum += i;
console.log(sum);}
//product 1 to 10
let product = 1;
for (let i = 1; i <= 10; i++) {product *= i;
console.log(product);}
//sum of even numbers 1 to 50
let sumEven = 0;
for (let i = 2; i <= 50; i += 2) {sumEven += i;
console.log(sumEven);}
//sum of sqaures 1 to 10
let sumSquares = 0;
for (let i = 1; i <= 10; i++) 
 {sumSquares += i * i;
console.log(sumSquares);}


//conditionals inside loops
//skip multiples of 4
for (let i = 1; i <= 20; i++) {
  if (i % 4 === 0) continue;
  console.log(i);
}
//stop at 7
for (let i = 1; i <= 10; i++) {
  if (i === 7) break;
  console.log(i);
}
//count numbers divisible by both 3 and5
let count = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) count++;
}
console.log(count);


//nested loops no patterns



//logic based taskss

//prime number check

let num = 17;
let isPrime = 1;
if (num < 2) isPrime = 0;
for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    isPrime = 0;
    break;
  }
}
console.log(isPrime ? "Prime" : "Not prime");
//factorial of a number
let n = 6;
let fact = 1;
for (let i = 1; i <= n; i++) fact *= i;
console.log(fact);
//reverse a number
let n1 = 123;
let rev = 0;
while (n1 > 0) {
  let d = n1 % 10;
  rev = rev * 10 + d;
  n1 = parseInt(n1 / 10);
}
console.log(rev);

//counts digits in a number
let num2 = 12345;
let digitCount = 0;
while (num2 > 0) {
  digitCount++;
  num2 = parseInt(num2 / 10);
}
console.log(digitCount);
//palindrome
let original = 121;
let copy = original;
let reverse = 0;

while (copy > 0) {
  let d = copy % 10;
  reverse = reverse * 10 + d;
  copy = Math.floor(copy / 10);
}

if (original === reverse) {
  console.log("Palindrome");
} else {
  console.log("Not palindrome");
}



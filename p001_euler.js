/** https://projecteuler.net/problem=1
 * solution in Javascript
 * ian.leiman@gmail.com
 * 
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
 * The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 * 
 * execute this on command line if you have node installed
 * node .\p001_euler.js
 * 
 * Answer:  233168
 */
console.log("Solving project Euler problem #001 using several algorithms");
console.time("1");

// here is algorithm #1, using brute force loop
// would not scale well if target much bigger than 1000
let iSum = 0;
const target = 1000;
for (let i = 1; i < target; i++)  if ((i % 3) === 0 || (i % 5) === 0) iSum += i;
console.log("result from algorithm 1: " + iSum);
console.timeEnd("1");

// here is algorithm #2, using Javascript array functions in brute force
// also not very scalable as it wastes resources in a massive way
console.time("2");
var nums = [...Array(1000).keys()];
var nm = nums.map(a => (a % 3 == 0 || a % 5 == 0) ? a : 0);
var sum = nm.reduce((a ,b) => a + b, 0);
console.log("result from algorithm 2: " + sum);
console.timeEnd("2");

// here is algorithm #3, one liner way to write #2
console.time("3");
var sol = [...Array(1000).keys()].map(a => (a % 3 == 0 || a % 5 == 0) ? a : 0).reduce((a ,b) => a + b, 0);
console.log("result from algorithm 3: " + sol);
console.timeEnd("3");

/** note that the above would be in Python a one-liner
 * print(sum(map(lambda a: a if (a % 3 == 0 or a % 5 == 0) else 0, range(0, 1000))))
 */

// here is algorithm #4, using mathematical solution
// this is generic and scales well
console.time("4");
 var x = 999;
 var a = 3;
 var b = 5;
 
 function summa (a, x) {
     var b = Math.floor(x/a);
     return a * (b+1) * b / 2;
 }
 
 var sum_abx = summa(a,x) + summa(b,x) - summa(a*b,x);
 console.log("result from algorithm 4: " + sum_abx);
 console.timeEnd("4");




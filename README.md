# Project Euler example solutions
https://projecteuler.net/ 

According to rules, the problems below 100 may be published, but the rest may not. These are provided as an example how to solve and present solutions in a somewhat nice way.
## Javascript solutions
You can easily run all of these on a computer that has Node.js installed.
The results will print to the console.

You could also run these on a browser.

### Problem #001
https://projecteuler.net/problem=1

source: https://github.com/eianlei/2022-euler/blob/master/p001_euler.js 

Four solutions are provided:
1. Simple brute force loop
2. Javascript array functions in brute force manner
3. Same as previous, but a one-liner
4. Mathematical solution

The first 3 would not scale well if the target would be a huge number, but with 1000 it is a quick run on a modern computer. The last solution would scale well to huge numbers, but with 1000 you see no big difference as the computation itself takes CPU cycles.

Comparison using my own computer and Node.js:
| algorithm | ms |
| --- | --- |
| 1 | 0.3 |
| 2 | 1.0 |
| 3 | 0.3 |
| 4 | 0.16 |



### Problem #002
https://projecteuler.net/problem=2

Source: https://github.com/eianlei/2022-euler/blob/master/p002_euler.js 

Following solutions are provided:
1. Simple brute force loop through entire fibonacci sequence
2. with some math, we see that every 3rd fibonacci number is even, skip the odd values then, this reduces the loop iterations by 1/3
3. with more math we can prove that F(n) = 4*F(n-3)+F(n-6), so we can do quicker iteration

Comparison:
| algorithm | ms |
| --- | --- |
| 1 | 0.28 |
| 2 | 0.14 |
| 3 | 0.13 |

We can see that improving the algorithm di not bring that much benefit as the target was not big enough to notice the difference. Only with a much bigger target we would see a bigger difference.
### Problem #025
https://projecteuler.net/problem=25

Source: https://github.com/eianlei/2022-euler/blob/master/p025_euler.js 

The first solutions rely on JavaScript BigInt data type, which is fairly recent addition. Before BigIn it would have been much nastier to 

Following solutions are provided:
1. Simple brute force loop, but doing a stupid and ridiculous string conversion (don't do that :-) 
2. Same as previous, but just comparing BigInt numbers
3. Solving a mathematical formula, using some deeper mathematical knowledge about Fibonacci sequence and Golden Ratio.

Comparison:
| algorithm | ms |
| --- | --- |
| 1 | 81 |
| 2 | 0.7 |
| 3 | 0.17 |

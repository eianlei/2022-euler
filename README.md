# Project Euler example solutions
This repo contains some example solutions to Project Euler problems.
https://projecteuler.net/ 

According to rules, the problems below 100 may be published, but the rest may not. Problems from 1 to 99 are often very easy to solve, sometimes with just a one-liner.

These solutions are provided as an example how to solve and present Project Euler solutions in a somewhat nice way but without using any build tools. All of the sources here can be run from command line using node, python or java commands. As code editor I have used VS Code myself, you can install it for free from https://code.visualstudio.com/download.

Solutions are provided with following languages, which are among the most popular in 2022:
- Javascript
- Python
- Java

# Tools
As code editor I have used VS Code myself, you can install it to Windows, Mac or Linux for free from https://code.visualstudio.com/download.
Using VS code you can do integrated version control with git and sync your repo to github with ease. There are also online "fiddle" tools, which allow testing code on web browser without installing anything.

To run your code you can install following command line tools:
- Javascript: https://nodejs.org/en/download/ 
    - note that you can run JS also in browser: https://developer.chrome.com/docs/devtools/console/javascript/
    - online using JS Fiddle tools such as: https://jsfiddle.net/ 
- Python: https://www.python.org/downloads/
    - note that most Linux distros include Python pre-built
    - online: http://pythonfiddle.com/
- Java: https://www.java.com/en/download/help/download_options.html
    - online: https://www.mycompiler.io/online-java-compiler

For a more ambitious presentation you can use a build tool and unit test framework. For example:
- Javascript: Jest, Mocha, Jasmine
- Python: PyTest
- Java: Maven and Junit

## list of problems and solution
Number of different solutions in different languages.

| problem | JS | Python | Java | complexity |
| --- | --- | --- | --- | --- |
| 001 | 4 | 1 | 1 | one-liner |
| 002 | 3 | 0 | 0 | simple |
| 025 | 3 | 0 | 0 | one-liner |
| 062 | 2 | 3 | 0 | medium-hard |

## Javascript solutions
Javascript is an easy language to work with as you can run it on a web browser with very little tools. 
You can easily run Javascript on a computer command line too when you install Node.js. See https://nodejs.org/en/ 

The results from these code examples will print to the console. console.time is used to see performance of each algorithm.
Example:
```
> node .\p025_euler.js

Solving project Euler problem #025 using several algorithms
result from algorithm 1: 4782
1: 81.258ms
result from algorithm 2: 4782
2: 0.723ms
result from algorithm 3: 4782
3: 0.172ms
```

You could also run these on a browser, for example: 

https://eianlei.github.io/2022-euler/index.html 

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

We can see that improving the algorithm did not bring that much benefit as the target was not big enough to notice the difference. Only with a much bigger target we would see a bigger difference.
### Problem #025
https://projecteuler.net/problem=25

Source: https://github.com/eianlei/2022-euler/blob/master/p025_euler.js 

The first solutions rely on JavaScript BigInt data type, which is fairly recent addition. Before BigInt it would have been much nastier to implement the brute force solution. 

Following solutions are provided:
1. Simple brute force loop, but doing a stupid and ridiculous string conversion (don't do that :-) 
2. Same as previous, but just comparing BigInt numbers
3. Solving a mathematical formula, using some deeper mathematical knowledge about Fibonacci sequence and Golden Ratio.

The first solution is to show how wasteful it is to play with string conversion here for no good reason. The last one shows that if you find a nice mathematical solution, then it would be much more efficient than using brute force. 

Comparison:
| algorithm | ms |
| --- | --- |
| 1 | 81 |
| 2 | 0.7 |
| 3 | 0.17 |

### Problem #062
https://projecteuler.net/problem=62

Source: https://github.com/eianlei/2022-euler/blob/master/p062_euler.js 

Compared to the trivial problems 1, 2, 25, the 62 already requires more thinking and even the best solution takes significant amount of CPU cycles, and a bad one could easily be 100x slower than needs to be.

In first solution p062_alg1() just start creating list of cubes, and then for each cube a signature of the decimal digit distribution using distSig(). Then sort the list(s) and find out sublists with matching signatures. The function here can be tweaked to study the numerology deeper, for different digit count cubes and for different amount of digit permutations so it is bit more complex than it needs to be. Still it runs pretty fast, but that is thanks to skipping the first 4642 roots after running the function with different arguments first (AKA cheating :-).

The second solution p0062_alg2() is a bit of brute force. Create a sorted digit string of each cube, then using this as a key create associative array (like Python Dict) for each key and push the root to the array. Once you get such an array with 5 elements you have found the solution. It is not much slower than p062_alg1(), mostly slowed by the associative array lookups that can be a bit expensive operations. But the code is pretty simple. You could make this run quicker by skipping the first 4642 roots that are waste fo time, if you would know that to be the case by some pre study of the numerology.

Comparison:
| algorithm | ms |
| --- | --- |
| 1 | 18 |
| 2 | 24 |

## Python solutions
Python is a very easy language to work with. If you have installed Python (3.8 or newer), then execute the code simply by:

    > python .\p001_euler.py

    Euler problem #001 solution
    233168
### Problem #001
Source: https://github.com/eianlei/2022-euler/blob/master/p001_euler.py

This is a one-liner version of the corresponding Javascript algorithm 3, which is also a one-liner. This shows how expressive Python can be, at the expense of not being so readable though.

    print(sum(map(lambda a: a if (a % 3 == 0 or a % 5 == 0) else 0, range(0, 1000))))
    
### Problem #062
https://projecteuler.net/problem=62

Source: https://github.com/eianlei/2022-euler/blob/master/p062_euler.py 

find() is essentially the same algorithm as JavaScript solution p0062_alg2(), now using Python dict {}. It runs 3x faster in Pythoin than in JS.
The 2nd loop does basically the same by a less efficient way and runs 2x slower. 3rd loop manages to do the same almost 100x slower.

Comparison:
| algorithm | ms |
| --- | --- |
| 1 | 8 |
| 2 | 13 |
| 3 | 362 |
    
## JAVA solutions
Single source file java code can also be very easy to work with. Just install java environment and:

    > java .\p001_euler.java

    Euler problem #001 solution
    result from algorithm 1: 233168
### Problem #001
Source: https://github.com/eianlei/2022-euler/blob/master/p001_euler.java

This is basically the same code as corresponding Javascript algorithm 1. The core of the code is really just that one line of a for loop with if-statement, and looks exactly the same in java and javascript. Only the java boilerplate, declaration and output statements differ.




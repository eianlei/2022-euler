#/** https://projecteuler.net/problem=1
#  * solution in Python 3.8
#  * ian.leiman@gmail.com
#  * 
#  * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
#  * The sum of these multiples is 23.
#  * Find the sum of all the multiples of 3 or 5 below 1000.
#  * 
#  * execute this on command line if you have installed python 3.8
#  * python .\p001_euler.py
#  * 
#  * Answer:  233168
#
print("Euler problem #001 solution")
print(sum(map(lambda a: a if (a % 3 == 0 or a % 5 == 0) else 0, range(0, 1000))))

/** https://projecteuler.net/problem=1
 * solution in Java
 * ian.leiman@gmail.com
 * 
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
 * The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 * 
 * if java is installed, then run by:
 * java .\p001_euler.java
 * 
 * Answer:  233168
 */
class p001 {
    public static void main(String args[]) {
        System.out.println("Euler problem #001 solution");
        int i, iSum = 0;
        int target = 1000;
        for (i = 1; i < target; i++)  if ((i % 3) == 0 || (i % 5) == 0) iSum += i;
        System.out.println("result from algorithm 1: " + iSum);
        
    }
}
/*
 * @name: Sum square difference
 * @id:   0006
 * @url:  https://projecteuler.net/problem=6
 *
 * @problem:
 *   The sum of the squares of the first ten natural numbers is,
 *         1^2 + 2^2 + ... + 10^2 = 385
 *   The square of the sum of the first ten natural numbers is,
 *         (1 + 2 +...+ 10)^2 = 55^2 = 3025
 *   Hence the difference between the sum of the squares of the first ten natural numbers
 *   and the square of the sum is 3025-385 = 2640.
 *
 *   Find the difference between the sum of the squares of the first one hundred natural
 *   numbers and the square of the sum.
 *
 * @solution: 25164150
 */

let sumOfTheSquares = 0;
let squareOfTheSum = 0;

for (let i=1; i<=100; i++) {
    sumOfTheSquares += Math.pow(i, 2);
    squareOfTheSum += i;
}

squareOfTheSum = Math.pow(squareOfTheSum, 2);

console.log(`The solution is: ${squareOfTheSum - sumOfTheSquares}`);

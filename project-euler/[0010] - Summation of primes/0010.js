/*
 * @name: Summation of primes
 * @id:   0010
 * @url:  https://projecteuler.net/problem=10
 *
 * @problem:
 *   The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 *
 *   Find the sum of all the primes below two million.
 *
 * @solution: 142913828922
 */

const utils = require('../../utils');

let sum = 0;

for (let i=0; i<2000000; i++)
    if (utils.isPrime(i))
        sum += i;

console.log(`The solution is: ${sum}`);

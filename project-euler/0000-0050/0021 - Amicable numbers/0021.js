/*
 * @name: Amicable numbers
 * @id:   0021
 * @url:  https://projecteuler.net/problem=21
 *
 * @problem:
 *   Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
 *   If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.
 *
 *   For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284.
 *   The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.
 *
 *   Evaluate the sum of all the amicable numbers under 10000.
 *
 * @solution: 31626
 */

const utils = require('../../../libs/utils');

function combinations(input) {
  const res = [];
  const nb = Math.pow(2, input.length);
  for (const i of range(0, nb - 1)) {
    const combi = [];
    for (const j of range(0, input.length - 1)) {
      if ((i & Math.pow(2, j))) {
        combi.push(input[j]);
      }
    }
    res.push(combi);
  }
  return res;
}

function proper_divisors(num) {
  const res = new Set();
  for (const combi of combinations(utils.primeFactors(num))) { res.add(combi.reduce((res, num) => res * num, 1)); }
  res.delete(num);
  return [...res];
}

function divisors(nb) {
  const res = new Set();
  for (const combi of combinations(primeFactors(nb))) { res.add(combi.reduce((res, nb) => res * nb, 1)); }
  return [...res];
}

const solution = '';

console.log(utils.primeFactors(220));

console.log(`The solution is: ${solution}`);

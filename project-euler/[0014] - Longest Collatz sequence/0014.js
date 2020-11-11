/*
 * @name: Longest Collatz sequence
 * @id:   0014
 * @url:  https://projecteuler.net/problem=14
 *
 * @problem:
 *   The following iterative sequence is defined for the set of positive integers:
 *
 *       n → n/2 (n is even)
 *       n → 3n + 1 (n is odd)
 *
 *   Using the rule above and starting with 13, we generate the following sequence:
 *
 *       13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
 *
 *   It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms.
 *   Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
 *   Which starting number, under one million, produces the longest chain?
 *
 *   NOTE: Once the chain starts the terms are allowed to go above one million.
 *
 * @solution: 837799
 */

const utils = require('../../utils');

let max = 0;
let solution = 0;

for (let i=1000000; i>1; i--) {
    let sequence = utils.getCollatzSequence(i);

    if (sequence.length > max) {
        max = sequence.length
        solution = i;
    }
}

console.log(`The solution is: ${solution}`);

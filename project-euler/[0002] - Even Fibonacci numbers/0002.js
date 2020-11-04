/*
 * @name: Even Fibonacci numbers
 * @id:   0002
 * @url:  https://projecteuler.net/problem=2
 *
 * @problem:
 *   Each new term in the Fibonacci sequence is generated by adding the previous two terms.
 *   By starting with 1 and 2, the first 10 terms will be:
 *
 *   1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 *
 *   By considering the terms in the Fibonacci sequence whose values do not exceed four
 *   million, find the sum of the even-valued terms.
 *
 * @solution: 4613732
 */

let first = 0;
let second = 1;
let sum = 0;
let result = 0;

while ((first + second) < 4000000) {
    result = first + second;
    first = second;
    second = result;

    if (result % 2 === 0)
        sum += result;
}

console.log(`The solution is: ${sum}`);
/*
 * @name: Largest prime factor
 * @id:   0003
 * @url:  https://projecteuler.net/problem=3
 *
 * @problem:
 *   The prime factors of 13195 are 5, 7, 13 and 29.
 *   What is the largest prime factor of the number 600851475143 ?
 *
 * @solution: 6857
 */

const TARGET = 600851475143;
let maxPrimeFactor;

function primeFactors(num) {
    /*
     * Return an array with all prime factors of a given number num
     *
     * @param {number} num - The number you want to calculate all prime factors
     * @return {array} The array of all prime factors
     */
    const primeList = [];

    while (num % 2 === 0) {
        primeList.push(2);
        num /= 2;
    }

    // at this point, num MUST be odd
    for (let i=3; i<(Math.sqrt(num) + 1); i=i+2) {
        while (num % i === 0) {
            primeList.push(i);
            num /= i;
        }
    }

    if (num > 2)
        primeList.push(num);

    return primeList;
}

maxPrimeFactor = Math.max(...primeFactors(TARGET));

console.log(`The solution is: ${maxPrimeFactor}`);

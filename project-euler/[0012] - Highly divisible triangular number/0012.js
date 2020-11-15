/*
 * @name: Highly divisible triangular number
 * @id:   0012
 * @url:  https://projecteuler.net/problem=12
 *
 * @problem:
 *   The sequence of triangle numbers is generated by adding the natural numbers.
 *   So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28.
 *   The first ten terms would be:
 *
 *       1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...
 *
 *   Let us list the factors of the first seven triangle numbers:
 *
 *       1: 1
 *       3: 1,3
 *       6: 1,2,3,6
 *      10: 1,2,5,10
 *      15: 1,3,5,15
 *      21: 1,3,7,21
 *      28: 1,2,4,7,14,28
 *
 *   We can see that 28 is the first triangle number to have over five divisors.
 *   What is the value of the first triangle number to have over five hundred divisors?
 *
 * @solution: 76576500
 */

import { isPrime } from "../../utils.js";

export default function problem0012() {
    const TARGET = 500;
    const primeNumbers = [];

    for (let i = 1; i <= TARGET; i++)
        if (isPrime(i))
            primeNumbers.push(i);

    let previousTriangularNumber = 1, i = 2, triangularNumber = 0;

    while (true) {
        triangularNumber = previousTriangularNumber + i++;
        const limit = Math.sqrt(triangularNumber);

        let numberOfFactors = 1;
        let current = triangularNumber;

        previousTriangularNumber = triangularNumber;

        for (let prime of primeNumbers) {
            if (prime > limit)
                break;

            let powerOfPrime = 0;
            while (current % prime === 0 && prime !== 1) {
                current /= prime;
                powerOfPrime++;
            }

            numberOfFactors *= (powerOfPrime + 1);
        }

        if (numberOfFactors >= 500)
            break;
    }

    return triangularNumber;
}

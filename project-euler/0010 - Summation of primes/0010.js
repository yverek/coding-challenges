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

import { isPrime } from "../../utils.js";

export default function problem0010() {
    const TARGET = 2000000;
    let i, sum = 0;

    for (i=0; i<TARGET; i++)
        if (isPrime(i))
            sum += i;

    return sum;
}

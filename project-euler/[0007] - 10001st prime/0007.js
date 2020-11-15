/*
 * @name: 10001st prime
 * @id:   0007
 * @url:  https://projecteuler.net/problem=7
 *
 * @problem:
 *   By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 *   What is the 10 001st prime number?
 *
 * @solution: 104743
 */

import { isPrime } from "../../utils.js";

export default function problem0007() {
    const TARGET = 10001;
    let number = 2, i = 0;

    while (i !== TARGET) {
        if (isPrime(number))
            i++;

        if (i === TARGET)
            break;

        number++;
    }

    return number;
}

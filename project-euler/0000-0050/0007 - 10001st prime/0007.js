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

import { isPrime } from "../../../libs/utils.js";

export default function problem0007() {
    const TARGET = 10001;
    let i = 0, number = 2;

    while (i < TARGET) {
        if (isPrime(number++))
            i++;

        if (i === TARGET)
            number--;
    }

    return number;
}

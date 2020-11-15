/*
 * @name: Factorial digit sum
 * @id:   0020
 * @url:  https://projecteuler.net/problem=20
 *
 * @problem:
 *   n! means n x (n - 1) x ... x 3 x 2 x 1
 *
 *   For example, 10! = 10 x 9 x ... x 3 x 2 x 1 = 3628800,
 *   and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
 *
 *   Find the sum of the digits in the number 100!
 *
 * @solution: 648
 */

import { factorial, getSum } from "../../../utils.js";

export default function problem0020() {
    let solution =
        factorial(100).toLocaleString()
            .slice(0, -1) // remove the 'n' of BigInt at the end
            .replace(/[0.]/g, '') // remove 0s and dots
            .split('') // create an array with every digits
            .map(x => +x) // convert every digits from string to number using '+' sign

    return getSum(...solution);
}

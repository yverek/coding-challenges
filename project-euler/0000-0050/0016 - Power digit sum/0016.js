/*
 * @name: Power digit sum
 * @id:   0016
 * @url:  https://projecteuler.net/problem=16
 *
 * @problem:
 *   2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
 *
 *   What is the sum of the digits of the number 2^1000?
 *
 * @solution: 1366
 */

import { getSum } from "../../../utils.js";

export default function problem0016() {
    const TARGET = 1000;
    let i, j, number = [1];

    for (i = 0; i < TARGET; i++) {
        let overflow = 0, count = number.length + 1;

        for (j = 0; j < count; j++) {
            let digit = number[j] || 0;

            digit = 2 * digit + overflow;

            if (digit > 9) {
                digit -= 10;
                overflow = 1;
            } else
                overflow = 0;

            number[j] = digit;
        }
    }

    return getSum(...number);
}

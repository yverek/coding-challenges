/*
 * @name: Special Pythagorean triplet
 * @id:   0009
 * @url:  https://projecteuler.net/problem=9
 *
 * @problem:
 *   A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
 *
 *       a^2 + b^2 = c^2
 *
 *   For example, 3^2 + 4^2 = 9 + 16 = 25 = 52.
 *   There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 *   Find the product abc.
 *
 * @solution: 31875000
 */

import { getProduct } from "../../../utils.js";

export default function problem0009() {
    let a, b, product;

    for (a = 0; a < 1000; a++) {
        for (b = 1; b < 1000; b++) {
            const c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

            if ((a + b + c) === 1000)
                product = getProduct(a, b, c);
        }
    }

    return product;
}

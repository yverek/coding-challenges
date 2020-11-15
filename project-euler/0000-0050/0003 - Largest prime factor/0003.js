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

import { primeFactors } from '../../../utils.js';

export default function problem0003() {
    const TARGET = 600851475143;

    return Math.max(...primeFactors(TARGET));
}

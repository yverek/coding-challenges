/*
 * @name: Largest palindrome product
 * @id:   0004
 * @url:  https://projecteuler.net/problem=4
 *
 * @problem:
 *   A palindromic number reads the same both ways.
 *   The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 *
 *   Find the largest palindrome made from the product of two 3-digit numbers.
 *
 * @solution: 906609
 */

import { findMaxPalindromeProduct } from "../../../libs/utils.js";

export default function problem0004() {
    const MIN = 100;
    const MAX = 999;

    return findMaxPalindromeProduct(MIN, MAX);
}

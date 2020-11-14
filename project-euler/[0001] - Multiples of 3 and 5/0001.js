/*
 * @name: Multiples of 3 and 5
 * @id:   0001
 * @url:  https://projecteuler.net/problem=1
 *
 * @problem:
 *   If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
 *   The sum of these multiples is 23.
 *   Find the sum of all the multiples of 3 or 5 below 1000.
 *
 * @solution: 233168
 */

export default function problem0001() {
    let sum = 0;

    for (let i=0; i<1000; i++)
        if (i % 3 === 0 || i % 5 === 0)
            sum += i;

    return sum;
}

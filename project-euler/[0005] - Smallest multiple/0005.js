/*
 * @name: Smallest multiple
 * @id:   0005
 * @url:  https://projecteuler.net/problem=5
 *
 * @problem:
 *   2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 *   What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 *
 * @solution: 232792560
 */

export default function problem0005() {
    let i, num = 2520;

    do {
        num++;

        for (i = 2; i < 20; i++)
            if (num % i !== 0)
                break;
    } while (i < 20);

    return num;
}

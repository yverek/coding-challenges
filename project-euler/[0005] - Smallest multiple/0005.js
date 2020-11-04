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

let num = 2520;

while (true) {
    let i;

    for (i = 2; i < 20; i++)
        if (num % i !== 0)
            break;

    if (i < 20)
        num++;
    else
        break;
}

console.log(`The solution is: ${num}`);

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

const TARGET = 10001;
let i = 0;
let number = 2;

function isPrime(num) {
    /*
     * Return if a given number is prime
     *
     * @param {number} num - The number you want to check
     * @return {boolean}
     */

    for(let i = 2; i <= Math.sqrt(num); i++)
        if(num % i === 0)
            return false;

    return true;
}

while (i !== TARGET) {
    if (isPrime(number))
        i++;

    if (i === TARGET)
        break;

    number++;
}

console.log(`The solution is: ${number}`);

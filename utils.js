export function binomialCoefficient(n, k) {
    /*
     * Return the binomial coefficient
     *
     * @param {number} n - The total set of possibilities
     * @param {number} k - The number of combinations we're interested in
     * @return {number}
     */
    return factorial(n) / (factorial(k) * factorial(n - k));
}

export function factorial(number) {
    /*
     * Return the factorial of the given value
     *
     * @param {number} num - Value to compute on
     * @return {number}
     */

    let num = BigInt(number);
    let acc = 1n;

    while (num > 1n)
        acc = acc * --num;

    return acc;
}

export function *fibonacci() {
    /*
     * Generator-like function to obtain values from Fibonacci sequence using next()
     *
     * @return {number}
     */
    let temp, first = 0, second = 1;

    while (true) {
        yield first;
        [temp, first] = [first, second];
        second += temp;
    }
}

export function getCollatzSequence(num) {
    /*
     * Return the Collatz sequence starting from a given number
     *
     * @param {number} num - The number you want to use to generate the sequence
     * @return {number[]}
     */
    const transformEvenNumber = n => n/2;
    const transformOddNumber  = n => (3 * n) + 1;

    let sequence = [], current = num;

    if (num === 1)
        sequence.push(1);

    while (current !== 1) {
        if(current % 2 === 0)
            current = transformEvenNumber(current);
        else
            current = transformOddNumber(current);

        sequence.push(current);
    }

    return sequence;
}

export function getProduct(...nums) {
    /*
     * Return the product of all the numbers given in input
     *
     * @param {...number} nums - All the numbers you want to multiply
     * @return {number}
     */
    return nums.reduce((accumulator, current) => accumulator * current);
}

export function getSum(...nums) {
    /*
     * Return the sum of all the numbers given in input
     *
     * @param {...number} nums - All the numbers you want to sum
     * @return {number}
     */
    return nums.reduce((accumulator, current) => accumulator + current);
}

export function isPalindrome(value) {
    /*
     * Return if a given number or string is palindrome
     *
     * @param {number|string} num - The number you want to check
     * @return {boolean}
     */
    value = value.toString().split('');

    for (let i=0; i<Math.floor(value.length / 2); i++)
        if (value[i] !== value[value.length - 1 - i])
            return false;

    return true;
}

export function isPrime(num) {
    /*
     * Return if a given number is prime
     *
     * @param {number} num - The number you want to check
     * @return {boolean}
     */
    for(let i = 2; i <= Math.sqrt(num); i++)
        if(num % i === 0)
            return false;

    return num > 1;
}

export function primeFactors(num) {
    /*
     * Return an array with all prime factors of a given number
     *
     * @param {number} num - The number you want to calculate all prime factors
     * @return {array}
     */
    const primeList = [];

    while (num % 2 === 0) {
        primeList.push(2);
        num /= 2;
    }

    // at this point, num MUST be odd
    for (let i=3; i<(Math.sqrt(num) + 1); i=i+2)
        while (num % i === 0) {
            primeList.push(i);
            num /= i;
        }

    if (num > 2)
        primeList.push(num);

    return primeList;
}

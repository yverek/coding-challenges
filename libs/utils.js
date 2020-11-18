export function binomialCoefficient(n, k) {
    /*
     * Return the binomial coefficient
     *
     * @param {number} n - The total set of possibilities
     * @param {number} k - The number of combinations we're interested in
     * @return {number}
     */
    if (typeof n !== "number" || typeof k !== "number")
        throw new Error("Please n and k must be numbers");

    if (k > n)
        throw new Error("Please n must be >= k");

    if (n < 0 || k < 0)
        throw new Error("Please n and k must be positive integer");

    return Number(factorial(n)) / (Number(factorial(k)) * Number(factorial(n - k)));
}

export function factorial(num) {
    /*
     * Return the factorial of the given value
     *
     * @param {number} num - Value to compute on
     * @return {BigInt}
     */
    if (typeof num !== "number")
        throw new Error("Please num must must be a number");

    if (num < 0)
        throw new Error("Please num must be a positive integer");

    let i, result = 1n;

    for (i = 2n; i <= num; i++)
        result *= i;

    return result;
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

export function findMaxPalindromeProduct(min, max) {
    /*
     * Return the max palindrome product of the numbers in a given range
     *
     * @param {number} min - The min value of the range
     * @param {number} max - The max value of the range
     * @return {number}
     */
    if (typeof min !== "number" || typeof max !== "number")
        throw new Error("Please min and max must be numbers");

    if (min > max)
        throw new Error("Please min must be >= max");

    if (min <= 0 || max <= 0)
        throw new Error("Please min and max must be positive integer");

    let maxProduct = 0;
    let first = max;
    let product;

    while (first >= min) {
        let second = max;

        while (second >= min) {
            product = first * second;

            if (isPalindrome(product) && (product > maxProduct))
                maxProduct = product;

            second--;
        }

        first--;
    }

    return maxProduct;
}

export function getCollatzSequence(num) {
    /*
     * Return the Collatz sequence starting from a given number
     *
     * @param {number} num - The number you want to use to generate the sequence
     * @return {number[]}
     */
    if (typeof num !== "number")
        throw new Error("Please num must must be a number");

    if (num <= 0)
        throw new Error("Please num must be a positive integer");

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
    nums.forEach(n => {
        if (typeof n !== "number")
            throw new Error("Please every parameter must be a number")
    })

    if (nums.length < 2)
        throw new Error("Please nums length must be >= 2");

    return nums.reduce((accumulator, current) => accumulator * current);
}

export function getSum(...nums) {
    /*
     * Return the sum of all the numbers given in input
     *
     * @param {...number} nums - All the numbers you want to sum
     * @return {number}
     */
    nums.forEach(n => {
        if (typeof n !== "number")
            throw new Error("Please every parameter must be a number")
    })

    if (nums.length < 2)
        throw new Error("Please nums length must be >= 2");

    return nums.reduce((accumulator, current) => accumulator + current);
}

export function isPalindrome(str) {
    /*
     * Return if a given string is palindrome
     *
     * @param {string} str - The string you want to check
     * @return {boolean}
     */
    if (typeof str !== "string")
        throw new Error("Please str must be a string");

    str = str.toLocaleLowerCase().split('');

    for (let i=0; i<Math.floor(str.length / 2); i++)
        if (str[i] !== str[str.length - 1 - i])
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
    if (typeof num !== "number")
        throw new Error("Please num must must be a number");

    if (num <= 0)
        throw new Error("Please num must be a positive integer");

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

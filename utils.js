
module.exports = {
    isPrime: (num) => {
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
    },
    fibonacci: () => {
        /*
         * Generator-like function to obtain values from Fibonacci sequence using next()
         *
         * @return {number}
         */

        return {
            next: (() => {
                let a = 0, b = 1;
                return () => {
                    [a, b] = [b, a + b];
                    return a;
                };
            })()
        };
    },
    primeFactors: (num) => {
        /*
         * Return an array with all prime factors of a given number num
         *
         * @param {number} num - The number you want to calculate all prime factors
         * @return {array} The array of all prime factors
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
    },
    isPalindrome: (num) => {
        /*
         * Return if a given number is palindrome
         *
         * @param {number} num - The number you want to check
         * @return {boolean}
         */

        num = num.toString().split('');

        for (let i=0; i<Math.floor(num.length / 2); i++)
            if (num[i] !== num[num.length - 1 - i])
                return false;

        return true;
    },
    getProduct: (...nums) => {
        /*
         * Return the product of all the numbers given in input
         *
         * @param {...number} nums - All the numbers you want to multiply
         * @return {number} The result of the multiplication
         */

        return nums.reduce((accumulator, current) => accumulator * current);
    },
    getSum: (...nums) => {
        /*
         * Return the sum of all the numbers given in input
         *
         * @param {...number} nums - All the numbers you want to sum
         * @return {number} The result of the sum
         */

        return nums.reduce((accumulator, current) => accumulator + current);
    },
    getCollatzSequence: (num) => {
        /*
         * Return the Collatz sequence starting from a given number
         *
         * @param {number} num - The number you want to use to generate the sequence
         * @return {number[]} The Collatz sequence
         */

        const transformEvenNumber = (n) => n/2;
        const transformOddNumber  = (n) => (3 * n) + 1;

        let sequence = [];
        let current = num;

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
    },
    factorial: (num) => {
        /*
         * Return the factorial of the given value
         *
         * @param {BigInt} num - Value to compute on
         * @return {number}
         */

        let acc = 1n;

        while (num > 1n)
            acc = acc * --num;

        return acc;
    },
    binomialCoefficient: (n, k) => {
        /*
         * Return the binomial coefficient
         *
         * @param {number} n - The total set of possibilities
         * @param {number} k - The number of combinations we're interested in
         * @return {number}
         */

        return module.exports.factorial(n) / (module.exports.factorial(k) * module.exports.factorial(n - k));
    }
}

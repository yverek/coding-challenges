
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
                }
            })()
        }
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
    }
}

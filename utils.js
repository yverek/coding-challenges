
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
    }
}

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

function isPalindrome(num) {
    /*
     * Return if a given number is palindrome
     *
     * @param {number} num - The number you want to check
     * @return {boolean}
     */

    num = num.toString().split('');

    for (let i=0; i<Math.floor(num.length / 2); i++) {
        if (num[i] !== num[num.length - 1 - i])
            return false;
    }

    return true;
}

function findMaxPalindromeProduct(min, max) {
    /*
     * Return the max palindrome product of the numbers in a given range
     *
     * @param {number} min - The min value of the range
     * @param {number} max - The max value of the range
     * @return {number}
     */

    let maxProduct = 0;
    let first = max;
    let product;

    while (first >= min) {
        let second = max;

        while (second >= min) {
            product = first * second;

            if (isPalindrome(product) && product > maxProduct)
                maxProduct = product;

            second--;
        }

        first--;
    }

    return maxProduct;
}

console.log(`The solution is: ${findMaxPalindromeProduct(100, 999)}`);

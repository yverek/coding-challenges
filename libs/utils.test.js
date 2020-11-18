import { describe, test } from "@jest/globals";
import {binomialCoefficient, factorial, fibonacci, findMaxPalindromeProduct} from './utils.js';

describe('# binomialCoefficient() #', () => {
    test('binomialCoefficient(\'Rome\', \'Paris\') throws error', () => {
        expect(() => binomialCoefficient('Rome', 'Paris')).toThrow('Please n and k must be numbers');
    });
    test('binomialCoefficient(5, 10) throws error', () => {
        expect(() => binomialCoefficient(5, 10)).toThrow('Please n must be >= k');
    });
    test('binomialCoefficient(-1, -1) throws error', () => {
        expect(() => binomialCoefficient(-1, -1)).toThrow('Please n and k must be positive integer');
    });
    test('binomialCoefficient(4, 2) returns 6', () => {
        expect(binomialCoefficient(4, 2)).toBe(6);
    });
    test('binomialCoefficient(10, 5) returns 252', () => {
        expect(binomialCoefficient(10, 5)).toBe(252);
    });
});

describe('# factorial() #', () => {
    test('factorial(\'Rome\') throws error', () => {
        expect(() => factorial('Rome')).toThrow('Please n must must be a number');
    });
    test('factorial(-1) throws error', () => {
        expect(() => factorial(-1)).toThrow('Please n must be a positive integer');
    });
    test('factorial(0) returns 1', () => {
        expect(factorial(0)).toBe(1n);
    });
    test('factorial(1) returns 1', () => {
        expect(factorial(1)).toBe(1n);
    });
    test('factorial(6) returns 720', () => {
        expect(factorial(6)).toBe(720n);
    });
});

describe('# fibonacci() #', () => {
    test('fibonacci().next().value called 10 times in a row' +
        ' returns [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]', () => {
        const fibonacciSequence = fibonacci();

        expect(fibonacciSequence.next().value).toBe(0);
        expect(fibonacciSequence.next().value).toBe(1);
        expect(fibonacciSequence.next().value).toBe(1);
        expect(fibonacciSequence.next().value).toBe(2);
        expect(fibonacciSequence.next().value).toBe(3);
        expect(fibonacciSequence.next().value).toBe(5);
        expect(fibonacciSequence.next().value).toBe(8);
        expect(fibonacciSequence.next().value).toBe(13);
        expect(fibonacciSequence.next().value).toBe(21);
        expect(fibonacciSequence.next().value).toBe(34);
        expect(fibonacciSequence.next().value).toBe(55);
    });
});

describe('# findMaxPalindromeProduct() #', () => {
    test('findMaxPalindromeProduct(\'Rome\', \'Paris\') throws error', () => {
        expect(() => findMaxPalindromeProduct('Rome', 'Paris')).toThrow('Please min and max must be numbers');
    });
    test('findMaxPalindromeProduct(10, 5) throws error', () => {
        expect(() => findMaxPalindromeProduct(10, 5)).toThrow('Please min must be >= max');
    });
    test('findMaxPalindromeProduct(-1, -1) throws error', () => {
        expect(() => findMaxPalindromeProduct(-1, -1)).toThrow('Please min and max must be positive integer');
    });
    test('findMaxPalindromeProduct(0, 0) throws error', () => {
        expect(() => findMaxPalindromeProduct(0, 0)).toThrow('Please min and max must be positive integer');
    });
    test('findMaxPalindromeProduct(10, 99) returns 9009', () => {
        expect(findMaxPalindromeProduct(10, 99)).toBe(9009);
    });
    test('findMaxPalindromeProduct(100, 999) returns 906609', () => {
        expect(findMaxPalindromeProduct(100, 999)).toBe(906609);
    });
});

import { describe, test } from "@jest/globals";
import {binomialCoefficient, factorial, fibonacci, findMaxPalindromeProduct, getCollatzSequence} from './utils.js';

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
        expect(() => factorial('Rome')).toThrow('Please num must must be a number');
    });
    test('factorial(-1) throws error', () => {
        expect(() => factorial(-1)).toThrow('Please num must be a positive integer');
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

describe('# getCollatzSequence() #', () => {
    test('getCollatzSequence(\'Rome\') throws error', () => {
        expect(() => getCollatzSequence('Rome')).toThrow('Please num must must be a number');
    });
    test('getCollatzSequence(-1) throws error', () => {
        expect(() => getCollatzSequence(-1)).toThrow('Please num must be a positive integer');
    });
    test('getCollatzSequence(0) throws error', () => {
        expect(() => getCollatzSequence(0)).toThrow('Please num must be a positive integer');
    });
    test('getCollatzSequence(1) returns [1]', () => {
        expect(getCollatzSequence(1)).toEqual(expect.arrayContaining([1]));
    });
    test('getCollatzSequence(5) returns [16, 8, 4, 2, 1]', () => {
        expect(getCollatzSequence(5)).toEqual(expect.arrayContaining([16, 8, 4, 2, 1]));
    });
    test('getCollatzSequence(10) returns [5, 16, 8, 4, 2, 1]', () => {
        expect(getCollatzSequence(10)).toEqual(expect.arrayContaining([5, 16, 8, 4, 2, 1]));
    });
    test('getCollatzSequence(20) returns [10, 5, 16, 8, 4, 2, 1]', () => {
        expect(getCollatzSequence(20)).toEqual(expect.arrayContaining([10, 5, 16, 8, 4, 2, 1]));
    });
});

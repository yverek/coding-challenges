import { describe, test } from "@jest/globals";
import { binomialCoefficient } from './utils.js';

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
    test('binomialCoefficient(4, 2) should return ', () => {
        expect(binomialCoefficient(4, 2)).toBe(6);
    });
    test('binomialCoefficient(10, 5) throws error', () => {
        expect(binomialCoefficient(10, 5)).toBe(252);
    });
});

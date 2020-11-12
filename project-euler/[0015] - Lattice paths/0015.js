/*
 * @name: Lattice paths
 * @id:   0015
 * @url:  https://projecteuler.net/problem=15
 *
 * @problem:
 *   Starting in the top left corner of a 2×2 grid,
 *   and only being able to move to the right and down,
 *   there are exactly 6 routes to the bottom right corner.
 *
 *   How many such routes are there through a 20×20 grid?
 *
 * @solution: 137846528820
 */

const utils = require('../../utils');

console.log(`The solution is: ${utils.binomialCoefficient(40,20)}`);

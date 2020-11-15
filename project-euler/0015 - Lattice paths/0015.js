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

import { binomialCoefficient } from "../../utils.js";

export default function problem0015() {
    const n = 40, k = 20;

    return binomialCoefficient(n, k);
}

problem0015();

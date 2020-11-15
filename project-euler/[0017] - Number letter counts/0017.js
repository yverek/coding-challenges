/*
 * @name: Number letter counts
 * @id:   0017
 * @url:  https://projecteuler.net/problem=17
 *
 * @problem:
 *   If the numbers 1 to 5 are written out in words: one, two, three, four, five,
 *   then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
 *
 *   If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words,
 *   how many letters would be used?
 *
 *   NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115
 *   (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with
 *   British usage.
 *
 * @solution: 21124
 */

export default function problem0017() {
    const TARGET = 1000;
    const lenHundred = 7, lenThousand = 8;
    const lenPlaceOnes = [0, 3, 3, 5, 4, 4, 3, 5, 5, 4];
    const lenPlaceTens = [0, 3, 6, 6, 5, 5, 5, 7, 6, 6];
    let i, sum = 0;

    for (i = 1; i <= TARGET; i++) {
        let placeOnes = i % 10;
        let placeTens = Math.floor(i / 10) % 10;
        let placeHundreds = Math.floor(i / 100) % 10;
        let placeThousands = Math.floor(i / 1000) % 10;

        // Add the ones place
        sum += lenPlaceOnes[placeOnes];

        // Add the tens place
        sum += lenPlaceTens[placeTens];

        // If the hundreds place is non-zero, add it and "hundred"
        if (placeHundreds !== 0)
            sum += lenHundred + lenPlaceOnes[placeHundreds];

        // If the thousands place is non-zero, add it and "thousand"
        if (placeThousands !== 0)
            sum += lenThousand + lenPlaceOnes[placeThousands];

        // If the number is in the teens, take care of special numbers
        // Eleven is the same length as "oneten", Twelve the same as "twoten", and so on
        // With the exception of those in the switch statement
        if (placeTens === 1) {
            // If the ones place is 4, 6, 7, or 9, add an extra 1 for the "e"
            switch (placeOnes) {
                case 4:
                case 6:
                case 7:
                case 9:
                    sum += 1;
                    break;
            }
        }

        // If the value is above one hundred, and the number is not an exact hundred
        // add 3 for the "and"
        if (i > 100 && i % 100 !== 0)
            sum += 3;
    }

    return sum;
}

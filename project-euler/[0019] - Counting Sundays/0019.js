/*
 * @name: Counting Sundays
 * @id:   0019
 * @url:  https://projecteuler.net/problem=19
 *
 * @problem:
 *   You are given the following information, but you may prefer to do some research for yourself.
 *
 *     - 1 Jan 1900 was a Monday.
 *     - Thirty days has September,
 *       April, June and November.
 *       All the rest have thirty-one,
 *       Saving February alone,
 *       Which has twenty-eight, rain or shine.
 *       And on leap years, twenty-nine.
 *     - A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
 *
 *   How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
 *
 * @solution: 171
 */

let daysInAMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let daysCount = 365 + 1;
let sundays = 0;

for (let year=1901; year<=2000; year++)
    for (let month=0; month<12; month++) {
        if (daysCount % 7 === 0)
            sundays++;

        daysCount += daysInAMonth[month];

        if (month === 1 && year % 4 === 0)
            if (year % 100 !== 0 || year % 400 === 0)
                daysCount += 1;
    }

console.log(`The solution is: ${sundays}`);

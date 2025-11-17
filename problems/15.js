/**
 * Problem 15: FizzBuzz
 * 
 * Given a number, return a array that counts up to that number BUT
 *  If a number is divisible by 3, replace it with "Fizz",
 *  If a number is divisible by 5, replace it with "Buzz",
 *  If a number is divisible by 3 and 5, replace it with "FizzBuzz"
 * 
 * @example 3 -> [1, 2, "Fizz"]
 * @example 5 -> [1, 2, "Fizz", 4, "Buzz"]
 * @example 15 -> [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
*/
function problem(number) {

    // validate number
    if (!Number.isFinite(number)) return null;

    // creat an empty result array
    let result = [];

    // loop from 1 to number and test 3 cases.
    for(let elem = 1; elem <= number; elem++) {
        // Case 0: both divisible by 3 AND 5
        if (elem % 3 === 0 && elem % 5 === 0) {
            result.push("FizzBuzz");
        }
        else if (elem % 3 === 0) { // Case 1: when Case 0 fails, check if it ONLY divisible by 3.
            result.push("Fizz");
        }
        else if (elem % 5 === 0) { // Case 2: when first two cases fail, check if it is ONLY divisible by 3
            result.push("Buzz");
        }
        else { // Case 3: not divisible by 3 or 5, push element itself.
            result.push(elem);
        }
    }

    return result;
}

const tests = [
    [3, [1, 2, "Fizz"]],
    [5, [1, 2, "Fizz", 4, "Buzz"]],
    [17, [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17]]
]

module.exports = {problem, tests};
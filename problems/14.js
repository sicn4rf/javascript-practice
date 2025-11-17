/**
 * Problem 14: Majority Element
 * 
 * Given a list of numbers, return the majority number.
 * The majority number is the one that appears at least ⌊n/2⌋ times, where n is the size of the list.
 * 
 * @example [3,2,3] -> 3
*/
function problem(numbers) {
    let freq = {}
    numbers.forEach(element => {
        if (!freq.hasOwnProperty(element)) freq[element] = 1;
        else {
            freq[element]++;
        }
    });

    let max = -Infinity;
    let res;
    for(const [key, val] of Object.entries(freq)) {
        if (val > max) {
            res = key;
            max = val;
        }
    }

    return Number(res);
}

const tests = [
    [[3,2,3], 3],
    [[2,2,1,1,3,2,2], 2]
]

module.exports = {problem, tests};
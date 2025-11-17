/**
 * Problem 7: Sum with Reducing
 * 
 * Given a list of numbers, compute the sum of the list.
 * This time, use the .reduce function.
 * 
 * @example [1, 2, 3] -> 6
*/
function problem(numbers) {
    // validate array
    if(!Array.isArray(numbers)) return null;

    // create a copy so original array is not affected
    const copy = numbers.slice().map((w) => {return Number(w)});

    // create sum using reduce function
    const sum = copy.reduce((res, elem) => {
        return res + elem;
    }, 0)

    return sum;
}

const tests = [
    [[1, 2, 3], 6],
    [[2, 31, 4, 5, 2, 67], 111],
    [[], 0],
]

module.exports = {problem, tests};
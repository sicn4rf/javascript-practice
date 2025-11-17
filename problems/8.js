/**
 * Problem 8: Avg with Reducing 
 * 
 * Given a list of numbers, return the average of the list.
 * Use the .reduce function.
 * 
 * @example [1, 2, 3] -> 6
*/
function problem(numbers) {
    // validate array
    if(!Array.isArray(numbers)) return null;
    
    // make sure length is not zero so we dont divide by zero
    if(numbers.length === 0) return 0;
    
    // reduce to get sum 
    const sum = numbers.reduce(function(res, elem) {
        return res + elem;
    }, 0)

    return sum / numbers.length;

}

const tests = [
    [[1, 2, 3], 2],
    [[2, 31, 4, 5, 2, 67], 18.5],
]

module.exports = {problem, tests};
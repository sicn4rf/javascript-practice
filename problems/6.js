/**
 * Problem 6: For of Loop - Sum
 * 
 * Given a list of numbers, compute the sum of the list.
 * Use a For of Loop for this.
 * 
 * @example [1, 2, 3] -> 6
*/
function problem(numbers) {
    // validate array    
    if (!Array.isArray(numbers)) return null;

    // create sum variable then loop through input array and add to sum
    let sum = 0;

    for (const num of numbers) {
        //validate num
        if (!Number.isFinite(num)) continue;
        
        sum += num;
    }

    return sum;
}

const tests = [
    [[1, 2, 3], 6],
    [[2, 31, 4, 5, 2, 67], 111],
    [[], 0],
]

module.exports = {problem, tests};
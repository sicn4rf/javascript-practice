/**
 * Problem 1: Arrow Functions
 * 
 * getLastLetter is supposed to return the last letter in the string, but there is a bug!
 * Find and fix the bug.
 * While you're at it, let's also convert this function to an arrow function.
 * 
 * @example "string" -> "g"
*/
function problem(str) {
    
    // TODO: Convert this to an arrow function
    // TODO: Fix the bug inside the function

    // arrow function implementation. identifier = (params) => {implementation}   
    const getLastLetter = (word) => {
        // verify word input is valid
        if (typeof word !== 'string') {
            return null;
        }

        return word.slice(word.length - 1); // recall slice lets you chunk out a subset of the array with usage .slice(start, end) not inclusive of end. so array.length is valid input here

        // in this case, end was ommited and negative start counts from the end. since start is inclusive, 
    }
    return getLastLetter(str);
}

const tests = [
    ["string", "g"],
    ["arrow function", "n"]
]

module.exports = {problem, tests};
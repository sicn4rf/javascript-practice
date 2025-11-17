/**
 * Problem 2: Mapping
 * 
 * Given a list of names, create a list of strings that says "Hi {Name}".
 * Use the .map function.
 * 
 * @example ["Chase", "Raman"] -> ["Hi Chase", "Hi Raman"]
 */
function problem(names) {

    // validate input before throwing into .map
    if (!Array.isArray(names)) return null;

    // use .map on input array (of strings) and use template literals or another form of string interpolation to
    // return new array elements with "Hi " concatenated to each element of names.  
    const hi_names = names.map((name) => `Hi ${String(name)}`); // or return "Hi " + String(name); used String() to ensure
    // current element is a string before interpolation. Since our initial validation was to check 
    // if it was an array, theres no guarantee that the contents of the array were valid strings

    return hi_names;
}


const tests = [
    [["Chase", "Raman"], ["Hi Chase", "Hi Raman"]],
    [["Mars"], ["Hi Mars"]],
    [[], []]
]

module.exports = {problem, tests};
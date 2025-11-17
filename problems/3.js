/**
 * Problem 3: Filtering
 * 
 * Given an array of numbers, only return the ones that are divisible by 3.
 * Use the .filter function.
 * 
 * @example [1, 2, 3, 4, 5, 6, 7, 8, 9] -> [3, 6, 9]
 */
function problem(numbers) {

    // validate that input is in fact an array
    if (!Array.isArray(numbers)) return null;

    // use .filter to create a new array of only numbers divisible by three
    // we do this by taking each element and checking its value when used on % 3.
    // if the value is non-zero, it is not divisible by 3, otherwise its divisible by 3.

    // const threes = numbers.filter((item) => !(item % 3)); // item % 3 ? false : true; is valid too. 
    //                                                     // if condition is nonzero, false (dont keep), else true (keep)

    // ! ! ! ! ! the above implementation is not good because if item is undefined it returns false and get KEPT into the array
    // this is a deeper edge case. we should do strict comparison instead and ensure the item is a Finite number

    const threes = numbers.filter((num) => {
        return (Number.isFinite(num) && (num % 3) === 0); // explicility check that the item is valid. then ensure its divisibel by 3
                                                          // ONLY then will it be included in the filtered array
    })

    return threes;
}

const tests = [
    [[1, 2, 3, 4, 5, 6, 7, 8, 9], [3, 6, 9]],
    [[3], [3]],
    [[], []],
]

module.exports = {problem, tests};
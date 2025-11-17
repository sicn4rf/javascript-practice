/**
 * Problem 11: Palindrome
 * 
 * Given a string, return true if it is a palindrome.
 * A palindrome is a string that is the same forward and backwards.
 * Only consider letters, ignore spaces and cases.
 * 
 * @example "racecar" -> true
*/
function problem(str) {
    // validate string
    if (typeof str !== "string") return null;

    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        while(!/[a-z]/i.test(str[start]) && start < end) start++;

        while(!/[a-z]/i.test(str[end]) && start < end) end--;

        if(str[start].toLowerCase() !== str[end].toLowerCase()) return false;

        start++;
        end--;
    }

    return true;
}

const tests = [
    ["racecar", true],
    ["raC.  ECA/R!", true],
    ["icssc", false],
    ["dont nod", true],
    ["Was it a cat I saw", true],
    ["how are you", false]
]

module.exports = {problem, tests};
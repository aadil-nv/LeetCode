/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function(word) {
    let nums = word.replace(/\D+/g, " ").trim().split(" ");
    let unique =  new Set(nums.filter(n => n !== "").map(n => BigInt(n).toString()))
    return unique.size
};
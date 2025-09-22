/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(word1, word2) {
    let freq ={};
    for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
        if (i < word1.length) freq[word1[i]] = (freq[word1[i]] || 0) + 1;
        if (i < word2.length) freq[word2[i]] = (freq[word2[i]] || 0) - 1;
    }

    for (let char in freq) {
        if (Math.abs(freq[char]) > 3) return false;
    }

    return true;
};
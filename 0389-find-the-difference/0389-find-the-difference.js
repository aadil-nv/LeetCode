/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

    var findTheDifference = function(s, t) {
    const count = {};

    for (let ch of s) {
        count[ch] = (count[ch] || 0) + 1;
    }

    for (let ch of t) {
        if (!count[ch]) return ch;
        count[ch]--;
    }
};

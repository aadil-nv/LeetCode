/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let newWord =s.trim()
    if(newWord === "") return 0
    return newWord.split(/\s+/).length
};
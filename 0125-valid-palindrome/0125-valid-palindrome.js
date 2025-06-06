/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let newWord = "";
    for(let  i=0;i<s.length;i++){
        let char = s[i]
        if(/[a-zA-Z0-9]/.test(char)){
            newWord+=char.toLowerCase()
        }
    }
    const reversed = newWord.split("").reverse().join("")
    return reversed === newWord
};
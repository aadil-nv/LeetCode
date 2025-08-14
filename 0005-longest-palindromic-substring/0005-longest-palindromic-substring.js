/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let res = []
    let large =""
    for(let i=0;i<s.length;i++){
        for(let j=i;j<s.length;j++){
            
        if(isPalindrom(s,i,j) &&large.length <(j-i+1)){
            let sub=""
            for(let k=i;k<=j;k++){
                sub+=s[k]
            }
            large=sub
            }
        }
    }
    return large
};
function isPalindrom (str,left,right){
    while(left < right){
        if(str[left] !== str[right]) return false;
        left++
        right--
    }
    return true
}
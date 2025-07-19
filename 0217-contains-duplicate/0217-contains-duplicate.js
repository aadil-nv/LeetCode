/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let newObj ={};
    for(let num of nums){
        newObj[num]=(newObj[num]||0)+1
    }
    for(let num in newObj){
        if(newObj[num] > 1){
            return true
        }
    }
    return false
};
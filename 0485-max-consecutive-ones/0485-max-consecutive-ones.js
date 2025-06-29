/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
        let  res =0;
    let larger =0
    for(let i=0;i<nums.length;i++){
        if(nums[i]===1){
            res++
        }else{
            if(res>larger){
                larger=res
            }
            res=0
        }
    }
    return Math.max(larger,res)
};
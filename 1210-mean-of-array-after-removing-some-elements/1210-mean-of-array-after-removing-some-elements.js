/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    let newArr = arr.sort((a,b)=>a-b)
    let sum=0
    let n=newArr.length
     let trim = Math.floor(n * 0.05);

    for(let i=trim;i<n-trim;i++){
        sum+=arr[i]
       
    }

    return sum/(n-2*trim)
};
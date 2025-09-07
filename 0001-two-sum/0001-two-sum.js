var twoSum = function (nums, target) {
    let arr = nums.map((num, i) => [num, i]);
    arr.sort((a, b) => a[0] - b[0]); // sort by values

    let left = 0, right = arr.length - 1;
    while (left < right) {
        let sum = arr[left][0] + arr[right][0];
        if (sum === target) {
            return [arr[left][1], arr[right][1]]; // return original indices
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
};
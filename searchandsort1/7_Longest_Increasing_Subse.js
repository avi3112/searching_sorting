// Given an integer array nums, return the length of the longest strictly increasing 
// subsequence
// .

 

// Example 1:

// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
// Example 2:

// Input: nums = [0,1,0,3,2,3]
// Output: 4
// Example 3:

// Input: nums = [7,7,7,7,7,7,7]
// Output: 1



// approch Dynamic programming

var lengthOfLIS = function(nums){
    const dp = Array(nums.length).fill(1);
    let max = 1;
    for(let i = 0; i < nums.length; i++){
        for(let j = 1; j < i; j++){
            if(nums[i] > nums[j]){
                dp[i] = Math.max(dp[i], dp[j]+1);
                max = Math.max(dp[i], max);
            }
        }
    }
    return max
}

const result= lengthOfLIS([10,9,2,5,3,7,101,18])
console.log(result)
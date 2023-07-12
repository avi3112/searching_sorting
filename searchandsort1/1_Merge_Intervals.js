// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

function mergeinterval(intervals) {
    intervals= intervals.sort((a,b)=> a[0]-b[0])
    let result=[]
    let pair=intervals[0]
    for(let i of intervals){
        if(pair[1]>=i[0] && pair[1]<=i[1]){
            pair[1]=i[1]
        }
        else {
            result.push(pair)
            pair=i
        }
    }
    result.push(pair)
    return result
};

const result= mergeinterval([[1,3],[2,6],[8,10],[15,18]])
console.log(result)
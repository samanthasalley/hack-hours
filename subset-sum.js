/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

/**
 * TESTED WORKING SOLUTION
 */

const subsetSum = (array, target) => {
  // base case:
    // return boolean whether or not 
    //  the first item in the array is
    //  equal to the target value
  if (array.length === 1) return array[0] === target;
  
  // recursive case:
    // loop through each item in the array
    //  and return true if any of the items
    //  is equal to the target OR if there is
    //  a subsetSum equal to the target minus
    //  the current item
  for (let i = 0; i < array.length; i++) {
    const cur = array[i];
    const newTarget = target - cur;
    if (cur === target || subsetSum([ ...array.slice(0, i), ...array.slice(i + 1) ], newTarget)) return true;
  }

  // if we have no subsetSum, return false
  return false;
};
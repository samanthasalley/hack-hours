/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = (nums) => {
  // base case:
    // return empty nested array
  if (!nums.length) return [[]];

  // recursive case:

  // use a Map to get unique values
  const output = new Map([[nums.join(''), nums]]);

  // use array to hold non-unique subsets for current array
  let allSubs = [];

  // iterate through the current nums array
  //  concat all subsets for each item in the
  //  array into allSubs
  for (let i = 0; i < nums.length; i++) {
    allSubs = allSubs.concat(subsets([...nums.slice(0, i), ...nums.slice(i + 1)]));
  }

  // iterate through each subset and set into Map
  //  - account for empty base case object
  allSubs.forEach(sub => sub.length ? output.set(sub.join(''), sub) : output.set('empty', sub));

  // return the unique subset values for the input nums array
  return [...output.values()];
};

/**
 * ==========
 * TEST CASES
 * ==========
 */

// console.log(subsets([1, 2, 3]));
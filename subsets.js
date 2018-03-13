/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = (nums) => {
  if (!nums.length) return [[]];

  const output = new Map([[nums.join(''), nums]]);
  let allSubs = [];
  for (let i = 0; i < nums.length; i++) {
    allSubs = allSubs.concat(subsets([...nums.slice(0, i), ...nums.slice(i + 1)]));
  }

  allSubs.forEach(sub => sub.length ? output.set(sub.join(''), sub) : output.set('empty', sub));

  return [...output.values()];
};

/**
 * ==========
 * TEST CASES
 * ==========
 */

// console.log(subsets([1, 2, 3]));
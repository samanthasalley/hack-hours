/**
 * Given a collection of intervals, merge all overlapping intervals.
 * 
 * Example 1:
 *  Input: [[1,3],[2,6],[8,10],[15,18]]
 *  Output: [[1,6],[8,10],[15,18]]
 *  Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
 * 
 * Example 2:
 *  Input: [[1,4],[4,5]]
 *  Output: [[1,5]]
 *  Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 */

/**
 * @param {number[]} arr1 
 * @param {number[]} arr2 
 */
const mergeSubarrays = (arr1, arr2) => ([arr1[0], Math.max(arr1[1], arr2[1])]);

const mSortHelper = (l, r) => {
  const res = [];
  let li = 0;
  let ri = 0;

  while(li < l.length && ri < r.length) {
    if (l[li][0] < r[ri][0]) {
      res.push(l[li])
      li++;
    }
    else {
      res.push(r[ri])
      ri++;
    }
  }

  return res.concat(l.slice(li)).concat(r.slice(ri));
};

const mSort = (arr) => {
  if (arr.length === 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const first = arr.slice(0, mid);
  const sec = arr.slice(mid);
  return mSortHelper(mSort(first), mSort(sec));
}

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const mergeIntervals = (intervals) => {
  if (!intervals.length) return [];
  const sorted = mSort(intervals);
  const merged = [];
  for (let i = 0; i < sorted.length; i += 1) {
    if (!merged.length) merged.push(sorted[i]);
    else {
      const lastPos = merged.length - 1;
      const [curStart, curEnd] = sorted[i];
      const [prevStart, prevEnd] = merged[lastPos];
      if (curStart >= prevStart && curStart <= prevEnd) merged[lastPos] = mergeSubarrays(merged[lastPos], sorted[i]);
      else merged.push(sorted[i]);
    }
  }
  return merged;
};

// TESTS:
// console.log('mergeIntervals([]) -> [] => ', mergeIntervals([]));
// console.log('mergeIntervals([[1, 3]]) -> [[1, 3]] => ', mergeIntervals([[1, 3]]));
// console.log('mergeIntervals([[1, 3], [6, 10]]) -> [[1, 3], [6, 10]] => ', mergeIntervals([[1, 3], [6, 10]]));
// console.log('mergeIntervals([[1, 3], [2, 5]]) -> [[1, 5]] => ', mergeIntervals([[1, 3], [2, 5]]));
// console.log('mergeIntervals([[1, 4], [2, 3]]) -> [[1, 4]] => ', mergeIntervals([[1, 4], [2, 3]]));
// console.log('mergeIntervals([[1, 3], [2, 4], [6, 8]]) -> [[1, 4], [6, 8]] => ', mergeIntervals([[1, 3], [2, 4], [6, 8]]));
// console.log('mergeIntervals([[1, 4], [4, 6]]) -> [[1, 6]] => ', mergeIntervals([[1, 4], [4, 6]]));
// console.log(
//   'mergeIntervals([[2,3],[0,1],[1,2],[3,4],[4,5],[1,1],[0,1],[4,6],[5,7],[1,1],[3,5]]) -> [[0,7]] => ',
//   mergeIntervals([[2, 3], [0, 1], [1, 2], [3, 4], [4, 5], [1, 1], [0, 1], [4, 6], [5, 7], [1, 1], [3, 5]])
// );
// console.log('mergeIntervals([]) -> [] => ', mergeIntervals([]));
// console.log('mergeIntervals([]) -> [] => ', mergeIntervals([]));
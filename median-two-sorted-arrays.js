/**
 * @name medianTwoSortedArrays
 * @description
 *    There are two sorted arrays nums1 and nums2 of size m and n respectively.
 *    Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
 *    You may assume nums1 and nums2 cannot be both empty.
 * @example
 *  nums1 = [1, 3]
 *  nums2 = [2]
 *  The median is 2.0
 * 
 * @example
 *  nums1 = [1, 2]
 *  nums2 = [3, 4]
 *  The median is (2 + 3)/2 = 2.5
 */

/**
 * @name mergeSort
 * @param {number[]} nums1 
 * @param {number[]} nums2 
 * @returns {number[]} merged, sorted
 */
const mergeSort = (nums1, nums2) => {
  let a = 0;
  let b = 0;
  let output = [];
  while (true) {
    if (nums1[a] === undefined) return output.concat(nums2.slice(b));
    if (nums2[b] === undefined) return output.concat(nums1.slice(a));
    if (nums1[a] <= nums2[b]) {
      output.push(nums1[a]);
      a += 1;
    }
    else {
      output.push(nums2[b]);
      b += 1;
    }
  }
  return output;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  const merged = mergeSort(nums1, nums2);
  if (merged.length % 2 !== 0) return merged[Math.floor(merged.length / 2)];
  const mid = merged.length / 2;
  return (merged[mid - 1] + merged[mid]) / 2;
};


console.log('findMedianSortedArrays([1, 3], [2]) -> 2 => ', findMedianSortedArrays([1, 3], [2]));
console.log('findMedianSortedArrays([1, 2], [3, 4]) -> 2.5 => ', findMedianSortedArrays([1, 2], [3, 4]));
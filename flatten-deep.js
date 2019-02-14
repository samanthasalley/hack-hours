/**
 * Recursively flattens a nested array.
 * flattenDeep([1, [2, 3, [4]]]); → [1, 2, 3, 4]
 */

/** REDUCE SOLUTION */
const flattenDeep = (array) => {
  return array.reduce((flatArr, item) => {
    if (!Array.isArray(item)) return flatArr.concat(item);
    else return [...flatArr, ...flattenDeep(item)];
  }, []);
};

// console.log('flattenDeep([1, [2, 3, [4]]]) => [1, 2, 3, 4] => ', flattenDeep([1, [2, 3, [4]]]));
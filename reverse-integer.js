/**
 * Given a 32-bit signed integer, reverse digits of an integer.
 * 
 * Note:
 * Assume we are dealing with an environment which could only hold integers within the 32-bit signed integer range. 
 * For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
 */

/**
 * @param {number} x
 * @return {number}
 * ==========================
 * LEETCODE ACCEPTED SOLUTION
 * ==========================
 */
const reverse = (x) => {
  // convert number to string
  //  use |0 to keep at exact 32-bit
  //  (w/o could be float)
  const xStr = (x|0).toString();
  // find mid-point of str
  const mid = Math.floor(xStr.length / 2);
  // determine if num is negative 
  //  and/or string length is odd
  const isNeg = x < 0;
  const isOdd = xStr.length % 2 !== 0;

  // create arrs for new 
  //  front and new back
  const newFront = [];
  const newBack = [];

  // iterate through string to the midpoint
  //  from both beginning and end of string
  for (let front = 0, back = (xStr.length - 1); front < mid; front++ , back--) {
    // add current back num to end of newFront arr
    newFront.push(xStr[back]);
    // add current front num to front of newBack arr
    newBack.unshift(xStr[front]);
  }

  // handle middle num for odd-length inputs 
  if (isOdd) {
    newFront.push(xStr[mid]);
  }

  // set reversed to concatenation of newFront and newBack,
  //  then join them as a string, and parse into integer.
  let reversed = parseInt(newFront.concat(newBack).join(''));

  // if original input was negative, convert reversed to negative
  if (isNeg) reversed = -Math.abs(reversed);

  // if our reversed number is outside of acceptable 32-bit SI range,
  //  return 0 per instructions.
  if (reversed > 2147483647 || reversed < -2147483647) return 0;
  
  // otherwise return our reversed number
  return reversed;
};
/** LEETCODE
 * Given a string, find the length of the longest substring without repeating characters.
 *  Examples:
 *  Given "abcabcbb", the answer is "abc", which the length is 3.
 *  Given "bbbbb", the answer is "b", with the length of 1.
 *  Given "pwwkew", the answer is "wke", with the length of 3. 
 *   Note that the answer must be a substring, "pwke" is a 
 *     subsequence and not a substring.
 */

/**
 * ==========================
 * LEETCODE ACCEPTED SOLUTION
 * ==========================
 */

/**
 * @param {string} s
 * @return {number} longest
 */

const lengthOfLongestSubstring = (s) => {
  // handle invalid input
  if (!s || typeof s !== 'string') return 0;
  
  // create cache for finding max 
  const cache = {};
  
  // var for return value
  let longest = 1;
  
  // begin iterating through the array
  for (let end = 0, start = 0; end < s.length; end++) {

    // at each iteration, if the current char
    //  is in the cache, update the start var
    //  to the higher or either the index of
    //  current char in the cache plus one or 
    //  the current start place.
    if (cache[s[end]] !== undefined) start = Math.max((cache[s[end]] + 1), start);
    
    // then, update longest to the max of either
    //  the current longest or the length between
    //  the end var and the start var plus one
    longest = Math.max(longest, end - start + 1);

    // finally, update or add the current char
    //  to the cache with val of current end.
      cache[s[end]] = end;
  }
  
  // return longest
  return longest;
};

// /**
//  * @param {string} s
//  * @return {number}
//  */
// const lengthOfLongestSubstring = (s) => {
//   // handle invalid input
//   if (!s || typeof s !== 'string') return 0;
  
//   // base case:
//   if (s.length === 1) return 1;
  
//   // recursive case:
//   // hold current length and cur index
//   let length = 0;
//   let cur = 0;
  
//   // hold cache of letters to find dupes
//   const cache = {};
  
//   // loop through each letter until we find
//   //  a dupe, and return the length of the
//   //  substring.
//   do {
//       cache[s[cur]] = true;
//       length++;
//       cur++;
//   }
//   while (s[cur] && !cache[s[cur]]);
  
  
//   // return the longest length between
//   //  our current length and the longest
//   //  length of the string without the
//   //  first character
//   return Math.max(length, lengthOfLongestSubstring(s.slice(1)));
// };


// const lengthOfLongestSubstring = function(s) {
//   // base case: invalid length || 1 char
//   if (!s) return 0;
//   if (s.length === 1) return 1;
  
//   // recursive case:
  
//   // create cache for letters
//   const cache = {};
  
//   // initialize index
//   let i = 0;
  
//   // go through each letter in s
//   //  until we find a repeat or
//   //  we hit the end of the str
//   while (s[i] && !cache[s[i]]) {
//       cache[s[i]] = true;
//       i++;
//   }
  
//   // return the max of the current longest 
//   //  compared to the return of the longest
//   //  from the recursive call.
//   return Math.max(Object.keys(cache).length, lengthOfLongestSubstring(s.slice(1)));
// };

// /**
//  * @param {string} s
//  * @return {number}
//  */



// const lengthOfLongestSubstring = (s) => {
//   // handle invalid input
//   if (!s || typeof s !== 'string') return 0;
  
//   const cache = {};
  
//   let longest = 0;
  
//   for (let end = 0, start = 0; end < s.length; end++) {
//       if (cache[s[end]]) start = Math.max(cache[s[end]], start);
      
//       longest = Math.max(longest, end - start);
//       cache[s[end]] = end;
//   }
  
//   return longest;
// };
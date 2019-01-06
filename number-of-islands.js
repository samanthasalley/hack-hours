/**
 * Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. 
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
 * You may assume all four edges of the grid are all surrounded by water.
 * 
 * Example 1:
 * Input:
 * 11110
 * 11010
 * 11000
 * 00000
 * Output: 1
 * 
 * Example 2:
 * Input:
 * 11000
 * 11000
 * 00100
 * 00011
 * Output: 3
 */

/**
 * @name mapIsland
 * @param {number} row 
 * @param {number} col 
 * @param {array} grid 
 * @description if input cell (grid[row][col]) is a land, updates cell value to '0'
 *              and recursively calls mapIsland for each adjacent point to reset these
 *              accounted-for land points so they are not re-counted as a separate island
 */
const mapIsland = (row, col, grid) => {
  if (!grid[row] || grid[row][col] !== 1) return;
  grid[row][col] = '-1';
  mapIsland(row, col + 1, grid);
  mapIsland(row, col - 1, grid);
  mapIsland(row + 1, col, grid);
  mapIsland(row - 1, col, grid);
};

/**
 * @name numberOfIslands
 * @param {array} grid 
 * @description iterates through each cell in the grid and if the current 
 *              cell is a land increment our island count and invoke our 
 *              mapIsland helper function to recursively traverse through 
 *              the grid and mark any other points on the grid that are part 
 *              of this island as -1 so they are not counted as separate islands.
 *              utilizes mapIsland helper function to rule out any lands that are part of
 *              an already accounted-for island as a separate island.
 * @returns {number} count of distinct islands in the grid param
 */
const numberOfIslands = grid => {
  // initialize variables
  let count = 0;
  let row = 0;
  let col = 0;
  // run this functionality while we're still looking at a valid cell
  while (grid[row] && grid[row][col] !== undefined) {
    if (parseInt(grid[row][col]) === 1) {
      count++;
      mapIsland(row, col, grid);
    }
    // move to the beginning of the next row if we're at the end of our current row
    if (col + 1 > (grid[row].length - 1)) {
      row++;
      col = 0;
    }
    // otherwise, move on to the next cell in the row
    else col++;
  }
  return count;
};

// console.log('Expected: 3, Actual: ', numberOfIslands([
//   [1,1,0,0,0],
//   [1,1,0,0,0],
//   [0,0,1,0,0],
//   [0,0,0,1,1]
// ]));

// console.log('Expected: 2, Actual: ', numberOfIslands([
//   [0, 0, 1, 0, 0],
//   [0, 1, 1, 0, 0],
//   [0, 0, 1, 1, 0],
//   [1, 0, 0, 0, 0]
// ]));

// console.log('Expected: 1, Actual: ', numberOfIslands([
//   [1,1,1,1,0],
//   [1,1,0,1,0],
//   [1,1,0,0,0],
//   [0,0,0,0,0]
// ]));
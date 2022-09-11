export const getMinimumPath = (pyramid) => {
  let memo;

  for (let rowIndex = pyramid.length - 1; rowIndex >= 0; --rowIndex) {
    if (memo) {
    /**
     * 
     * In each iteration after the first one, we go through each item in the current row. 
     * In the memoized array, we lookup the 2 adjacent children of the currently visited 
     * item. 
     * 
     * We then add the current items value and the child with smallest value from the 
     * memoized array. 
     * 
     * The result of this will overwrite the item in the memoized array with the same 
     * index as the curently visited item. 
     * 
     */
    for (let rowItemIndex = 0; rowItemIndex < pyramid[rowIndex].length; ++rowItemIndex) {        
      const parentItem = pyramid[rowIndex][rowItemIndex];
      const leftChild = memo[rowItemIndex];
      const rightChild = memo[rowItemIndex + 1];

      memo[rowItemIndex] = parentItem + Math.min(leftChild, rightChild);
    }
    } else {
      /**
       * The first iteration we add the whole bottom row of the pyramid to memo
       */
      memo = pyramid[rowIndex];
    }
  }

  return memo.shift();
}
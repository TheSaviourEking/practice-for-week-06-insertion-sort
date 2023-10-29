// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
  /*
  Pseudocode:

  Copy the original array
  Create an array to store the sorted values
  While the array is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Pop a value from the array
  - Create a new spot at the end of the array with null to help with comparisons
  - Walk through the sorted array in reverse order
  - Check if the value to the left is smaller than the new value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  Return the sorted array
  */

  // Your code here
  // [[2, 4, 6, 8, 1, 3, 5, 7, 9] ==============> []
  const copyArr = [...arr];
  const sorted = [];

  while (copyArr.length) {
    console.log(sorted.join(','));
    let key = copyArr.pop();

    // sorted.push(null);
    let i = sorted.length - 1;
    // for (i; i > -1 && sorted[i] > key; i--) {
    //   sorted[i + 1] = sorted[i];
    // }
    while (i > -1 && sorted[i] > key) {
      sorted[i + 1] = sorted[i];

      i--;
    }
    sorted[i + 1] = key;
  }

  return sorted
}
let arr = [2, 4, 6, 8, 1, 3, 5, 7, 9];
// insertionSort(arr)
// console.log(insertionSort(arr))
// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  /*
  Pseudocode:

  Set a pointer dividing the array into sorted and unsorted halves
  Repeat while the unsorted half is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Grab the first value from the unsorted half
  - For each value starting from the divider,
  - Check if the value to the left is smaller than the unsorted value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  - Increment the dividing pointer and repeat
  Return the mutated array
  */

  // Your code here
  let sorted = arr;
  let divider = 0;

  while (divider + 1 <= sorted.length - 1) {
    console.log(sorted.join(','));
    let temp = sorted[divider + 1];

    let i = divider;
    while (i > -1 && sorted[i] > temp) {
      sorted[i + 1] = sorted[i];

      i--;
    }
    sorted[i + 1] = temp;

    divider++
  }
  return sorted;
}

module.exports = [insertionSort, insertionSortInPlace];

/**
 * for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let key = arr[i]
    console.log(sorted.join(','));

    while (j >= 0 && sorted[j] > key) {
      // console.log(sorted.join(','));
      // let temp = 
      sorted[j + 1] = sorted[j];

      j--;
    }

    sorted[j + 1] = key;
  }
 */

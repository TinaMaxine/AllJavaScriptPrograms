/**
 * It sorts the array, then iterates through the array, counting the number of times each element
 * appears, and returns the element that appears the most.
 * @param arr - The array of numbers
 * @param n - the number of elements in the array
 * @returns The most frequent number in the array.
 */
function mostFrequent(arr, n) {
  
  arr.sort();

  let max_count = 1,
    res = arr[0];
  let curr_count = 1;

  for (let i = 1; i < n; i++) {
    if (arr[i] == arr[i - 1]) curr_count++;
    else curr_count = 1;

    if (curr_count > max_count) {
      max_count = curr_count;
      res = arr[i - 1];
    }
  }

  return res;
}


var arr = [40, 50, 30, 40, 50, 30, 30, 1, 2, 2, 2, 2, 3, 3, 3, 3];
var n = arr.length;
console.log(mostFrequent(arr, n));

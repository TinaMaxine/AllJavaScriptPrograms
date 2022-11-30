/**
 * For each element in the array, if the element is already in the object, increment the value of the
 * element by 1, otherwise, add the element to the object and set the value to 1.
 * @param a - the array to be counted
 */

function count_duplicate(a) {
  let counts = {};

  for (let i = 0; i < a.length; i++) {
    if (counts[a[i]]) {
      counts[a[i]] += 1;
    } else {
      counts[a[i]] = 1;
    }
  }
  for (let prop in counts) {
    if (counts[prop] >= 2) {
      console.log(prop + " counted: " + counts[prop] + " times.");
    }
  }
  console.log(counts);
}

const a = [4, 3, 6, 3, 4, 3];
count_duplicate(a);

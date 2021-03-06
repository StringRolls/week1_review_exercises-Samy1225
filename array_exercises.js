// --------ARRAYS--------

// Exercise 1:
// Write a function that takes as a first argument the number of times you want to repeat certain value and
// the value you want to repeat as the second argument. Then it should return a new array with the given values.
// Example:
// fill(3, 'a'); // expected output => ['a', 'a', 'a']
function manyTimes(string, times) {
  const repeatString = [];

  for (let i = 0; i < times; i++) {
    repeatString.push(string);
  }
  return repeatString;
}
console.log(manyTimes("samy", 4));

// Exercise 2:
// Write a function that takes an array as the only argument and reverts it. Avoid using array.prototype.reverse().
// Example:
// reverse([1,2,3]); // expected output => [3,2,1]

function reverso(arrRevers) {
  const readReverse = [];
  for (let i = arrRevers.length - 1; i >= 0; i--) {
    readReverse.push(arrRevers[i]);
  }
  return readReverse;
}

console.log(reverso([5, 7, 8]));

// Exercise 3:
// Write a function that clears an array from all unnecessary elements (false, undefined, empty strings, 0, null).
// Example:
// compact([0, 1, false, 2, undefined, '', 3, null]); // expected output => [1,2,3]

function clearArray(arr) {
  const array = arr.filter((value) => {
    return (
      (value !== false) & (value !== 0) &&
      value !== undefined &&
      value !== "" &&
      value !== null
    );
  });
  return array;
}
console.log(clearArray([0, 1, false, 2, undefined, "", 3, null]));

/*const dirtyArr = [0, 1, false, 2, undefined, "", 3, null];

function arrClear(arr) {
  const clearArr = arr.filter(item => !isNaN(parseInt(item)))

  return clearArr;
  */

// Exercise 4:
// Write a function that takes as an argument an array of arrays and returns an object composed of key-value pairs.
// Example:
// formPairs([['a', 1],['b', 2]]); // expected output => { a: 1, b: 2}

const arrPairs = [
  ["a", 1],
  ["b", 2],
];

function arrayToObject(arr) {
  const arrNewObj = Object.fromEntries(arr);
  return arrNewObj;
}
console.log(arrayToObject(arrPairs));

// Exercise 5:
// Write a function that takes an array as a first argument and then two values as the second and third argument.
// It should return an array without the two values passed as arguments.
// Example:
// without([1,2,3,1,2], 1, 2); // expected output => [3]
const values = [1, 2, 3, 1, 2];
function withoutValues(arr, val1, val2) {
  const repeatValue = arr.filter((value) => {
    return value !== val1 && value !==val2;
  });
  return repeatValue
}
console.log(withoutValues([1,2,3,1,2], 1, 2))
// Exercise 6:
// Write a function that takes two arrays as arguments and compares if they are identical.
// Example:
// isEqual([1, 2, 3, 4],[1, 2, 3, 4]) // expected output => true
// isEqual([1, 2, 3, 4],[1, 2, 3, 4, 5]) // expected output => false

function isEqual(firstArray, secondArray) {
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray.length !== secondArray.length) return false;

    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
}
console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4]));

// Bonus ?????Exercise 7:
// Write a function that takes an array as the first argument and a number as the second argument.
// It should return the array split into parts of the determined size.
// Example:
// chunk([1, 2, 3, 4, 5, 6, 7], 2); // expected output => [[1, 2], [3, 4], [5, 6], [7]]

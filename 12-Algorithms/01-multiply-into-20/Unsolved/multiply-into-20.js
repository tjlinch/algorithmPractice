// Write a function that takes in an array of numbers.
// If two or more numbers in the array can be multiplied into 20, return true, otherwise, return false
const multiplyInto20 = function(arr) {
 
  // declare an empty array that will hold the factors needed to test against the array, and determine if two numbers multiply into 20.
  const testNums = [];

  // loop through the array, dividing each element by 20 to find its matching factor.
  for ( i = 0; i < arr.length; i++ ) {
    let factor = 20 / arr[i];

    // if the factor has been added to the array, that means two numbers in the array multiply into 20, and then return true out of the function. Else, push the number in the array into the test array as a matching factor.
    if (testNums.includes(factor)) {
      return true;
    } else {
      testNums.push(arr[i]);
    }
  }
  // if we exit the for loop without finding a match and returning true, return false.
  return false;
};

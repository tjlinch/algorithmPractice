// Write code to create a function that accepts an array of integers sorted in ascending (increasing) order and returns a new array containing the squares of each number in ascending order

var sortedSquares = function(arr) {
    // declare a new empty array that will hold the updated values.
    const unsortedNewArr = []

    // loop through the array, multiplying each value by itself. Then push the new values into the unsorted array.
    for ( i = 0; i < arr.length; i++ ) {
        const newValue = arr[i] * arr[i];
        unsortedNewArr.push(newValue);
    }

    // return the unsorted array with a sort method and compare function to sort the new values of the returned array.
    return unsortedNewArr.sort(function(a, b){return a-b});
};

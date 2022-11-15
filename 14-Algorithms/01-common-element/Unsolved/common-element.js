// Write code to create a function that accepts two arrays of numbers
// There will be one number common to both arrays
// Return the common number
// You may not use the `indexOf` or `includes` method

var commonElement = function(arrA, arrB) {
    // merge and sort the two arrays to find if two elements next to eachother are strictly equal.
    const mergedArr = [...arrA, ...arrB].sort((a, b) => a - b);
    
    // loop through the merged array. If an element of the array is strictly equal to the element that came before, return that element.
    for ( i = 0; i < mergedArr.length; i++ ) {
        if (mergedArr[i] === mergedArr[i-1]) {
            return mergedArr[i];
        }
    }
};

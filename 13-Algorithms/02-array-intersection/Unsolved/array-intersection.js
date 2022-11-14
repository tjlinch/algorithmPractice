// Write code to create a function that accepts two arrays of numbers
// Return a new array containing the intersecting elements of the arrays

var arrayIntersection = function(arr1, arr2) {
    // declare an empty array to hold any intersecting elements from the two given arrays.
    const intersectingArr = [];

    // loop through the first array. If an element matches an element contained in the second array, that element is pushed into the empty array.
    for ( i = 0; i < arr1.length; i++ ) {
        if (arr2.includes(arr1[i])) {
            intersectingArr.push(arr1[i]);
        }
    }

    return intersectingArr;
};

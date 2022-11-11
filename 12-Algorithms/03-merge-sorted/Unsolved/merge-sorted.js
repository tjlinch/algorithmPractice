// Write code to merge two sorted arrays into a new sorted array

var mergeSorted = function (arr1, arr2) {
    
    // declare a new array containing the two given arrays using the spread operator.
    const mergedArr = [...arr1, ...arr2];

    // return the sorted merged array using the .sort() method with a compare function
    return mergedArr.sort(function(a, b){return a-b});
};

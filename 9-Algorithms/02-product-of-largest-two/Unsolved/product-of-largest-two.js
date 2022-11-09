// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = function(arr) {
    
    const sortedArr = arr.sort(function(a, b){return a-b});
    const product = sortedArr[arr.length -1] * sortedArr[arr.length - 2];
    return product;

};

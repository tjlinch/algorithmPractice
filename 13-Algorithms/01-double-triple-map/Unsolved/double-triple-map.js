// Write code to create a function that accepts an array of numbers and returns a new array that corresponds to the original array
// If a element in the original array is even, the element at the same index in the new array should be double the original element
// If an element in the original array is odd, the element at the same index of the new array should be triple the original element

var doubleTripleMap = function(arr) {
    // declare a new empty array to be returned after exiting the for loop
    const newArray = [];

    // loop through the array. If an element in the array is divisible by two with no remainder, then the element is even, and its value is doubled and pushed into the new array. Else, the number is odd and it is tripled before being pushed into the new array.
    for ( i = 0; i < arr.length; i++ ) {
        if (arr[i] % 2 === 0 ) {
            newArray.push(arr[i] * 2);
        } else {
            newArray.push(arr[i] * 3);
        }
    }

    return newArray;
};

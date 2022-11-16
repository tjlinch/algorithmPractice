// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

const reverse = (str) => {
    
    // split the given string into an array to be looped through.
    // declare an empty array that will hold the reversed string.
    const strArr = str.split('');
    const reverseArr = [];
    
    // loop through the string array backwards, pushing each character into the reverseArr.
    for ( i = strArr.length - 1; i >= 0; i-- ) {
        reverseArr.push(strArr[i]);
    }

    // join the array and return the reversed string.
    return reverseArr.join('');
};

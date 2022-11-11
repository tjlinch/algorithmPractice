// Write code to create a function that accepts a string containing only 0s and 1s
// Return true if there are an equal number of 0s and 1s
// Else return false

var zeroesAndOnes = function(str) {
    // split the string into an array so we can iterate trhough it
    const strArr = str.split('');

    // set count variables to 0
    let count0 = 0;
    let count1 = 0;
    
    for ( i = 0; i < strArr.length; i++ ) {
        
        // while iterating through the string array, update the count variables
        if (strArr[i] === '0') {
            count0 = count0 + 1;
        } else {
            count1 = count1 + 1;
        }
    }

    // compare the two count variables. If they are equal, return true. Else return false.
    if ( count0 === count1 ) {
        return true;
    } else {
        return false;
    }
};

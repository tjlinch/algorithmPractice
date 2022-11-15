// Write code to create a function that accepts two strings
// Return true if the second string is a substring of any permutation of the first string
// Else return false

var permutationSubstring = function(str, sub) {
    // split the substring into an array to perform a for loop
    const subArr = sub.split('');

    // in the loop, if an element in the substring is not included in the string, return flase;
    for ( i = 0; i < subArr.length; i++ ){
        if (!str.includes(subArr[i])){
            return false;
        }
    }

    // if we exit the for loop without hitting the condition, return true.
    return true;
};

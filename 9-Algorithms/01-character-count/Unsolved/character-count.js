// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

var characterCount = function(str) {
    const counts = {};
    const strArr = str.split('');
    
    for ( i = 0; i < strArr.length; i++ ) {
        let char = strArr[i];
        // console.log(char);
        if (char in counts) {
            counts[char] = counts[char] + 1;
        } else {
            counts[char] = 1;
        }
    }
    
    return counts;
};

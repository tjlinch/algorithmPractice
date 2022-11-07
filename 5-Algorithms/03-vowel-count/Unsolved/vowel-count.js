// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
    
    if (!str) {
        return 0;
    }
    
    const count = str.match(/[aeiou]/gi).length;

    return count;
};

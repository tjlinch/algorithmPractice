// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function(arr) {
    sortedArr = arr.sort();
    for( i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] === sortedArr[i-1]) {
            return false;
        }
    } return true;
};

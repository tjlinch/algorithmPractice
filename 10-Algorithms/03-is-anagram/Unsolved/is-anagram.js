// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

var isAnagram = function(strA, strB) {

    const sortedStrA = strA.split("").sort().join("");
    const sortedStrB = strB.split("").sort().join("");

    if (sortedStrA === sortedStrB) {
        return true;
    } return false;
};

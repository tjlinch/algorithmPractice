// Write a function that takes two strings and returns true if every word found in the second string is present in the first string. You will be checking for both words and their frequency. Assume you'll need to worry about casing, but the strings won't contain any punctuation. Assume neither string will be empty

var concertFlyer = function (magazine, flyer) {
    // convert the magazine and flyer strings into arrays to use a loop and the .includes method.
    const flyerArr = flyer.toLowerCase().split(' ');
    const magazineArr = magazine.toLowerCase().split(' ');

    // loop through the flyer array and if an element is not included in the magazine string return false.
    for ( i = 0; i < flyerArr.length; i++ ) {
        if (!magazineArr.includes(flyerArr[i])){
            return false;
        }
    }

    // if we exit the for loop without hitting the condition, return true.
    return true;
};

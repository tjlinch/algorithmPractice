// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function(str) {
    const text = str.toLowerCase().split(' ').map((words) => words.charAt(0).toUpperCase() + words.substring(1)).join(' ');
    return text;
};

// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(match, index) {
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
    }).replace(/\s+/g, "");
};

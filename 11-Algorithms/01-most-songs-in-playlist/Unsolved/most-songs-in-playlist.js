// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

var mostSongsInPlaylist = function(arr) {
  const sortedArr = arr.sort();
  let minutes = 0;
  
  // if the sum of the array of numbers is less than 60, will return the length of the array
  if ( sortedArr.reduce((a, b) => a + b, 0) < 60 ) {
    return sortedArr.length;
  }

  // loop through the array until minutes is greater than or equal to 60, then returns the index position
  for ( i = 0; i < sortedArr.length; i++ ) {
    if ( minutes < 60 ) {
      minutes = minutes + sortedArr[i];
    } else if ( minutes > 60 ) {
      minutes = minutes - sortedArr[i];
      return i - 1;
    } else return i;
  }
};

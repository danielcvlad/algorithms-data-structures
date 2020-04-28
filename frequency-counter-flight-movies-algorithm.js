// find 2 movies in an array that add up EXACTLY to a given flight length

// input
// flightLength: duration of the flight in minutes (integer)
// movieLengths: array of movie times in minutes (array of integers)

// Output
//boolean, true if there exists two movies that add up exactly to the flightLength

//Examples
// flightLength 160
//[80,110,40] => false, because no two movies = 160
//[80,110,80] => true, because 80 + 80 = 160

//BEST WAY - WE CAN LOOK FOR AN ELEMENT IN AN OBJECT IN CONSTANT TIME O(1)
//WE STORE THE VALUE WE WANT TO SEE INSIDE OF AN OBJECT AS A KEY
//WE COMPARE IF THE MOVIE YOU ARE CURRENTLY ITERATING OVER IS INSIDE YOUR OBJECT

function find2Movies(flightLength, movies) {
  // create an object
  let results = {};
  // loop through every movie
  for (let i = 0; i < movies.length; i++) {
    // If current movie is inside your object
    if (results[movies[i]]) {
      // Then return true
      return true;
    }
    // Otherwise, add the movie that would pair with our current
    // movie to our object
    // We know what that movie's length should be by
    // subtracting the current movie's length from the flight length
    let result = flightLength - movies[i];
    results[result] = true;
  }

  // If you went through the loops and didn't find any movies that
  // add up EXACTLY to a given flight length, return false
  return false;
}

find2Movies([160], [80, 110, 80]);

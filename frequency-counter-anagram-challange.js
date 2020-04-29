//Given two strings, write a function to determine if the second one is an anagram of the first. ANAGRAM = word, phrase or name formed by rearranging the letters to another order, such as cinema formed from iceman\

//FREQUENCY PATTERN - WE ARE LOOKING FOR O(n) TIME COMPLEXITY

//create function
function validAnagram(first, second) {
  //check if first word length is equal to second word length
  if (first.length !== second.length) {
    //if not, we return false
    console.log(`${first} and ${second} are not anagrams`);
  }

  //create an empty object
  const lookup = {};

  //loop through the first word - creating an array
  for (let i = 0; i < first.length; i++) {
    //assign to a variable each index of the array for every iteration
    let letter = first[i];
    //if letter exists inside the object, increment counter, otherwise set to 1 => TERNARY OPERATOR
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  //console log object
  console.log(lookup);
  //loop through second word - creating an array
  for (let i = 0; i < second.length; i++) {
    //assign to a variable each index of the array for every iteration
    let letter = second[i];

    // can't find letter or letter is zero then it's not an anagram
    //using an if statement with negation
    if (!lookup[letter]) {
      //return false
      return false;
    } else {
      //subtract value to reach 0
      lookup[letter] -= 1;
    }
  }
  //return true
  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
validAnagram("iceman", "cinema");

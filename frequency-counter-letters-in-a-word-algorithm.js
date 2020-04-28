//letter frequency counter

//create a string variable
str = "madam";
//create empty object
let letterCount = {};
//loop through every letter in the string
for (let i = 0; i < str.length; i++) {
  //if the ltter is a key inside the object
  if (letterCount[str[i]]) {
    //add 1 to the counter
    letterCount[str[i]] += 1;
  } else {
    //otherwise, create a new counter for that new letter
    letterCount[str[i]] = 1;
  }
  //print in the console
  console.log(letterCount);
}

// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// From Developer Matt
// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe('shuffleArray', () => {
  it('takes in an array, removes the first item from the array and shuffles the remaining content.', () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"
]
    expect(shuffleArray(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]));
    expect(shuffleArray(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]));
  });
});
// Fail
// ReferenceError: shuffleArray is not defined

// b) Create the function that makes the test pass.

// Psedocode
// input: array
// output: an array with the first item removed and the remaining contents shuffled
// process: I will create a function called shuffleArray that will shift the array to remove the first value, then shuffle the array using the Fisher-Yates Shuffle that I researched. The Fisher-Yates Shuffle algorithm performs swapping a random element in the array with the last element in the array over and over again. It selects a random index number in the given array and swaps that element with the last index element. It does it again, but leaves the previous element out of selection.
const shuffleArray = (array) => {
  array.shift()
  // console.log("array", array)
  let currentIndex = array.length, randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] =
    [array[randomIndex], array[currentIndex]]
  }
  // console.log("final array", array)
  return array
}
// PASS  ./code-challenges.test.js
// shuffleArray
// ✓ takes in an array, removes the first item from the array and shuffles the remaining content. (3 ms)

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.
// From Developer Aileen

// a) Create a test with expect statements for each of the variables provided.

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

describe ("tallyVotes", (votes) => {
  it ("takes in an object that contains up votes and down votes and returns the end tally", () => {
expect(tallyVotes(votes1)).toEqual(11)
expect(tallyVotes(votes2)).toEqual(-31)
  })
})
// RED FAIL -
// FAIL  ./code-challenges.test.js
//   ReferenceError: tallyVotes is not defined

// b) Create the function that makes the test pass.
// Pseudocode
// Input: object with upvote/downvote values.
// Output: number that is the difference of the first value in an object and the second value in the object.
// Process: create a function called tallyVotes that accesses two values in an object
// votes is the parameter
// return votes.upVotes minus votes.downVotes;
// subtracts the second value from the first value. Have it return the difference.

const tallyVotes = (votes) => {
  return votes.upVotes - votes.downVotes
}
// GREEN PASS -
// PASS  ./code-challenges.test.js
// tallyVotes

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.
// From Developer James
// a) Create a test with an expect statement using the variables provided.

const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

describe ("arrayCombiner", () => {
  it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
    expect(arrayCombiner(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})

// b) Create the function that makes the test pass.

// PSEUDOCODE

// Input: two arrays
// Output: array with no duplicate values

// Create a function called "arrayCombiner" with parameters for two arrays
// Combine both arrays
// Create a "Set" object so only unique values remain from the combined arrays
// Use the spread operator to create a new array from the unique values

const arrayCombiner = (array1, array2) => {
  let combinedArray = array1.concat(array2)
  return [...new Set(combinedArray)]
}
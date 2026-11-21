// Task 4:
// Create a web page that:
// 1.Has an array: let colors = ["red", "blue", "green", "yellow"];
// 2.Use splice() to replace "green" with "purple".
// 3.Then use slice() to make a new array with the first two colors.
// 4.Show both arrays in the console.

let colors = ["red", "blue", "green", "yellow"];

// Replacing "green" with "purple" using splice()
// array.splice(startIndex, deleteCount, itemtoreplace);
colors.splice(2, 1, "purple");
console.log(colors);

// Creating a new array containing the first two colors using slice()
// array.slice(start, end); where end index is exclusive
let newColors = colors.slice(0, 2);
console.log(colors);
console.log(newColors);
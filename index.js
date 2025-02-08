// Objective:

// Learn how to initialize an array in JavaScript with different types of values, including numbers, strings, and booleans.

// Instructions:

// Initialize an Array:

// Create an array called myArray containing the following values in order: 42, "Hello, world!", true, 3.14, "JavaScript".
// Print the Array:

let myArray = [42, 'Hello, world', true, 3.14, 'Javascript'];

console.log(myArray);

// Use console.log to print the array to the console.
// Access Array Elements:

console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);
//  and print each element of the array individually using its index.
// Bonus points if you use a for loop!
// Modify an Array Element:

// Change the value of the second element (index 1) to "Changed value", and print the array again to see the change.

myArray[1] = 'Changed value';

console.log(myArray);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Push, pop, shift and unshift
// Objective:

// Learn how to use the .push, .pop, .shift, and .unshift methods to manipulate arrays in JavaScript.

// Instructions:

// Initialize an Array:

// Create an array called myArray containing the following values in order: 1, 2, 3, 4, 5.
// Add Elements to the End of the Array:
const myArray = [1, 2, 3, 4, 5]; // Initialize an array

// Use the .push method to add the values 6 and 7 to the end of the array.
// Print the array to the console.

const newLength1 = myArray.push(6, 7); // Adds 6 and 7 to the array, returns the new length

onsole.log('Updated Number', myArray); // Prints the updated array: [1, 2, 3, 4, 5, 6, 7]
console.log('New length', newLength1); // Prints the new length of the array: 7

// Remove the Last Element from the Array:

// Use the .pop method to remove the last element of the array.
// Print the array to the console.
// Remove the First Element from the Array:

// Use the .shift method to remove the first element of the array.
// Print the array to the console.
// Add Elements to the Beginning of the Array:

// Use the .unshift method to add the values 0 and -1 to the beginning of the array.
// Print the array to the console.

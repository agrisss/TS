// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result

const add = (a: number, b: number): number => a + b;

console.log(add(1, 2)); // Output: 3
console.log(add(6, 5)); // Output: 11
console.log(add(99, 1)); // Output: 100

// Write a function that takes a value as argument
// Return the type of the value

function myFunction(value: unknown): string {
  return typeof value;
}

console.log(myFunction(1)); // Output: 'number'
console.log(myFunction(false)); // Output: 'boolean'
console.log(myFunction({})); // Output: 'object'
console.log(myFunction(null)); // Output: 'object'
console.log(myFunction("strin")); // Output: 'string'
console.log(myFunction(["array"])); // Output: 'object'

// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type

function myFunction2(a: unknown, b: unknown): boolean {
  return a === b;
}

console.log(myFunction2(2, 3)); // Output: false
console.log(myFunction2(3, 3)); // Output: true
console.log(myFunction2(1, "1")); // Output: false
console.log(myFunction2("10", "10")); // Output: true

// Write a function that takes a string (a) and a number (n) as arguments
// Return the nth character of 'a'

function myFunction3(a: string, n: number): string {
  if (n >= 1 && n <= a.length) {
    return a[n - 1];
  }
  return ""; // Return an empty string if n is out of range
}

console.log(myFunction3("abcd", 1)); // Output: 'a'
console.log(myFunction3("zyxbwpl", 5)); // Output: 'w'
console.log(myFunction3("gfedcba", 3)); // Output: 'e'

// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result

function myFunction4(a: string): string {
  if (a.length >= 3) {
    return a.slice(3);
  }
  return a;
}

console.log(myFunction4("abcdefg")); // Output: 'defg'
console.log(myFunction4("1234")); // Output: '4'
console.log(myFunction4("fgedcba")); // Output: 'dcba'

//Write a function that takes a string as argument
//Extract the last 3 characters from the string
//Return the result

function myFunction5(a: string): string {
  if (a.length >= 3) {
    return a.slice(-3);
  }
  return a;
}

console.log(myFunction5("abcdefg")); //Output: 'efg'
console.log(myFunction5("1234")); //Output: '234'
console.log(myFunction5("fgedcba")); //Output: 'cba"

//Write a function that takes a string (a) as argument
//Get the first 3 characters of a
//Return the result

function myFunction6(a: string): string {
  return a.substring(0, 3);
}

console.log(myFunction6("abcdefg")); // Expected output: 'abc'
console.log(myFunction6("1234")); // Expected output: '123'
console.log(myFunction6("fgedcba")); // Expected output: 'fge'

//Write a function that takes a string (a) as argument
//Extract the first half a
//Return the result

function myFunction7(a: string): string {
  return a.substring(0, Math.ceil(a.length / 2)); //The Math.ceil() static method always rounds up and returns the smallest integer greater than or equal to a given number.
}

console.log(myFunction7("abcdefgh")); //Expected 'abcd'

console.log(myFunction7("1234")); // Expected '12'

console.log(myFunction7("gedcba")); //Expected'ged'

//Write a function that takes a string (a) as argument
//Remove the last 3 characters of a
//Return the result

function myFunction8(a: string): string {
  return a.slice(0, -3);
}

console.log(myFunction8("abcdefg")); //Expected'abcd'

console.log(myFunction8("1234")); //Expected'1'

console.log(myFunction8("fgedcba")); //Expected'fged'

//Write a function that takes a string (a) as argument
//Remove the last 3 characters of a
//Return the result

function myFunction9(a: number, b: number): number {
  return (b / 100) * a;
}
console.log(myFunction9(100, 50));
//Expected
//'50'

console.log(myFunction9(10, 1));
//Expected
//'0.1'

console.log(myFunction9(500, 25));
//Expected
//'125'

//Write a function that takes 6 values (a,b,c,d,e,f) as arguments
//Sum a and b
//Then substract by c
//Then multiply by d and divide by e
//Finally raise to the power of f and return the result
//Tip: mind the order

function myFunction10(
  a: number,
  b: number,
  c: number,
  d: number,
  e: number,
  f: number
): number {
  return (((a + b - c) * d) / e) ** f;
}
console.log(myFunction10(6, 5, 4, 3, 2, 1)); //10.5
console.log(myFunction10(6, 2, 1, 4, 2, 3)); //2744
console.log(myFunction10(2, 3, 6, 4, 2, 3)); //-8

//Write a function that takes a number as argument
//If the number is even, return true
//Otherwise, return false

function myFunction11(num: number): boolean {
  return num % 2 === 0;
}

console.log(myFunction11(10)); // Output: true
console.log(myFunction11(-4)); // Output: true
console.log(myFunction11(5)); // Output: false
console.log(myFunction11(-111)); // Output: false

//Write a function that takes two strings (a and b) as arguments
//Return the number of times a occurs in b

function myFunction12(a: string, b: string): number {
  let count = 0;
  for (let i = 0; i < b.length; i++) {
    if (b[i] === a) {
      count++;
    }
  }
  return count;
}

console.log(
  myFunction12("m", "how many times does the character occur in this sentence?")
); // Expected output: 2
console.log(
  myFunction12("h", "how many times does the character occur in this sentence?")
); // Expected output: 4
console.log(
  myFunction12("?", "how many times does the character occur in this sentence?")
); // Expected output: 1
console.log(
  myFunction12("z", "how many times does the character occur in this sentence?")
); // Expected output: 0

//Write a function that takes a number (a) as argument
//If a is a whole number (has no decimal place), return true
//Otherwise, return false

function myFunction13(a: number): boolean {
  return a === Math.floor(a);
}

console.log(myFunction13(4)); //true

console.log(myFunction13(1.123)); //false

console.log(myFunction13(1048)); //true

console.log(myFunction13(10.48)); //false

//Write a function that takes two numbers (a and b) as arguments
//If a is smaller than b, divide a by b
//Otherwise, multiply both numbers
//Return the resulting value

function myFunction14(a: number, b: number) {
  if (a < b) {
    return a / b;
  } else {
    return a * b;
  }
}

console.log(myFunction14(10, 100)); //0.1

console.log(myFunction14(90, 45)); //4050

console.log(myFunction14(8, 20)); //0.4

console.log(myFunction14(2, 0.5)); //1

//Write a function that takes two strings (a and b) as arguments
//If a contains b, append b to the beginning of a
//If not, append it to the end
//Return the concatenation

function myFunction15(a: string, b: string) {
  if (a.includes(b)) {
    return b + a;
  } else {
    return a + b;
  }
}

console.log(myFunction15("cheese", "cake")); //'cheesecake'

console.log(myFunction15("lips", "s")); //'slips'

console.log(myFunction15("Java", "script")); //'Javascript'

console.log(myFunction15(" think, therefore I am", "I")); //'I think, therefore I am'

//Write a function that takes a number (a) as argument
//Round a to the 2nd digit after the comma
//Return the rounded number

function myFunction16(a: number) {
  return Math.round(a * 100) / 100;
}

console.log(myFunction16(2.12397)); //2.12

console.log(myFunction16(3.136)); //3.14

console.log(myFunction16(1.12397)); //1.12

console.log(myFunction16(26.1379)); //26.14

//Write a function that takes a number (a) as argument
//Split a into its individual digits and return them in an array
//Tip: you might want to change the type of the number for the splitting
//???????

function myFunction17(number: number) {
  const digits = number.toString().split("").map(Number);
  return digits;
}

console.log(myFunction17(10)); //[1,0]

console.log(myFunction17(931)); //[9,3,1]

console.log(myFunction17(193278)); //[1,9,3,2,7,8]

//???????

//It seems like something happened to these strings
//Can you figure out how to clear up the chaos?
//Write a function that joins these strings together such that they form the following words:
//'Javascript', 'Countryside', and 'Downtown'
//You might want to apply basic JS string methods such as replace(), split(), slice() etc.
//Used ChatGPT on these ones
function myFunction18(str1: string, str2: string): string {
  const word1: string = str1.replace("%", "") + str2.slice(2);
  return word1.charAt(0).toUpperCase() + word1.slice(1);
}

console.log(myFunction18("java", "tpi%rcs")); //'Javascript'

console.log(myFunction18("c%ountry", "edis")); //'Countryside'

console.log(myFunction18("down", "nw%ot")); //'Downtown'

//This challenge is a little bit more complex
//Write a function that takes a number (a) as argument
//If a is prime, return a
//If not, return the next higher prime number
//Used ChatGPT on these ones

function isPrime(num: number): boolean {
  if (num <= 1) return false;
  if (num === 2) return true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function Function19(num: number): number {
  let next = num + 1;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    if (isPrime(next)) {
      return next;
    }
    next++;
  }
}

function myFunction19(a: number): number {
  if (isPrime(a)) {
    return a;
  } else {
    return Function19(a);
  }
}

console.log(myFunction19(38)); //41

console.log(myFunction19(7)); //7

console.log(myFunction19(115)); //127

console.log(myFunction19(2000)); //2003

//Write a function that takes two numbers, say x and y, as arguments
//Check if x is divisible by y
//If yes, return x
//If not, return the next higher natural number that is divisible by y

function myFunction20(x: number, y: number): number {
  if (x % y === 0) {
    return x;
  } else {
    return Math.ceil(x / y) * y;
  }
}

console.log(myFunction20(1, 23)); //23

console.log(myFunction20(23, 23)); //23

console.log(myFunction20(7, 3)); //9

console.log(myFunction20(-5, 7)); //0

//Write a function that takes two strings (a and b) as arguments
//Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
//Return the resulting string

function myFunction21(a: string, b: string): string {
  const arr = a.split("");
  for (let i = arr.length - 3; i > 0; i -= 3) {
    arr.splice(i, 0, b);
  }
  return arr.join("");
}

console.log(myFunction21("1234567", ".")); //'1.234.567'

console.log(myFunction21("abcde", "$")); //'ab$cde'

console.log(myFunction21("zxyzxyzxyzxyzxyz", "w")); //zwxyzwxyzwxyzwxyzwxyz'

//Write a function that takes a string as argument
//As it is, the string has no meaning
//Increment each letter to the next letter in the alphabet
//Return the correct word

function myFunction22(inputString: string): string {
  // Convert each character in the string
  const decryptedChars = inputString.split("").map((char) => {
    // Check if the character is a letter
    if (char.match(/[a-zA-Z]/)) {
      // Increment the Unicode value by 1
      const nextCharCode = char.charCodeAt(0) + 1;

      // Determine whether the character is uppercase or lowercase
      const isUpperCase = char === char.toUpperCase();

      // Convert the new Unicode value back to a character
      return String.fromCharCode(
        isUpperCase
          ? ((nextCharCode - 65) % 26) + 65
          : ((nextCharCode - 97) % 26) + 97
      );
    } else {
      // If the character is not a letter, leave it unchanged
      return char;
    }
  });

  // Join the characters back into a string and return
  return decryptedChars.join("");
}

console.log(myFunction22("bnchmf")); //'coding'

console.log(myFunction22("bgddrd")); //'cheese'

console.log(myFunction22("sdrshmf")); //'testing'

// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result

function myFunction23(a: number[]): number[] {
  // Remove the first 3 elements from array 'a'
  const result = a.slice(3);

  // Return the result
  return result;
}

console.log(myFunction23([1, 2, 3, 4])); //[4]

console.log(myFunction23([5, 4, 3, 2, 1, 0])); //[2,1,0]

console.log(myFunction23([99, 1, 1])); //[]

// Write a function that takes an array (a) as argument
// Extract the last 3 elements of a
// Return the resulting array

function myFunction24(a: number[]): number[] {
  const result = a.slice(-3);
  return result;
}

console.log(myFunction24([1, 2, 3, 4])); //[2,3,4]

console.log(myFunction24([5, 4, 3, 2, 1, 0])); //[2,1,0]

console.log(myFunction24([99, 1, 1])); //[99,1,1]

// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array

function myFunction25(a: number[]): number[] {
  // Extract the first 3 elements from array 'a'
  const result = a.slice(0, 3);
  return result;
}

console.log(myFunction25([1, 2, 3, 4])); //[1,2,3]

console.log(myFunction25([5, 4, 3, 2, 1, 0])); //[5,4,3]

console.log(myFunction25([99, 1, 1])); //[99,1,1]

// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a

function myFunction26(a: number[], n: number): number[] {
  // Return the last n elements from array 'a'
  const result = a.slice(-n);
  return result;
}

console.log(myFunction26([1, 2, 3, 4, 5], 2)); //[ 4, 5 ]

console.log(myFunction26([1, 2, 3], 6)); //[ 1, 2, 3 ]

console.log(myFunction26([1, 2, 3, 4, 5, 6, 7, 8], 3)); //[ 6, 7, 8 ]

// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array

function myFunction27(
  a: (number | string | boolean)[],
  b: number | string | boolean
): (number | string | boolean)[] {
  //filter method to create a new array without occurrences of b
  const result = a.filter((element) => element !== b);

  return result;
}
console.log(myFunction27([1, 2, 3], 2)); // Output: [1, 3]
console.log(myFunction27([1, 2, "2"], "2")); // Output: [1, 2]
console.log(myFunction27([false, "2", 1], false)); // Output: ['2', 1]
console.log(myFunction27([1, 2, "2", 1], 1)); // Output: [2, '2']

// Write a function that takes an array (a) as argument
// Return the number of elements in a

function myFunction28(arr: string | number[]) {
  return arr.length;
}

console.log(myFunction28([1, 2, 2, 4])); //4

console.log(myFunction28([9, 9, 9])); //3

console.log(myFunction28([4, 3, 2, 1, 0])); //5

// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array

function myFunction29(arr: number[]) {
  return arr.filter((num: number) => num < 0).length;
}

console.log(myFunction29([1, -2, 2, -4])); //2

console.log(myFunction29([0, 9, 1])); //0

console.log(myFunction29([4, -3, 2, 1, 0])); //1

// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order

function myFunction30(arr: number[]): number[] {
  return arr.slice().sort((a, b) => b - a);
}

console.log(myFunction30([1, 3, 2])); // [3, 2, 1]
console.log(myFunction30([4, 2, 3, 1])); // [4, 3, 2, 1]

// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically
// Return the result

function myFunction31(arr: string[]) {
  return arr.slice().sort();
}

console.log(myFunction31(["b", "c", "d", "a"])); // ['a', 'b', 'c', 'd']
console.log(myFunction31(["z", "c", "d", "a", "y", "a", "w"])); // ['a', 'a', 'c', 'd', 'w', 'y', 'z']

// Write a function that takes an array of numbers as argument
// It should return the average of the numbers

function myFunction32(arr: number[]) {
  if (arr.length === 0) {
    return 0; // Avoid division by zero for an empty array
  }

  const sum = arr.reduce((acc, num) => acc + num, 0);
  return sum / arr.length;
}

console.log(myFunction32([10, 100, 40])); //50

console.log(myFunction32([10, 100, 1000])); //370

console.log(myFunction32([-50, 0, 50, 200])); //50

// Write a function that takes an array of strings as argument
// Return the longest string

function myFunction33(arr: string[]) {
  if (arr.length === 0) {
    return null; // Return null for an empty array
  }

  let longestString = arr[0]; // Assume the first string is the longest

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > longestString.length) {
      longestString = arr[i];
    }
  }

  return longestString;
}

console.log(myFunction33(["help", "me"])); // Expected output: 'help'
console.log(myFunction33(["I", "need", "candy"])); // Expected output: 'candy'

// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

function myFunction34(arr: string[]) {
  if (arr.length === 0) {
    return false; // Return false for an empty array
  }

  const firstElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== firstElement) {
      return false;
    }
  }

  return true;
}

console.log(myFunction34(["true", "true", "true", "true"])); // Expected output: true
console.log(myFunction34(["test", "test", "test"])); // Expected output: true
console.log(myFunction34(["1", "1", "1", "2"])); // Expected output: false
console.log(myFunction34(["10", "10", "10", "10"])); // Expected output: false

// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays

function myFunction35(...arrays: unknown[]): unknown[] {
  return [].concat(...arrays);
}

console.log(myFunction35([1, 2, 3], [4, 5, 6])); // Expected output: [1, 2, 3, 4, 5, 6]
console.log(myFunction35(["a", "b", "c"], [4, 5, 6])); // Expected output: ['a', 'b', 'c', 4, 5, 6]
console.log(myFunction35([true, true], [1, 2], ["a", "b"])); // Expected output: [true, true, 1, 2, 'a', 'b']

// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array

function myFunction36(
  arr: { a: number; b: number }[]
): { a: number; b: number }[] {
  return arr.slice().sort((a, b) => a.b - b.b);
}

console.log(
  myFunction36([
    { a: 1, b: 2 },
    { a: 5, b: 4 },
  ])
); // Expected output: [{a:1, b:2}, {a:5, b:4}]
console.log(
  myFunction36([
    { a: 2, b: 10 },
    { a: 5, b: 4 },
  ])
); // Expected output: [{a:5, b:4}, {a:2, b:10}]
console.log(
  myFunction36([
    { a: 1, b: 7 },
    { a: 2, b: 1 },
  ])
); // Expected output: [{a:2, b:1}, {a:1, b:7}]

// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

function myFunction37(arr1: number[], arr2: number[]): number[] {
  const mergedArray = [...new Set([...arr1, ...arr2])]; // Merge and remove duplicates
  return mergedArray.sort((a, b) => a - b); // Sort in ascending order
}

console.log(myFunction37([1, 2, 3], [3, 4, 5])); // Expected output: [1, 2, 3, 4, 5]
console.log(myFunction37([-10, 22, 333, 42], [-11, 5, 22, 41, 42])); // Expected output: [-11, -10, 5, 22, 41, 42, 333]

// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum

function myFunction38(arr: number[], b: number): number {
  return arr.reduce((sum, num) => (num > b ? sum + num : sum), 0);
}

console.log(myFunction38([1, 2, 3, 4, 5, 6, 7], 2)); // Expected output: 25
console.log(myFunction38([-10, -11, -3, 1, -4], -3)); // Expected output: 1
console.log(myFunction38([78, 99, 100, 101, 401], 99)); // Expected output: 602

// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max

function myFunction39(min: number, max: number): number[] {
  const result: number[] = [];
  for (let i = min; i <= max; i++) {
    result.push(i);
  }
  return result;
}

console.log(myFunction39(2, 10)); // Expected output: [2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(myFunction39(1, 3)); // Expected output: [1, 2, 3]
console.log(myFunction39(-5, 5)); // Expected output: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
console.log(myFunction39(2, 7)); // Expected output: [2, 3, 4, 5, 6, 7]

// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}

function myFunction40(arr: string[]): { [key: string]: string[] } {
  const result: { [key: string]: string[] } = {};

  arr.forEach((str) => {
    const firstLetter = str[0].toLowerCase();
    if (!result[firstLetter]) {
      result[firstLetter] = [str];
    } else {
      result[firstLetter].push(str);
    }
  });

  return result;
}

console.log(myFunction40(["Alf", "Alice", "Ben"])); // Expected output: { a: ['Alf', 'Alice'], b: ['Ben'] }
console.log(myFunction40(["Ant", "Bear", "Bird"])); // Expected output: { a: ['Ant'], b: ['Bear', 'Bird'] }
console.log(myFunction40(["Berlin", "Paris", "Prague"])); // Expected output: { b: ['Berlin'], p: ['Paris', 'Prague'] }

// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array

function myFunction41(arr: unknown[], num: number): unknown[] {
  const result = [num < 6 ? 0 : num, ...arr.slice()];
  return result;
}

console.log(myFunction41([1, 2, 3], 6)); // Expected output: [6, 1, 2, 3]
console.log(myFunction41(["a", "b"], 2)); // Expected output: [0, 'a', 'b']
console.log(myFunction41([null, false], 11)); // Expected output: [11, null, false]

// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array

function myFunction42(arr: number[], n: number): number[] {
  const result: number[] = [];

  for (let i = n - 1; i < arr.length; i += n) {
    result.push(arr[i]);
  }

  return result;
}

console.log(myFunction42([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)); // Expected output: [3, 6, 9]
console.log(myFunction42([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5)); // Expected output: [6, 1]
console.log(myFunction42([7, 2, 1, 6, 3, 4, 5, 8, 9, 10], 2)); // Expected output: [2, 6, 4, 8, 10]

// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country

function myFunction43(obj: { continent: string; country: string }): string {
  return obj.country;
}

console.log(myFunction43({ continent: "Asia", country: "Japan" })); // Expected output: 'Japan'
console.log(myFunction43({ country: "Sweden", continent: "Europe" })); // Expected output: 'Sweden'

// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tip: you might want to use the square brackets property accessor

function myFunction44(obj: { [key: string]: unknown }): unknown {
  return obj["prop-2"];
}

console.log(myFunction44({ one: 1, "prop-2": 2 })); // Expected output: 2
console.log(myFunction44({ "prop-2": "two", prop: "test" })); // Expected output: 'two'

// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string

function myFunction45(obj: { [key: string]: unknown }, key: string): unknown {
  return obj[key];
}

console.log(myFunction45({ continent: "Asia", country: "Japan" }, "continent")); // Expected output: 'Asia'
console.log(
  myFunction45({ country: "Sweden", continent: "Europe" }, "country")
); // Expected output: 'Sweden'

// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise

function myFunction46(obj: { [key: string]: unknown }, key: string): boolean {
  return key in obj;
}

console.log(myFunction46({ a: 1, b: 2, c: 3 }, "b")); // Expected output: true
console.log(myFunction46({ x: "a", y: "b", z: "c" }, "a")); // Expected output: false
console.log(myFunction46({ x: "a", y: "b", z: "c" }, "z")); // Expected output: true

// Write a function that a string (a) as argument
// Create an object that has a property with key 'key' and a value of a
// Return the object

function myFunction47(str: string): { key: string } {
  return { key: str };
}

console.log(myFunction47("a")); // Expected output: { key: 'a' }
console.log(myFunction47("z")); // Expected output: { key: 'z' }
console.log(myFunction47("b")); // Expected output: { key: 'b' }

// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object

function myFunction48(a: string, b: string): { [key: string]: string } {
  const result: { [key: string]: string } = {};
  result[a] = b;
  return result;
}

console.log(myFunction48("a", "b")); // Expected output: { a: 'b' }
console.log(myFunction48("z", "x")); // Expected output: { z: 'x' }
console.log(myFunction48("b", "w")); // Expected output: { b: 'w' }

// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object

function myFunction49(
  keys: (string | number)[],
  values: unknown[]
): { [key: string]: unknown } {
  const result: { [key: string]: unknown } = {};

  keys.forEach((key, index) => {
    result[key.toString()] = values[index];
  });

  return result;
}

console.log(myFunction49(["a", "b", "c"], [1, 2, 3])); // Expected output: { a: 1, b: 2, c: 3 }
console.log(myFunction49(["w", "x", "y", "z"], [10, 9, 5, 2])); // Expected output: { w: 10, x: 9, y: 5, z: 2 }
console.log(myFunction49([1, "b"], ["a", 2])); // Expected output: { '1': 'a', b: 2 }

// Write a function that takes an object (a) as argument
// Return an array with all object keys

function myFunction50(obj: { [key: string]: unknown }): string[] {
  return Object.keys(obj);
}

console.log(myFunction50({ a: 1, b: 2, c: 3 })); // Expected output: ['a', 'b', 'c']
console.log(myFunction50({ j: 9, i: 2, x: 3, z: 4 })); // Expected output: ['j', 'i', 'x', 'z']
console.log(myFunction50({ w: 15, x: 22, y: 13 })); // Expected output: ['w', 'x', 'y']

// Write a function that takes an object (a) as argument
// Return the sum of all object values

function myFunction51(obj: { [key: string]: number }): number {
  return Object.values(obj).reduce((sum, value) => sum + value, 0);
}

console.log(myFunction51({ a: 1, b: 2, c: 3 })); // Expected output: 6
console.log(myFunction51({ j: 9, i: 2, x: 3, z: 4 })); // Expected output: 18
console.log(myFunction51({ w: 15, x: 22, y: 13 })); // Expected output: 50

// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'

function myFunction52(obj: { [key: string]: unknown }): {
  [key: string]: unknown;
} {
  const { b, ...result } = obj;
  return result;
}

console.log(myFunction52({ a: 1, b: 7, c: 3 })); // Expected output: { a: 1, c: 3 }
console.log(myFunction52({ b: 0, a: 7, d: 8 })); // Expected output: { a: 7, d: 8 }
console.log(myFunction52({ e: 6, f: 4, b: 5, a: 3 })); // Expected output: { e: 6, f: 4, a: 3 }

// Write a function that takes two objects as arguments
// Unfortunately, the property 'b' in the second object has the wrong key
// should be named 'd' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'a', 'b', 'c', 'd', and 'e'

/// can't figure it out

// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object

function myFunction53(
  obj: { [key: string]: number },
  multiplier: number
): { [key: string]: number } {
  const result: { [key: string]: number } = {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key] = obj[key] * multiplier;
    }
  }

  return result;
}

console.log(myFunction53({ a: 1, b: 2, c: 3 }, 3)); // Expected output: { a: 3, b: 6, c: 9 }
console.log(myFunction53({ j: 9, i: 2, x: 3, z: 4 }, 10)); // Expected output: { j: 90, i: 20, x: 30, z: 40 }
console.log(myFunction53({ w: 15, x: 22, y: 13 }, 6)); // Expected output: { w: 90, x: 132, y: 78 }

// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

// console.log(myFunction54({ z: 'a', y: 'b', x: 'c', w: 'd' })); // Expected output: { a: 'z', b: 'y', c: 'x', d: 'w' }
// console.log(myFunction54({ 2: 'a', 4: 'b', 6: 'c', 8: 'd' })); // Expected output: { a: '2', b: '4', c: '6', d: '8' }
// console.log(myFunction54({ a: 1, z: 24 }));                   // Expected output: { '1': 'a', '24': 'z' }

// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object

function myFunction54(obj: { [key: string]: string }): {
  [key: string]: string | null;
} {
  const result: { [key: string]: string | null } = {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key].trim(); // Remove leading and trailing whitespaces

      if (value === "" || value === " ") {
        result[key] = null;
      } else {
        result[key] = obj[key];
      }
    }
  }

  return result;
}

console.log(myFunction54({ a: "a", b: "b", c: "" })); // Expected output: { a: 'a', b: 'b', c: null }
console.log(myFunction54({ a: "", b: "b", c: " ", d: "d" })); // Expected output: { a: null, b: 'b', c: null, d: 'd' }
console.log(myFunction54({ a: "a", b: "b ", c: " ", d: "" })); // Expected output: { a: 'a', b: 'b ', c: null, d: null }

// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in

// myFunction({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67})
// Expected
// {fn: 'Lisa', ln: 'Müller', size: '175cm', weight: '67kg'}

// myFunction({fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102})
// Expected
// {fn: 'Martin', ln: 'Harper', weight: '102kg'}

// myFunction({fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71})
// Expected
// {fn: 'Andrew', ln: 'Harper', size: '175cm', weight: '71kg'}

// myFunction({fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de'})
// Expected
// {fn: 'Matthew', ln: 'Müller'}

// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tip: try not to mutate the original array

type myFunction57 = {
  city: string;
  country: string;
};

function addContinent(arr: myFunction57[], continent: string): myFunction57[] {
  return arr.map((obj) => ({
    ...obj,
    continent: continent,
  }));
}

const result1 = addContinent(
  [
    { city: "Tokyo", country: "Japan" },
    { city: "Bangkok", country: "Thailand" },
  ],
  "Asia"
);
console.log(result1);
// Expected output: [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]

const result2 = addContinent(
  [
    { city: "Stockholm", country: "Sweden" },
    { city: "Paris", country: "France" },
  ],
  "Europe"
);
console.log(result2);
// Expected output: [{ city: 'Stockholm', country: 'Sweden', continent: 'Europe' }, { city: 'Paris', country: 'France', continent: 'Europe' }]

// Write a function that takes an array of numbers as argument
// Convert the array to an object
// It should have a key for each unique value of the array
// The corresponding object value should be the number of times the key occurs within the array

function myFunction58(arr: number[]): { [key: number]: number } {
  const result: { [key: number]: number } = {};

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    result[value] = (result[value] || 0) + 1;
  }

  return result;
}

const result = myFunction58([1, 2, 2, 3]);
console.log(result);
// Expected output: {1: 1, 2: 2, 3: 1}

const resultt = myFunction58([9, 9, 9, 99]);
console.log(resultt);
// Expected output: {9: 3, 99: 1}

const resulttt = myFunction58([4, 3, 2, 1]);
console.log(resulttt);
// Expected output: {1: 1, 2: 1, 3: 1, 4: 1}

// Write a function that takes two date instances as arguments
// It should return true if the dates are equal
// It should return false otherwise

function myFunction59(date1: Date, date2: Date): boolean {
  // Convert dates to strings for easy comparison
  const dateString1 = date1.toISOString();
  const dateString2 = date2.toISOString();

  // Compare the string representations of the dates
  return dateString1 === dateString2;
}

console.log(
  myFunction59(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:45:00"))
);
// Expected output: false

console.log(
  myFunction59(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:00:00"))
);
// Expected output: true

console.log(
  myFunction59(new Date("2001/01/01 08:00:00"), new Date("2000/01/01 08:00:00"))
);
// Expected output: false

// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates

function myFunction60(date1: Date, date2: Date): number {
  // Calculate the time difference in milliseconds
  const timeDifference = Math.abs(date2.getTime() - date1.getTime());

  // Calculate the number of days
  const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return daysDifference;
}

console.log(myFunction60(new Date("2020-06-11"), new Date("2020-06-01")));
// Expected output: 10

console.log(myFunction60(new Date("2000-01-01"), new Date("2020-06-01")));
// Expected output: 7457

// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise

function myFunction61(date1: Date, date2: Date): boolean {
  // Check if year, month, and day are the same
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

console.log(myFunction61(new Date("2000/01/01"), new Date("2000/01/01")));
// Expected output: true

console.log(myFunction61(new Date("2000/01/01"), new Date("2000/01/02")));
// Expected output: false

console.log(myFunction61(new Date("2001/01/01"), new Date("2000/01/01")));
// Expected output: false

console.log(myFunction61(new Date("2000/11/01"), new Date("2000/01/01")));
// Expected output: false

// Write a function that takes two number arrays as parameters
// and return an array which contains elements from both
// arrays

function myFunction62(arr1: number[], arr2: number[]): number[] {
  return [...arr1, ...arr2];
}

console.log(myFunction62([1, 2], [3, 4])); // Expected output: [1, 2, 3, 4]
console.log(myFunction62([1, 2], [3, 4, 5, 6])); // Expected output: [1, 2, 3, 4, 5, 6]

// Write a function that takes an array and a string as parameters
// and return an array which contains all elements from the given array
// and the given string as the last element

function myFunction63(arr: string[], newElement: string): string[] {
  return [...arr, newElement];
}

const fruitsList = myFunction63(["Apple", "Orange", "Banana"], "Kiwi");
console.log(fruitsList); // Expected output: ['Apple', 'Orange', 'Banana', 'Kiwi']

// Write a function that takes an array and a string as parameters
// and return an array which contains all elements from the given array
// and the given string as the first element

function myFunction64(arr: string[], newElement: string): string[] {
  return [newElement, ...arr];
}

const fruitsList2 = myFunction64(["Apple", "Orange", "Banana"], "Kiwi");
console.log(fruitsList2); // Expected output: ['Kiwi', 'Apple', 'Orange', 'Banana']

// Write a function that takes two objects as parameters
// and return an object which contains properties from both
// objects

function myFunction65(
  obj1: { [key: string]: number },
  obj2: { [key: string]: number }
): { [key: string]: number } {
  return { ...obj1, ...obj2 };
}

const resultas = myFunction65({ a: 1, b: 2 }, { c: 3, d: 4 });
console.log(resultas);
// Expected output: { a: 1, b: 2, c: 3, d: 4 }

const resultaas = myFunction65({ a: 1, b: 2 }, { c: 3, d: 4, e: 5, f: 6 });
console.log(resultaas);
// Expected output: { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }

// Write a function that takes an object and a string as parameters
// and return an object which contains properties from the given object
// and a new property favoriteMovie with the value equal to the given string

type myFunction66 = {
  [key: string]: unknown;
};

function myFunction66(obj: myFunction66, favoriteMovie: string): myFunction66 {
  return { ...obj, favoriteMovie };
}

const resultin = myFunction66({ eyeColor: "green", age: 10 }, "Garfield");
console.log(resultin);
// Expected output: { eyeColor: 'green', age: 10, favoriteMovie: 'Garfield' }

const resultins = myFunction66({ eyeColor: "blue", age: 15 }, "Twilight");
console.log(resultins);
// Expected output: { eyeColor: 'blue', age: 15, favoriteMovie: 'Twilight' }

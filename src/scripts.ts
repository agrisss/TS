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

console.log(myFunction24([1,2,3,4]));//[2,3,4]


console.log(myFunction24([5,4,3,2,1,0]));//[2,1,0]


console.log(myFunction24([99,1,1]));//[99,1,1]



// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array

function myFunction25(a: number[]): number[] {
  // Extract the first 3 elements from array 'a'
  const result = a.slice(0, 3);
  return result;
}

console.log(myFunction25([1,2,3,4]));//[1,2,3]

console.log(myFunction25([5,4,3,2,1,0]));//[5,4,3]


console.log(myFunction25([99,1,1]));//[99,1,1]



// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a

function myFunction26(a: number[], n: number): number[] {
  // Return the last n elements from array 'a'
  const result = a.slice(-n);
  return result;
}

console.log(myFunction26([1, 2, 3, 4, 5], 2));//[ 4, 5 ]


console.log(myFunction26([1, 2, 3], 6));//[ 1, 2, 3 ]


console.log(myFunction26([1, 2, 3, 4, 5, 6, 7, 8], 3));//[ 6, 7, 8 ]

// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array


function myFunction27(a: (number | string | boolean)[], b: number | string | boolean): (number | string | boolean)[] {
  // Use the filter method to create a new array without occurrences of b
  const result = a.filter(element => element !== b);
  
  return result;
}

// Example usage
console.log(myFunction27([1, 2, 3], 2));           // Output: [1, 3]
console.log(myFunction27([1, 2, '2'], '2'));      // Output: [1, 2]
console.log(myFunction27([false, '2', 1], false));// Output: ['2', 1]
console.log(myFunction27([1, 2, '2', 1], 1));     // Output: [2, '2']
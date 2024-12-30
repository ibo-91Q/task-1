// 1
function tellFortune(jobTitle, location, partner, children) {
  return `You will be a ${jobTitle} in ${location}, and married to ${partner} with ${children} kids.`;
}

// 2
function calculateDogAge(puppyAge) {
  return `Your doggie is ${puppyAge * 7} years old in dog years!`;
}

// 3
function calculateSupply(age, amountPerDay) {
  const maxAge = 100;
  const daysRemaining = (maxAge - age) * 365;
  return `You will need ${amountPerDay * daysRemaining} to last you until the ripe old age of ${maxAge}.`;
}

// 4
function greet(name) {
  return `Hello ${name}`;
}

// 5
// Errors:
// - Function double(cat) { ... } should define the parameter within the parentheses: function double(cat) { ... }
// - Function double(7) { ... } cannot be defined with a number as the parameter name.
// - Function double('7') { ... } should use the correct parameter name (cat) and the correct variable (cat) within the function.

// 6
// Fixed functions:
function double1(x) {
  return 2 * x;
}

function double2(x) {
  return 2 * x;
}

function double3(x) {
  return 2 * x;
}

// 7
function cube(num) {
  return num * num * num;
}

// 8
function multiply(a, b) {
  return a * b;
}

// 9
function canIGetADrivingLicense(age) {
  if (age >= 20) {
    return "yes you can";
  } else {
    return `please come back after ${20 - age} years to get one`;
  }
}

// 10
function sameLength(str1, str2) {
  return str1.length === str2.length;
}

// 11
function largerNumber(a, b) {
  return Math.max(a, b);
}

// 12
function smallerNumber(a, b, c) {
  return Math.min(a, b, c);
}

// 13
function shorterString(str1, str2, str3, str4, str5) {
  let shortest = str1;
  if (str2.length < shortest.length) {
    shortest = str2;
  }
  if (str3.length < shortest.length) {
    shortest = str3;
  }
  if (str4.length < shortest.length) {
    shortest = str4;
  }
  if (str5.length < shortest.length) {
    shortest = str5;
  }
  return shortest;
}

// 14
function longerString(str1, str2, str3, str4) {
  let longest = str1;
  if (str2.length > longest.length) {
    longest = str2;
  }
  if (str3.length > longest.length) {
    longest = str3;
  }
  if (str4.length > longest.length) {
    longest = str4;
  }
  return longest;
}

// 15
function isEven(num) {
  return num % 2 === 0;
}

// 16
function isOdd(num) {
  return num % 2 !== 0;
}

// 17
function positive(num) {
  return Math.abs(num);
}

// 18
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

// 19
function average(num1, num2, num3, num4, num5) {
  return (num1 + num2 + num3 + num4 + num5) / 5;
}

// 20
function randomNumber() {
  return Math.random();
}

// 21
function randomBetweenNumbers(min, max) {
  return Math.random() * (max - min) + min;
}

// 22
function scoreInUniversity(score) {
  if (score >= 95 && score <= 100) {
    return "A";
  } else if (score >= 85 && score <= 94) {
    return "B";
  } else if (score >= 70 && score <= 84) {
    return "C";
  } else if (score >= 50 && score <= 69) {
    return "D";
  } else {
    return "F";
  }
}

// 23
let count = 0;
function counter() {
  return ++count;
}
//This code creates a simple counter mechanism:

//A variable count is initialized to 0.
//The counter() function increments the count variable by 1 each time it's called and returns the incremented value.

// 24
function resetCounter() {
  const previousCount = count;
  count = 0;
  return `${previousCount} and the counter reset now`;
}
//This function, when called, does the following:

//Stores the current value of the count variable in a constant.
//Resets the count variable to 0.
//Returns a message that includes the previous count and a notification that the counter has been reset.
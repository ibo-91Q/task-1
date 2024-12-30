console.log('Here is : ', 'array'); 

/*
1
Correct the syntax error
 [ 1,7  9  45, ] 
=> [1, 7, 9, 45] 

 ["Str" "alex","moh" 
=> ["Str", "alex", "moh"]

 'the','fox' 'over' lazy, 'dog',  ] 
=> ['the', 'fox', 'over', 'lazy', 'dog'] 
*/

const correctedArray1 = [1, 7, 9, 45];
const correctedArray2 = ["Str", "alex", "moh"];
const correctedArray3 = ['the', 'fox', 'over', 'lazy', 'dog'];

console.log("Corrected Array 1:", correctedArray1);
console.log("Corrected Array 2:", correctedArray2);
console.log("Corrected Array 3:", correctedArray3);

/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

console.log("Index of Banana:", fruits.indexOf("Banana")); // Output: 1
console.log("Index of Tomato:", fruits.indexOf("Tomato")); // Output: 0
*/

const fruits = ["Tomato", "Banana", "Watermelon"];
console.log("Index of Banana:", fruits.indexOf("Banana"));
console.log("Index of Tomato:", fruits.indexOf("Tomato")); 

/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/

const favoriteFood = ["Pizza", "Sushi", "Burgers", "Pasta", "Ice Cream"];
const favoriteSport = ["Football", "Basketball", "Swimming"];
const favoriteMovie = ["The Shawshank Redemption", "Inception", "The Godfather", "The Dark Knight"];

/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/

function firstOfArray(arr) {
  return arr[0];
}

/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/

function lastOfArray(arr) {
  return arr[arr.length - 1];
}

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/

var array = [0, 5, 7, 9];
array.unshift(1, 3, 4); 
array.push(6, 8, 10); 
console.log(array); // Output: [1, 3, 4, 0, 5, 7, 9, 6, 8, 10]

/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/

var array2 = [5, 9, -7, 3.5];
console.log(array2.push(10)); // Output: 5 (new length of the array)
console.log(array2.unshift(2)); // Output: 5 (new length of the array)
console.log(array2.shift()); // Output: 2 (removed element)
console.log(array2.pop()); // Output: 10 (removed element)

/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/

function middleOfArray(arr) {
  const middleIndex = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
    return `${arr[middleIndex - 1]} and ${arr[middleIndex]}`;
  } else {
    return arr[middleIndex];
  }
}

/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something

var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/

var animals = ['cat', 'ele', 'bird'];
animals[0] = 'zebra';
animals[1] = 'elephant';
animals.length = 2; // Remove the third element

var nums = [1, 2, 3, 8, 9];
nums[0] = 5;
nums[1] = -22;
nums[2] = 3.5;
nums[3] = 44;
nums[4] = 98;
nums[5] = 44;

/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/

function indexOfArray(arr, index) {
  return arr[index];
}

// More cases:
console.log(indexOfArray([10, 20, 30], 0)); // Output: 10
console.log(indexOfArray(["a", "b", "c"], 2)); // Output: "c"

/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/

function arrayExceptLast(arr) {
  return arr.slice(0, -1);
}

// More cases:
console.log(arrayExceptLast([1, 2, 3])); // Output: [1, 2]
console.log(arrayExceptLast(["a", "b", "c"])); // Output: ["a", "b"]

/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/

function addToEnd(arr, value) {
  return [...arr, value];
}

// More cases:
console.log(addToEnd([1, 2, 3], 4)); // Output: [1, 2, 3, 4]
console.log(addToEnd(["a", "b", "c"], "d")); // Output: ["a", "b", "c", "d"]


/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function sumArrayFor(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
  function sumArrayWhile(arr) {
    let sum = 0;
    let i = 0;
    while (i < arr.length) {
      sum += arr[i];
      i++;
    }
    return sum;
  }
  
  /*
  14
  Create a function called minInArray
  that accept an array
  and return the minimum value inside this array
  
  var nums= [1,2,3,8,9]
  Ex: minInArray(nums) => 1
  
  ** solve it one time using for loop and another using while loop
  **try more cases by your self
  */
  
  function minInArrayFor(arr) {
    if (arr.length === 0) {
      return undefined; 
    }
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }
  
  function minInArrayWhile(arr) {
    if (arr.length === 0) {
      return undefined; 
    }
    let min = arr[0];
    let i = 1;
    while (i < arr.length) {
      if (arr[i] < min) {
        min = arr[i];
      }
      i++;
    }
    return min;
  }
  
  /*
  15
  Create a function called removeFromArray
  that accept an array and elemnt to remove
  and return the array after remove this elemnt from it
  
  var nums= [1,2,3,8,9]
  Ex: minInArray(nums,8) => [1,2,3,9]
  
  ** solve it one time using for loop and another using while loop
  **try more cases by your self
  */
  
  function removeFromArrayFor(arr, elem) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== elem) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  function removeFromArrayWhile(arr, elem) {
    const result = [];
    let i = 0;
    while (i < arr.length) {
      if (arr[i] !== elem) {
        result.push(arr[i]);
      }
      i++;
    }
    return result;
  }
  
  /*
  16
  Create a function called oddArray
  that accept an array
  and return an array have only the odd elemnts
  
  var nums= [1,2,3,8,9]
  Ex: oddArray(nums) => [1,3,9]
  
  ** solve it one time using for loop and another using while loop
  **try more cases by your self
  */
  
  function oddArrayFor(arr) {
    const oddNumbers = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        oddNumbers.push(arr[i]);
      }
    }
    return oddNumbers;
  }
  
  function oddArrayWhile(arr) {
    const oddNumbers = [];
    let i = 0;
    while (i < arr.length) {
      if (arr[i] % 2 !== 0) {
        oddNumbers.push(arr[i]);
      }
      i++;
    }
    return oddNumbers;
  }
  
  /*
  17
  Create a function called aveArray
  that accept an array
  and return the average of the numbers inside this array
  
  var nums= [1,2,3,8,9]
  Ex: aveArray(nums) => 4.6
  
  var nums2= [1,2,3,8,9,77]
  Ex: aveArray(nums) => 16.6
  
  ** solve it one time using for loop and another using while loop
  **try more cases by your self
  */
  
  function aveArrayFor(arr) {
    if (arr.length === 0) {
      return 0; 
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  }
  
  function aveArrayWhile(arr) {
    if (arr.length === 0) {
      return 0; 
    }
    let sum = 0;
    let i = 0;
    while (i < arr.length) {
      sum += arr[i];
      i++;
    }
    return sum / arr.length;
  }
  
  /*
  18
  Create a function called shorterInArray
  that accept an array of strings
  and return the shortest string inside this array (first)
  
  var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
  Ex: shorterInArray(strings) => "alex"
  
  ** solve it one time using for loop and another using while loop
  **try more cases by your self
  */
  
  function shorterInArrayFor(arr) {
    if (arr.length === 0) {
      return undefined; 
    }
    let shortest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].length < shortest.length) {
        shortest = arr[i];
      }
    }
    return shortest;
  }
  
  function shorterInArrayWhile(arr) {
    if (arr.length === 0) {
      return undefined; 
    }
    let shortest = arr[0];
    let i = 1;
    while (i < arr.length) {
      if (arr[i].length < shortest.length) {
        shortest = arr[i];
      }
      i++;
    }
    return shortest;
  }
  
  /*
  19
  Create a function called repeatChar
  that accept a string and char
  and return the times that this char repeat inside this string
  
  var string= "alex mercer madrasa rashed2 emad hala"
  Ex: repeatChar(string,"a") => 6
  Ex: repeatChar(string,"z") => 0
  
  ** solve it one time using for loop and another using while loop
  **try more cases by your self
  */
  
  function repeatCharFor(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        count++;
      }
    }
    return count;
  }
  
  function repeatCharWhile(str, char) {
    let count = 0;
    let i = 0;
    while (i < str.length) {
      if (str[i] === char) {
        count++;
      }
      i++;
    }
    return count;
  }
  
  /*
  20
  Create a function called evenIndexOddLength
  that accept an array of strings
  and return a new array that have the string with odd length in even index
  
  var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
  Ex: evenIndexOddLength(strings) => ["madrasa"]
  
  ** solve it one time using for loop and another using while loop
  **try more cases by your self
  */
  
  function evenIndexOddLengthFor(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i += 2) {
      if (arr[i].length % 2 !== 0) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  function evenIndexOddLengthWhile(arr) {
    const result = [];
    let i = 0;
    while (i < arr.length) {
      if (i % 2 === 0 && arr[i].length % 2 !== 0) {
        result.push(arr[i]);
      }
      i++;
    }
    return result;
  }
  
/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function powerElementIndexFor(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(Math.pow(arr[i], i)); 
    }
    return result;
  }
  
  function powerElementIndexWhile(arr) {
    const result = [];
    let i = 0;
    while (i < arr.length) {
      result.push(Math.pow(arr[i], i));
      i++;
    }
    return result;
  }
  
  // Example usage:
  const nums = [44, 5, 4, 3, 2, 10];
  console.log(powerElementIndexFor(nums)); // Output: [0, 5, 16, 27, 16, 100000]
  console.log(powerElementIndexWhile(nums)); // Output: [0, 5, 16, 27, 16, 100000]
  
  
  /*
  22
  Create a function called evenNumberEvenIndex
  that accept an array of nums
  and return a new array that have the even number in even index
  
  var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
  Ex: evenNumberEvenIndex(nums) => [2,8,34]
  
  ** solve it one time using for loop and another using while loop
  **try more cases by your self
  */
  
  function evenNumberEvenIndexFor(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i += 2) {
      if (arr[i] % 2 === 0) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  function evenNumberEvenIndexWhile(arr) {
    const result = [];
    let i = 0;
    while (i < arr.length) {
      if (i % 2 === 0 && arr[i] % 2 === 0) {
        result.push(arr[i]);
      }
      i += 2; 
    }
    return result;
  }
  
  // Example usage:
  const nums2 = [5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1];
  console.log(evenNumberEvenIndexFor(nums2)); // Output: [2, 8, 34]
  console.log(evenNumberEvenIndexWhile(nums2)); // Output: [2, 8, 34]
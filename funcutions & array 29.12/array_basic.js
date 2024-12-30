// 1- Find the largest element in an array
function findLargest(arr) {
    if (arr.length === 0) {
      return undefined; // Handle empty array
    }
    return Math.max(...arr); 
  }
  
  // 2- Find the smallest element in an array
  function findSmallest(arr) {
    if (arr.length === 0) {
      return undefined; // Handle empty array
    }
    return Math.min(...arr); 
  }
  
  // 3- Find the sum of all elements in an array
  function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
  }
  
  // 4- Find the average of all elements in an array
  function findAverage(arr) {
    if (arr.length === 0) {
      return undefined; // Handle empty array
    }
    return sumArray(arr) / arr.length;
  }
  
  // 5- Find the median of all elements in an array
  function findMedian(arr) {
    if (arr.length === 0) {
      return undefined; // Handle empty array
    }
    const sortedArr = arr.slice().sort((a, b) => a - b); // Create a copy and sort
    const middle = Math.floor(sortedArr.length / 2);
    if (sortedArr.length % 2 === 0) {
      return (sortedArr[middle - 1] + sortedArr[middle]) / 2; 
    } else {
      return sortedArr[middle];
    }
  }
  
  // 6- Remove all duplicates from an array
  function removeDuplicates(arr) {
    return [...new Set(arr)]; 
  }
  
  // 7- Sort an array in ascending order
  function sortAscending(arr) {
    return arr.slice().sort((a, b) => a - b); 
  }
  
  // 8- Sort an array in descending order
  function sortDescending(arr) {
    return arr.slice().sort((a, b) => b - a); 
  }
  
  // 9- Shuffle the elements of an array randomly
  function shuffleArray(arr) {
    const array = arr.slice(); // Create a copy
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  }
  
  // Example usage:
  const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
  
  console.log("Largest:", findLargest(numbers));
  console.log("Smallest:", findSmallest(numbers));
  console.log("Sum:", sumArray(numbers));
  console.log("Average:", findAverage(numbers));
  console.log("Median:", findMedian(numbers));
  console.log("Without duplicates:", removeDuplicates(numbers));
  console.log("Ascending:", sortAscending(numbers));
  console.log("Descending:", sortDescending(numbers));
  console.log("Shuffled:", shuffleArray(numbers));

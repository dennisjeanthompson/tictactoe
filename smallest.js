let numbers = [[1 ,10], [1 ,20],[8, 22],[1,2],[1,0]]; // Example array

// Start by assuming the first element is the smallest
let smallest = numbers[0]; 

// Loop through the array starting from the second element
for (let i = 1; i < numbers.length; i++) {
  // If the current element is smaller than the smallest, update smallest
  if (numbers[i] < smallest) {
    smallest = numbers[i];
  }
}

console.log("The smallest value is:", smallest);

let numbers1 = [3, 1, 2, 6]
let smallest1 = Math.min(...numbers1);
console.log("the smallest value is:", smallest1)
let king = numbers1.sort()
console.log(king)
 

let numbers2 = [3, 5, 1, 8, 2];

// Sort the array numerically in ascending order
numbers2.sort(function(a, b) {
  return a - b;
});

console.log("Sorted array (ascending):", numbers2);

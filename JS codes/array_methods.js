let nums=[11,13,15,17,19]
let cubeNums = nums.map(n=> (n*n*n))
console.log(cubeNums)

let evenNums = nums.filter(n => n % 2 === 0);
console.log("Even numbers:", evenNums);

let sum = nums.reduce((acc, n) => acc + n, 0);
console.log("Sum:", sum);

nums.forEach(n => {
  console.log("Number:", n);
});

let firstBig = nums.find(n => n > 15);
console.log("First number greater than 15:", firstBig);

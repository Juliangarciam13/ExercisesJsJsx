//Create a function that filters even numbers greater than 6.

const nums = [1,2,3,4,5,6,7,8,9,10];

const evenNumbers = nums.filter(num => num % 2 === 0 && num > 6);

console.log(evenNumbers);

//create a function that filters odd numbers greater than 6

const oddNumbers = nums.filter(num => num % 2 === 1 && num > 6);

console.log(oddNumbers);
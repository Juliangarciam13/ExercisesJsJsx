//Create a function that takes two numbers as arguments and returns their sum.

const addNumbers = (num) => {
    let sum = 0;

    for(let i = 1; i <= num; i++) {
        sum += i;
    }

    return sum;
}

console.log(addNumbers(10));
console.log(addNumbers(4));

//Create a function that adds the first number to the second number.

const sumTwoNums = (a,b) => {

    return a + b;
}

console.log(sumTwoNums(1,2));
console.log(sumTwoNums(10,22));
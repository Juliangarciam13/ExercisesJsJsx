//Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

const searchNumSeven = (nums) => {
    for(let i = 0; i < nums.length; i++) {
        const number = nums[i];
        const digits = String(number).split('');

        if(digits.includes('7')) {
            return 'Boom!';
        } 
    }
    return 'There is no 7 in the array';
}

const numbers = [1,2,3,4,5];
const result = searchNumSeven(numbers);
console.log(result);
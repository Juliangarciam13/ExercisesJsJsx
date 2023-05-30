//create a function that filters the words that include the word a and that its length is greater than 5

const words = ['apple', 'banana', 'orange', 'grape', 'pineapple'];

const filterLetter = 'a';

const filterWords = words.filter(word => word.includes(filterLetter) && word.length > 5);

console.log(filterWords);
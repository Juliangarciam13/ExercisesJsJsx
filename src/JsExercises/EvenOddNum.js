//Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

const evenOdd = (num) => {
    const sumFigure = String(num)
    .split('')
    //We use split("") to split the string into an array of characters.
    .reduce((accumulator, figure) => accumulator + Number(figure), 0);
    //we use reduce together with Number(figure) to convert each digit to a number and add all the digits together.

    return sumFigure % 2 === 0 ? 'Evenish' : 'Oddish';
}

console.log(evenOdd(43));
console.log(evenOdd(373));
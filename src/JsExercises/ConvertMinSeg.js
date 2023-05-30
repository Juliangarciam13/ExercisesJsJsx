//Write a function that takes an integer minutes and converts it to seconds.

const convert = (min) => {
    let convertMinSeg = min * 60;
    return convertMinSeg;
}

console.log(convert(10));
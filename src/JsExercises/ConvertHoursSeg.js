//Write a function that converts hours into seconds.

const convert = (hours) => {
    let convertHoursMin = hours * 60;
    let convertMinSeg = convertHoursMin * 60;

    return convertMinSeg;
}

console.log((convert(2)));
console.log((convert(10)));
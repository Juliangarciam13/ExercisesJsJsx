/*Your function will be passed two functions, f and g, that don't take any parameters. Your function has to call them, and return a string which indicates which function returned the larger number.

If f returns the larger number, return the string f.
If g returns the larger number, return the string g.
If the functions return the same number, return the string neither. */

const compareFunctions = (f,g) => {
    const resultF = f();
    const resultG = g();

    if(resultF > resultG) {
        return 'f';
    } else if (resultG > resultF) {
        return 'g';
    } else {
        return 'neither';
    }
}

const functionF = () => {
    return 10;
}

const functionG = () => {
    return 15;
}

const result = compareFunctions(functionF, functionG);
console.log(result);
const multiply = (a, b) => {
    let result = 0;
    let isNegative = (a < 0) !== (b < 0); // Determine if the result should be negative

    // Work with absolute values for the multiplication logic
    a = Math.abs(a);
    b = Math.abs(b);

    // Perform repeated addition
    for (let i = 0; i < b; i++) {
        result += a;
    }

    // If the result should be negative, negate it
    if (isNegative) {
        result = -result;
    }

    return result;
};



const divide = (a, b) => {
    if (b === 0) {
        return Infinity; // Return Infinity for undefined division
    }

    let result = 0;
    let dividend = Math.abs(a);
    let divisor = Math.abs(b);

    // Perform repeated subtraction
    while (dividend >= divisor) {
        dividend -= divisor;
        result++;
    }

    // Determine the sign of the result
    if ((a < 0) !== (b < 0)) {
        result = -result;
    }

    return result;
};


const modulo = (a, b) => {
    if (b === 0) {
        return undefined; // Return undefined for undefined modulo
    }

    let dividend = Math.abs(a);
    let divisor = Math.abs(b);

    // Perform repeated subtraction
    while (dividend >= divisor) {
        dividend -= divisor;
    }

    // Determine the sign of the result
    if (a < 0) {
        dividend = -dividend;
    }

    return dividend;
};

const multiply = (a, b) => {
    let result = 0;
    let negative = false;

    // Determine if the result should be negative
    if (b < 0) {
        b = -b;
        negative = !negative;
    }
    if (a < 0) {
        a = -a;
        negative = !negative;
    }

    // Perform repeated addition
    for (let i = 0; i < b; i++) {
        result += a;
    }

    // If the result should be negative, negate it
    if (negative) {
        result = -result;
    }

    return result;
};

const divide = (a, b) => {
    if (b === 0) {
        return Infinity; // Or use another value to represent undefined division
    }

    let result = 0;
    let dividend = a;

    while (dividend >= b) {
        dividend -= b;
        result++;
    }

    return result;
};

const modulo = (a, b) => {
    if (b === 0) {
        return undefined; // Or use another value to represent undefined modulo
    }

    let dividend = a;

    while (dividend >= b) {
        dividend -= b;
    }

    return dividend;
};

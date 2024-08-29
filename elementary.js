const multiply = (a, b) => {
    let result = 0;
    let isNegative = (a < 0) !== (b < 0);


    a = Math.abs(a);
    b = Math.abs(b);


    for (let i = 0; i < b; i++) {
        result += a;
    }


    if (isNegative) {
        result = -result;
    }

    return result;
};



const divide = (a, b) => {
    if (b === 0) {
        return Infinity;
    }

    let result = 0;
    let dividend = Math.abs(a);
    let divisor = Math.abs(b);


    while (dividend >= divisor) {
        dividend -= divisor;
        result++;
    }


    if ((a < 0) !== (b < 0)) {
        result = -result;
    }

    return result;
};


const modulo = (a, b) => {
    if (b === 0) {
        return undefined;
    }

    let dividend = Math.abs(a);
    let divisor = Math.abs(b);


    while (dividend >= divisor) {
        dividend -= divisor;
    }


    if (a < 0) {
        dividend = -dividend;
    }

    return dividend;
};

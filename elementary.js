const multiply = (a,b) => {
    let result = 0;
    for (let i = 0; i < b; i++) {
        result += a;
    }
    return result;
};

const divide = (a,b) => {
    let result = 0;
    let dividend = a;

    while (dividend >= b) {
        dividend -= b;
        result++;
    }
    return result;
};

const modulo = (a,b) => {

}; let dividend = a;

while (dividend >= b) {
    dividend -= b;
}

return dividend;
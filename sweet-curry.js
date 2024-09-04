function mult2(x) {
    return (y) => x * y;
}

function add3(x) {
    return function (y) {
        return function (z) {
            return x + y + z;
        };
    };
}
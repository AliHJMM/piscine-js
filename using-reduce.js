function adder(arr, value) {
    return arr.reduce(
        (acc, item) => acc + item,
        value === undefined ? 0 : value
    );
}
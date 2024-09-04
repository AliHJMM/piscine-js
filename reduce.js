function fold(arr, f, acc) {
    for (var i = 0; i < arr.length; i++) {
        acc = f(acc, arr[i], i, arr);
    }
    return acc;
}

function foldRight(arr, f, acc) {
    for (var i = arr.length - 1; i >= 0; i--) {
        acc = f(acc, arr[i], i, arr);
    }
    return acc;
}
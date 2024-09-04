function fold(arr, f, acc) {
    for (var i = 0; i < arr.length; i++) {
        acc = f(acc, arr[i], i, arr);
    }
    return acc;
}
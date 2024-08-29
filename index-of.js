function indexOf(arr, v, n=0) {
    for (let i = n; i < arr.length; i++) {
        if (arr[i] === v) {
            return i;
        }
    }
    return -1;
}
function lastIndexOf(arr, v, n=arr.length-1) {
    let lastIndex = -1;
    for (let i = n; i >= 0; i--) {
        if (arr[i] === v) {
            lastIndex = i;
            break;
        }
    }
    return lastIndex;
}
function includes(arr, v, n=0) {
    for (let i = n; i < arr.length; i++) {
        if (arr[i] === v) {
            return true;
        }
    }
    return false;
}
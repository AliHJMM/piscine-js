function chunk(arr, size) {
    if (size <= 0) {
        return [];
    }
    const result = [];
    let index = 0;
    while (index < arr.length) {
        result.push(arr.slice(index, index + size));
        index += size;
    }
    return result;
}
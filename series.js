async function series(fArr) {
    var result = [];
    for (const item of fArr) {
        result.push(await item());
    }
    return result;
}
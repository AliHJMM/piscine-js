function filterShortStateName(arr) {
    return arr.filter((item) => item.length < 7);
}

function filterStartVowel(arr) {
    return arr.filter((item) => /^[aeiou]/i.test(item));
}
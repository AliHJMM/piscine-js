function filterShortStateName(arr) {
    return arr.filter((item) => item.length < 7);
}

function filterStartVowel(arr) {
    return arr.filter((item) => /^[aeiou]/i.test(item));
}

function filter5Vowels(arr) {
    return arr.filter((item) => item.match(/[aeiou]/gi).length >= 5);
}

function filter1DistinctVowel(arr) {
    return arr.filter(
        (item) => new Set(item.toLowerCase().match(/[aeiou]/gi)).size === 1
    );
}
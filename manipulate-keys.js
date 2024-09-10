const filterKeys = (obj, predicate) => {
    return Object.keys(obj)
        .filter(predicate)
        .reduce((res, key) => {
            res[key] = obj[key];
            return res;
        }, {});
}

const mapKeys = (obj, callback) => {
    return Object.keys(obj)
        .map(callback)
        .reduce((res, key, i) => {
            res[key] = obj[Object.keys(obj)[i]];
            return res;
        }, {});
}

const reduceKeys = (obj, callback, initialValue) => {
    return Object.keys(obj)
        .reduce((accumulator, currentKey) => {
            return callback(accumulator, currentKey);
        }, initialValue);
}
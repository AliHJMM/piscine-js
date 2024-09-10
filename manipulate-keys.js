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
    let accumulator = initialValue !== undefined ? initialValue : '';

    return Object.keys(obj).reduce((acc, currentKey) => {
        return callback(acc, currentKey);
    }, accumulator).replace(/^,\s*/, ''); 
}
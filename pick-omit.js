const pick = (obj, keys) => {
    const keysArray = Array.isArray(keys) ? keys : [keys];
    const pickedObj = {};

    for (let key of keysArray) {
        if (obj.hasOwnProperty(key)) {
            pickedObj[key] = obj[key];
        }
    }

    return pickedObj;
}

function omit(obj, keys) {
    const keysArray = Array.isArray(keys) ? keys : [keys];
    const omittedObj = {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key) && !keysArray.includes(key)) {
            omittedObj[key] = obj[key];
        }
    }

    return omittedObj;
}
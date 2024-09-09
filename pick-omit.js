function pick(obj, keys) {
    const keysArray = Array.isArray(keys) ? keys : [keys];
    const pickedObj = {};

    for (let key of keysArray) {
        if (obj.hasOwnProperty(key)) {
            pickedObj[key] = obj[key];
        }
    }

    return pickedObj;
}
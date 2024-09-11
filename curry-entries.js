function defaultCurry(obj1) {
    return function (obj2) {
        let res = {};
        for (let key in obj1) {
            res[key] = obj1[key];
        }
        for (let key in obj2) {
            res[key] = obj2[key];
        }
        return res;
    };
}
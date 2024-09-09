const  fusion = (obj1, obj2) => {
    const merged = {};
    for (const key in obj1) {
        if (obj1.hasOwnProperty(key)) {
            const val1 = obj1[key];
            const val2 = obj2[key];
            if (Array.isArray(val1) && Array.isArray(val2)) {
                merged[key] = val1.concat(val2);
            } else if (typeof val1 === 'string' && typeof val2 === 'string') {
                merged[key] = val1 + ' ' + val2;
            } else if (typeof val1 === 'number' && typeof val2 === 'number') {
                merged[key] = val1 + val2;
            } else if (val1 !== null && typeof val1 === 'object' && val2 !== null && typeof val2 === 'object') {
                merged[key] = fusion(val1, val2);
            } else {
                merged[key] = val2 !== undefined ? val2 : val1;
            }
        }
    }
    for (const key in obj2) {
        if (!obj1.hasOwnProperty(key)) {
            merged[key] = obj2[key];
        }
    }
    return merged;
}
function reverse(str) {
    if (Array.isArray(str)) {
        let arr = [];
        for (let i = str.length-1; i >= 0; i--) {
            arr.push(str[i]);
        }
        return arr;
    } else {
        let result = "";
        for (let i = str.length-1; i >= 0; i--) {
            result += str[i];
        }
        return result;
    }
}
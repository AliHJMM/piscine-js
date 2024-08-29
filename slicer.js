function slice(str, index, lastIndex = str.length) {
    if (Array.isArray(str)) {
        let result = [];
        index = index >= 0 ? index : Math.max(str.length + index, 0);
        lastIndex = lastIndex >= 0 ? lastIndex : Math.max(str.length + lastIndex, 0);
        if (lastIndex !== str.length) {
            for (let i = index; i < lastIndex; i++) {
                result.push(str[i]);
            }
        } else {
            for (let i = index; i < str.length; i++) {
                result.push(str[i]);
            }
        }
        
        return result;
    } else {
        let result = "";
        index = index >= 0 ? index : Math.max(str.length + index, 0);
        lastIndex = lastIndex >= 0 ? lastIndex : Math.max(str.length + lastIndex, 0);
        if (lastIndex !== str.length) {
            for (let i = index; i < lastIndex; i++) {
                result += str[i];
            }
        } else {
            for (let i = index; i < str.length; i++) {
                result += str[i];
            }
        }
        return result;
    }
}
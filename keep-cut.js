function cutFirst(str) {
    let result = "";
    for (let i = 2; i < str.length; i++) {
        result += str[i];
    }
    return result;
}


function cutLast(str) {
    let result = "";
    for (let i = 0; i < str.length-2; i++) {
        result += str[i];
    }
    return result;
}


function cutFirstLast(str) {
    let result = "";
    for (let i = 2; i < str.length-2; i++) {
        result += str[i];
    }
    return result;
}


function keepFirst(str) {
    return str.length < 2 ? str[0] : str[0]+str[1];
}


function keepLast(str) {
    if (str.length < 2) {
        return str[0];
    } else if (str.length < 3) {
        return str[0]+str[1];
    } else {
        return str[str.length-2]+str[str.length-1];
    }
}


function keepFirstLast(str) {
    if (str.length < 2) {
        return str[0];
    } else if (str.length < 3) {
        return str[0]+str[1];
    } else if (str.length < 4) {
        return str[0]+str[1]+str[2];
    } else {
        return str[0]+str[1]+str[str.length-2]+str[str.length-1];
    }
}
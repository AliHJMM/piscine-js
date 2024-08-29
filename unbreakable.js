function split(str, separator='') {
    if (separator === '') {
        let list = [];
        for (let i = 0; i < str.length; i++) {
            list.push(str[i]);
        }
        return list;
    } else {
        let list = [];
    let index = str.indexOf(separator);
    let last = 0;
    while (index !== -1) {
        list.push(str.substring(last, index));
        last = index + separator.length;
        index = str.indexOf(separator, last);
    }
    list.push(str.substring(last));
    return list;
    }
}


function join(arr, add='') {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        if (i == arr.length-1) {
            result += arr[i];
        } else {
            result += arr[i] + add;
        }
    }
    return result
}
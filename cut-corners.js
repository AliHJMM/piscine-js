function round(int) {
    let isNegative = false;
    if (int < 0) {
        isNegative = true;
        int = -int;
    }
    let c = 0;
    while (!(int < 1 && int > -1)) {
        int -= 1;
        c++;
    }
    if (int < 0.5) {
        if (isNegative) {
            return -c;
        } else {
            return c;
        }
    } else {
        if (isNegative) {
            return -c - 1;
        } else {
            return c + 1;
        }
    }
}



function ceil(int) {
    if (!int) {
        return 0;
    }
    let isNegative = false;
    if (int < 0) {
        isNegative = true;
        int = -int;
    }
    let int2 = int;
    let c = 0;
    while (!(int2 < 1 && int2 >= 0)) {
        int2 -= 1;
        c++;
    }
    if (isNegative) {
        return -c;
    } else {
        return c + 1;
    }
}



function floor(int) {
    if (!int) {
        return 0;
    }
    let isNegative = false;
    if (int < 0) {
        isNegative = true;
        int = -int;
    }
    let int2 = int;
    let c = 0;
    while (!(int2 < 1 && int2 > -1)) {
        int2 -= 1;
        c++;
    }
    if (isNegative) {
        return -c - 1;
    } else {
        return c;
    }
}




function trunc(int) {
    let c = 0;
    if (int > 0xfffffffff) {
        int -= 0xfffffffff;
        c += 0xfffffffff;
    }
    let neg = false;
    if (int < 0) {
        neg = true;
        int = -int;
    }
    let copy = int;
    while (!(copy < 1 && copy > -1)) {
        copy -= 1;
        c++;
    }
    if (neg) {
        return -c;
    }
    return c;
}
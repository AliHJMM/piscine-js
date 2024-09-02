function isValid(date) {
    if (new Date(date).toString() === "Invalid Date") {
        return false;
    }
    if (!(date instanceof Date) && typeof date !== "number") {
        return false;
    }
    return true;
}

function isAfter(d1, d2) {
    if (d1 > d2) {
        return true;
    }
    return false;
}


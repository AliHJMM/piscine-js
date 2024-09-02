function isValid(date) {
    if (new Date(date).toString() === "Invalid Date") {
        return false;
    }
    if (!(date instanceof Date) && typeof date !== "number") {
        return false;
    }
    return true;
}
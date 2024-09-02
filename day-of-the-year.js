function dayOfTheYear(date) {
    let days = 1;
    while (!isFirstofFirst(date)) {
        date.setDate(date.getDate() - 1);
        days++;
    }
    return days;
}
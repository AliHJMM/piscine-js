function isFriday(date) {
    return new Date(date).getDay() === 5;
}

function isWeekend(date) {
    var day = new Date(date).getDay();
    return day === 0 || day === 6;
}
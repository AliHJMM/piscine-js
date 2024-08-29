function nasa(N) {
    let result = "";
    for (let i = 1; i <= N; i++) {
        if (i == N) {
            if (i % 3 == 0 && i % 5 != 0) {
                result += "NA";
            } else if (i % 5 == 0 && i % 3 != 0) {
                result += "SA";
            } else if (i % 3 == 0 && i % 5 == 0) {
                result += "NASA";
            } else {
                result += i;
            }
        } else {
            if (i % 3 == 0 && i % 5 != 0) {
                result += "NA ";
            } else if (i % 5 == 0 && i % 3 != 0) {
                result += "SA ";
            } else if (i % 3 == 0 && i % 5 == 0) {
                result += "NASA ";
            } else {
                result += i + " ";
            }
        }
    }
    return result;
}
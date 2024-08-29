function pyramid(char, num) {
    let result = "";
    let spaces = " ".repeat(char.length);
    for (let i = 1; i <= num; i++) {
        result += spaces.repeat(num - i) + char.repeat(2 * i - 1) + "\n";
    }
    return result.slice(0, -1);
}
const sign = (num) => num > 0 ? 1 : num < 0 ? -1 : 0;
const sameSign = (num, num2) => sign(num) === sign(num2);
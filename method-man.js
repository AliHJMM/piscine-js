const words = (str) => str.split(' ');
const sentence = (strArr) => strArr.join(' ');
const yell = (str) => str.toUpperCase();
const whisper = (str) => str.toLowerCase();
const capitalize = (str) => (str.charAt(0).toUpperCase()) + (str.substring(1).toLowerCase()) ;
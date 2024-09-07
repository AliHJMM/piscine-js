import { colors } from "./fifty-shades-of-cold.data.js";

function generateClasses() {
    const head = document.getElementsByTagName("head")[0];
    const style = document.createElement("style");
    colors.forEach((color) => {
        style.innerHTML += `.${color} {\n  background: ${color};\n }\n\n`;
    });
    console.log(style.innerHTML);
    head.appendChild(style);
}
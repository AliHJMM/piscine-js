document.addEventListener("mousemove", (e) => {
    pick(e);
});

document.addEventListener("click", (e) => {
    pick(e);
    copyHSL();
});

const hslDiv = document.createElement("div");
hslDiv.classList.add("hsl");
document.body.appendChild(hslDiv);

const hueDiv = document.createElement("div");
hueDiv.classList.add("hue", "text");
document.body.appendChild(hueDiv);
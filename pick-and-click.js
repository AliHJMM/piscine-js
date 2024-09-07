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

const luminosityDiv = document.createElement("div");
luminosityDiv.classList.add("luminosity", "text");
document.body.appendChild(luminosityDiv);

const svgns = "http://www.w3.org/2000/svg";
const svg = document.createElement("svg");
svg.id = "svg";

svg.setAttribute("width", "100%");
svg.setAttribute("height", "100%");
svg.setAttribute("viewBox", "0 0 100% 100%");
svg.setAttribute("preserveAspectRatio", "none");

const axisX = document.createElementNS(svgns, "line");
axisX.id = "axisX";
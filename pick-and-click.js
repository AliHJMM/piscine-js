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

axisX.setAttribute("x1", "0");
axisX.setAttribute("y1", "0");
axisX.setAttribute("x2", "0");
axisX.setAttribute("y2", "100%");
axisX.setAttribute("stroke", "red");
axisX.setAttribute("stroke-width", "3");
svg.appendChild(axisX);

const axisY = document.createElementNS(svgns, "line");
axisY.id = "axisY";
axisY.setAttribute("x1", "0");
axisY.setAttribute("y1", "0");
axisY.setAttribute("x2", "100%");
axisY.setAttribute("y2", "0");
axisY.setAttribute("stroke", "red");
axisY.setAttribute("stroke-width", "3");
svg.appendChild(axisY);
document.body.appendChild(svg);
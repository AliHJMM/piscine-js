import { places } from "./where-do-we-go.data.js";

var scroll = window.scrollY;
const location = document.createElement("a");
location.classList.add("location");
document.body.appendChild(location);
document.addEventListener("DOMContentLoaded", () => {
    selectPlace();
});

document.addEventListener("scroll", () => {
    selectPlace();
    scroll > window.scrollY
        ? (document.querySelector(".direction").innerHTML = "N")
        : (document.querySelector(".direction").innerHTML = "S");
    scroll = window.scrollY;
});

function explore() {
    places.sort(compareCoordinates);
    console.log(places);
    places.forEach((place) => {
        createSection(place);
    });
    const compass = document.createElement("div");
    compass.classList.add("direction");
    document.body.appendChild(compass);
}
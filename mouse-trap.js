var circles = [];
var box;
class Circle {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.diameter = 50;
        this.isTrapped = false;
        this.HTML = null;
        this.draw();
        circles.push(this);
    }

    draw() {
        this.HTML = document.createElement("div");
        this.HTML.classList.add("circle");
        this.HTML.style.position = "absolute";
        this.HTML.style.top = this.y + "px";
        this.HTML.style.left = this.x + "px";
        this.HTML.style.background = "white";
        this.trapped();
        document.body.appendChild(this.HTML);
    }
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

    move(x, y) {
        this.trapped();
        if (!this.isTrapped) {
            this.x = x;
            this.y = y;
            this.HTML.style.top = this.y + "px";
            this.HTML.style.left = this.x + "px";
        } else {
            if (this.inReactangle(x, y)) {
                this.x = x;
                this.y = y;
                this.HTML.style.top = this.y + "px";
                this.HTML.style.left = this.x + "px";
            } else {
                if (this.inReactangle(x, this.y)) {
                    this.x = x;
                    this.HTML.style.left = this.x + "px";
                } else if (this.inReactangle(this.x, y)) {
                    this.y = y;
                    this.HTML.style.top = this.y + "px";
                }
            }
        }
    }

    trapped() {
        if (
            this.x > box.x &&
            this.x + this.diameter < box.x + box.width &&
            this.y > box.y &&
            this.y + this.diameter < box.y + box.height
        ) {
            this.isTrapped = true;
            this.HTML.style.background = "var(--purple)";
        } else {
            this.isTrapped = false;
            this.HTML.style.background = "white";
        }
    }

    inReactangle(x, y) {
        if (
            x > box.x &&
            x + this.diameter < box.x + box.width &&
            y > box.y &&
            y + this.diameter < box.y + box.height
        ) {
            return true;
        } else {
            return false;
        }
    }
}
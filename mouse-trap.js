let trapBox;
let isInsideBox = true;
let mouseX;
let mouseY;
let lastCircle;

function createCircle() {
    addEventListener("click", function () {
        lastCircle = document.createElement("div");
        lastCircle.className = "circle";
        if (isInsideBox) {
            lastCircle.style.background = "white";
            lastCircle.style.left = mouseX;
            lastCircle.style.top = mouseY;
        } else {
            lastCircle.style.background = 'var(--purple)';
            lastCircle.style.left = mouseX;
            lastCircle.style.top = mouseY;
        }
        document.body.appendChild(lastCircle);
        isInsideBox = true;
    });
}

function moveCircle() {
    addEventListener("mousemove", e => {
        document.querySelectorAll(".tempCircle").forEach((elem) => {
            elem.remove();
        });
        mouseX = e.clientX - 25 + "px";
        mouseY = e.clientY - 25 + "px";
        let floatingCircle = document.createElement("div");
        floatingCircle.className = "circle";
        floatingCircle.classList.add("tempCircle");
        if (isInsideBox) {
            floatingCircle.style.background = "white";
        } else {
            floatingCircle.style.background = 'var(--purple)';
        }
        floatingCircle.style.left = e.clientX - 25 + "px";
        floatingCircle.style.top = e.clientY - 25 + "px";
        document.body.appendChild(floatingCircle);

        let boxBounds = trapBox.getBoundingClientRect();
        if ((e.clientX >= boxBounds.left + 25 && e.clientX <= boxBounds.right - 25) &&
            (e.clientY >= boxBounds.top + 25 && e.clientY <= boxBounds.bottom - 25)) {
            document.querySelector(".circle").style.background = 'var(--purple)';
            isInsideBox = false;
        }

        if (!isInsideBox) {
            if (e.clientX - 25 < boxBounds.left) {
                floatingCircle.style.left = boxBounds.left + "px";
                document.querySelector(".circle").style.background = 'var(--purple)';
            }
            if (e.clientX + 25 > boxBounds.right) {
                floatingCircle.style.left = boxBounds.right - 50 + "px";
                document.querySelector(".circle").style.background = 'var(--purple)';
            }
            if (e.clientY - 25 < boxBounds.top) {
                floatingCircle.style.top = boxBounds.top + "px";
                document.querySelector(".circle").style.background = 'var(--purple)';
            }
            if (e.clientY + 25 > boxBounds.bottom) {
                floatingCircle.style.top = boxBounds.bottom - 50 + "px";
                document.querySelector(".circle").style.background = 'var(--purple)';
            }
        }
    });
}

function setBox() {
    trapBox = document.createElement("div");
    trapBox.className = "box";
    document.body.appendChild(trapBox);
    console.log(trapBox.getBoundingClientRect().bottom);
}

export { createCircle, moveCircle, setBox };

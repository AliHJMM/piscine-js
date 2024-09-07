import { gossips } from "./gossip-grid.data.js";

const grid() => {
    ranges();
    let form = document.createElement("form");
    form.classList.add("gossip");
    let textarea = document.createElement("textarea");
    let button = document.createElement("button");
    button.innerHTML = "Share gossip!";
    button.type = "submit";
    button.addEventListener("click", (e) => {
        e.preventDefault();
        let gossip = textarea.value;
        if (gossip.length > 0) {
            gossips.unshift(gossip);
            document.querySelectorAll(".gossip").forEach((card, i) => {
                if (i > 0) card.remove();
            });
            textarea.value = "";
            renderGossips();
        }
    });
    form.appendChild(textarea);
    form.appendChild(button);
    document.body.appendChild(form);
    renderGossips();
}

const renderGossips() => {
    gossips.forEach((gossip) => {
        let div = document.createElement("div");
        div.classList.add("gossip");
        div.innerHTML = gossip;
        document.body.appendChild(div);
    });
}
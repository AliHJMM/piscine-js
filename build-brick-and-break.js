const build = (n) => {
    const body = document.getElementsByTagName("body")[0];
    let bricks = 1;
    const interval = setInterval(() => {
        const brick = document.createElement("div");
        brick.setAttribute("id", "brick-" + bricks);
        if (bricks % 3 === 2) {
            brick.dataset.foundation = true;
        }
        body.appendChild(brick);
        bricks++;
        if (bricks > n) {
            clearInterval(interval);
        }
    }, 100);
};


const repair = (...ids) => {
    ids.forEach((id) => {
        const brick = document.getElementById(id);
        brick.getAttribute("foundation")
            ? (brick.dataset.repaired = "in progress")
            : (brick.dataset.repaired = true);
    });
};


const destroy = () => {
    const bricks = document.getElementsByTagName("div");
    bricks[bricks.length - 1].remove();
};


export { build, repair, destroy };
document.addEventListener("mousemove", (e) => {
    pick(e);
});

document.addEventListener("click", (e) => {
    pick(e);
    copyHSL();
});
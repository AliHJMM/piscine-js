function getArchitects() {
    return [
        document.querySelectorAll("body a"),
        document.querySelectorAll("body span"),
    ];
}

function getClassical() {
    return [
        document.querySelectorAll("a.classical"),
        document.querySelectorAll("a:not(.classical)"),
    ];
}
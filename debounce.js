const debounce=(func, wait)=> {
    let timeout;
    return function(...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

function opDebounce(func, wait, leading = false) {
    let timeout;
    let lastCall = 0;

    return function(...args) {
        const context = this;
        const now = Date.now();

        if (leading && !lastCall) {
            func.apply(context, args);
        }

        clearTimeout(timeout);
        timeout = setTimeout(() => {
            lastCall = 0; // Reset last call timestamp after waiting
            if (!leading) {
                func.apply(context, args);
            }
        }, wait);

        lastCall = now;
    };
}

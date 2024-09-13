const throttle=(func, wait)=> {
    let lastCall = 0;
    
    return function(...args) {
        const now = Date.now();
        if (now - lastCall >= wait) {
            lastCall = now;
            func.apply(this, args);
        }
    };
}

const opThrottle=(func, wait, { leading = true, trailing = true } = {}) => {
    let timeout = null;
    let lastCall = 0;
    let lastArgs;
    let context;

    const invokeFunc = () => {
        func.apply(context, lastArgs);
        lastCall = Date.now();
        timeout = null;
    };

    return function(...args) {
        const now = Date.now();
        context = this;
        lastArgs = args;

        if (!lastCall && !leading) lastCall = now;

        const remainingTime = wait - (now - lastCall);

        if (remainingTime <= 0 || remainingTime > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            lastCall = now;
            func.apply(context, args);
        } else if (trailing && !timeout) {
            timeout = setTimeout(invokeFunc, remainingTime);
        }
    };
}

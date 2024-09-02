function matchCron(inputCron, date) {
    let cron = {};
    inputCron.split(" ").forEach((part, i) => {
        if (part === "*") return;
        switch (i) {
            case 0:
                cron.minute = part;
                break;
            case 1:
                cron.hour = part;
                break;
            case 2:
                cron.date = part;
                break;
            case 3:
                cron.month = part;
                break;
            case 4:
                cron.day = part;
                break;
        }
    });
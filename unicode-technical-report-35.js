Date.prototype.month = Date.prototype.getMonth;
Date.prototype.day = Date.prototype.getDay;
Date.prototype.year = Date.prototype.getFullYear;
Date.prototype.date = Date.prototype.getDate;
Date.prototype.hours = Date.prototype.getHours;

function format(date, f) {
    const d = new Date(date);
    const lM = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const sM = lM.map((m) => m.slice(0, 3));
    const lD = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const sD = lD.map((d) => d.slice(0, 3));
    // Day
    f = f.replace(/dd/g, ("0" + d.date()).slice(-2));
    f = f.replace(/d/g, d.date());
      // Hour
      f = f.replace(/HH/g, ("0" + d.hours()).slice(-2));
      f = f.replace(/H/g, d.hours());
      f = f.replace(/hh/g, ("0" + (d.hours() % 12 || 12)).slice(-2));
      f = f.replace(/h/g, d.hours() % 12 || 12);
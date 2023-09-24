"use strict";
function cronTranslateSchedule(scheduleStr) {
    var parts = scheduleStr.split(" ");
    if (parts.length !== 2) {
        return null; // Invalid format
    }
    var interval = parts[0], unit = parts[1];
    if (isNaN(Number(interval))) {
        return null;
    }
    switch (unit) {
        case "minute":
        case "minutes":
            return "*/".concat(interval, " * * * *");
        case "hour":
        case "hours":
            return "0 */".concat(interval, " * * *");
        case "day":
        case "days":
            return "0 0 */".concat(interval, " * *");
        case "week":
        case "weeks":
            return "0 0 * * ".concat(interval === "1" ? "0" : "*/" + interval);
        case "month":
        case "months":
            return "0 0 1 */".concat(interval, " *");
        default:
            return null;
    }
}

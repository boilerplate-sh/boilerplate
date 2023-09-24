"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cron = require("node-cron");
function createCronJob(name, config) {
    var cronSyntax = cronTranslateSchedule(config.schedule) || config.schedule;
    if (!cron.validate(cronSyntax)) {
        console.error("Invalid cron schedule for job: ".concat(name));
        return;
    }
    if (typeof config.job !== "function") {
        console.error("Invalid job function for job: ".concat(name));
        return;
    }
    cron.schedule(cronSyntax, config.job);
    console.log("Scheduled job: ".concat(name, " with timing: ").concat(cronSyntax));
}
exports.default = createCronJob;

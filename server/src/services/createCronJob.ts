const cron = require("node-cron");

type cronConfig = {
  schedule: string;
  job: Function;
};

function createCronJob(name: string, config: cronConfig) {
  const cronSyntax = cronTranslateSchedule(config.schedule) || config.schedule;

  if (!cron.validate(cronSyntax)) {
    console.error(`Invalid cron schedule for job: ${name}`);
    return;
  }

  if (typeof config.job !== "function") {
    console.error(`Invalid job function for job: ${name}`);
    return;
  }

  cron.schedule(cronSyntax, config.job);
  console.log(`Scheduled job: ${name} with timing: ${cronSyntax}`);
}

export default createCronJob;

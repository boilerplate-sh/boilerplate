function cronTranslateSchedule(scheduleStr: string) {
  const parts = scheduleStr.split(" ");
  if (parts.length !== 2) {
    return null; // Invalid format
  }

  const [interval, unit] = parts;

  if (isNaN(Number(interval))) {
    return null;
  }

  switch (unit) {
    case "minute":
    case "minutes":
      return `*/${interval} * * * *`;
    case "hour":
    case "hours":
      return `0 */${interval} * * *`;
    case "day":
    case "days":
      return `0 0 */${interval} * *`;
    case "week":
    case "weeks":
      return `0 0 * * ${interval === "1" ? "0" : "*/" + interval}`;
    case "month":
    case "months":
      return `0 0 1 */${interval} *`;
    default:
      return null;
  }
}

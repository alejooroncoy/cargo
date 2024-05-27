const DATE_UNITS = {
  month: 2635200,
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1
}

const getSecondsDiff = (timestamp) => (Date.now() - timestamp) / 1000;

const getUnitAndValueDate = (secondsElapsed) => {
  for (const [unit, secondsInUnit] of Object.entries(DATE_UNITS)) {
    if (secondsElapsed >= secondsInUnit || unit === "second") {
      const value = Math.floor(secondsElapsed / secondsInUnit) * -1;
      return { value, unit }
    }
  }
}

const getTimeAgo = (timestamp) => {
  const rtf = new Intl.RelativeTimeFormat()
  const timestampNumber = timestamp;

  const secondsElapsed = getSecondsDiff(timestampNumber)
  const unitAndValue = getUnitAndValueDate(secondsElapsed)
  const { value, unit } = unitAndValue || {};
  if (typeof value === "number" && unit) {
    if (value === 0) return "hace un momento";
    return rtf.format(value, unit);
  }
  return "";
}

export default getTimeAgo;
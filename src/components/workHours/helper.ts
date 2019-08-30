export interface TimeDefined {
  hour: string;
  minute: string;
}

export const isValidDate = (firstTime: TimeDefined, lastTime: TimeDefined) => {
  const {
    hour: firstHour,
    minute: firstMinute,
  } = firstTime;

  const {
    hour: lastHour,
    minute: lastMinute,
  } = lastTime;
  if (parseInt(firstHour) > parseInt(lastHour)) {
    return false;
  }
  if (parseInt(firstHour) === parseInt(lastHour) && firstMinute > lastMinute) {
    return false;
  }
  return true;
};

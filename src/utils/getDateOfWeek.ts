import moment from 'moment';

export const getDateOfWeek = (date: string, add: number) => {
  const weekDays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  return weekDays.map((day) =>
    moment(date)
      .isoWeekday(day)
      .add(add, 'week')
      .date()
  );
};

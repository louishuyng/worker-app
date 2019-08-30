import { getString } from 'locales';

export const fromNow = (date: any) => {
  if (typeof date !== 'object') {
    date = new Date(date);
  }
  const currentDate: any = new Date();
  var seconds = Math.floor((date - currentDate) / 1000);
  let intervalType;

  var interval = Math.floor(seconds / 31536000);
  if (interval >= 1) {
    intervalType = getString('timeFormat', 'year');
  } else {
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
      intervalType = getString('timeFormat', 'month');
    } else {
      interval = Math.floor(seconds / 86400);
      if (interval >= 1) {
        intervalType = getString('timeFormat', 'day');
      } else {
        interval = Math.floor(seconds / 3600);
        if (interval >= 1) {
          intervalType = getString('timeFormat', 'hour');
        } else {
          interval = Math.floor(seconds / 60);
          if (interval >= 1) {
            intervalType = getString('timeFormat', 'min');
          } else {
            interval = seconds;
            intervalType = getString('timeFormat', 'second');
          }
        }
      }
    }
  }
  if (interval > 1 || interval === 0) {
    intervalType += 's';
  }
  return interval + ' ' + intervalType + ' ' + getString('timeFormat', 'ago');
};

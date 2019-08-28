import { LocaleConfig } from 'react-native-calendars';

import { LabelBackgroundCalendar } from '../Agenda/type';
import { colors } from 'utils/Theme';
import { JobDetail } from 'components/JobList/type';

export const weekDayShortNames = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
LocaleConfig.locales['en'] = {
  monthNames: [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ],
  monthNamesShort: [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec',
  ],
  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  dayNamesShort: weekDayShortNames,
};

export const processTimeData = (timeData: any, jobData: Array<JobDetail>) => {
  jobData.map((value): any => {
    const startHour = value.timeAvaliable.begin.hour;
    const endHour = value.timeAvaliable.end.hour;

    for (let i = startHour as number; i < endHour; i++) {
      switch (i) {
        case startHour:
          timeData[i] = LabelBackgroundCalendar.TITLE;
          timeData[`${i}Text`] = value.jobName;
          timeData[`${i}Color`] = colors.black;
          timeData[`${i}Selected`] = true;
          timeData[`${i}Font`] = 16;
          break;
        case startHour as number + 1:
          timeData[i] = LabelBackgroundCalendar.LOCATION;
          timeData[`${i}Text`] = value.location;
          timeData[`${i}Color`] = colors.paleSky;
          timeData[`${i}Selected`] = true;
          timeData[`${i}Font`] = 14;
          break;
        case startHour as number + 2:
          timeData[i] = LabelBackgroundCalendar.NAVIGATION;
          timeData[`${i}Selected`] = true;
          break;
        default:
          timeData[i] = LabelBackgroundCalendar.SELECTED;
          timeData[`${i}Selected`] = true;
          break;
      }
    }
  });
  return timeData;
};

export default LocaleConfig;

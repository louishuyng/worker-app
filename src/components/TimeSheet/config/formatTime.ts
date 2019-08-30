import moment from 'moment';
import { TypeDateInput } from '../form/RequestorForm';

export const formatTime = (dateData: Date, type: TypeDateInput) => {
  if (type === TypeDateInput.DATE) {
    const date =
      moment(dateData)
        .date()
        .toString().length === 1
        ? '0' + moment(dateData).date()
        : moment(dateData).date();
    const month =
      (moment(dateData)
        .month() + 1)
        .toString().length === 1
        ? '0' + (moment(dateData).month() + 1)
        : moment(dateData).month() + 1;
    const year = moment(dateData).year();
    return `${month}/${date}/${year}`;
  }

  const hour =
    moment(dateData)
      .hour()
      .toString().length === 1
      ? '0' + moment(dateData).hour()
      : moment(dateData).hours();
  const minute =
    moment(dateData)
      .minute()
      .toString().length === 1
      ? '0' + moment(dateData).minute()
      : moment(dateData).minute();
  return `${hour}:${minute}`;
};

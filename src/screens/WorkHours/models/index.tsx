import { TimeWorkHourFormat } from 'components/workHours/type';

interface FormikWorkHoursalues {
  data: Array<TimeWorkHourFormat>,
}

export const InitMapPropsWorkHours = {
  data: {
    dataBegin1: null,
    dataEnd1: null,
  },
};

export const handleSubmitWorkHours = (values: FormikWorkHoursalues) => {};

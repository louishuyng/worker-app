import { JobStatus } from '../type';
import { getString } from 'locales';

type setStatusLableInterface = {
  [key in JobStatus]: string | undefined;
}

export const setStatusLable: setStatusLableInterface = {
  [JobStatus.ENROUTE]: getString('jobList', 'setEnroute'),
  [JobStatus.LOCATION]: getString('jobList', 'setLocation'),
  [JobStatus.SECURED]: getString('jobList', 'setSecured'),
  [JobStatus.ENDOFSHIFT]: getString('jobList', 'setEndOfShift'),
  [JobStatus.CREATETIMESHEET]: getString('jobList', 'createTimeSheet'),
};

export const setStatusModalLabel: setStatusLableInterface = {
  [JobStatus.ENROUTE]: getString('modal', 'setEnroute'),
  [JobStatus.LOCATION]: getString('modal', 'setLocation'),
  [JobStatus.SECURED]: getString('modal', 'setSecured'),
  [JobStatus.ENDOFSHIFT]: getString('modal', 'setEndOfShift'),
  [JobStatus.CREATETIMESHEET]: undefined,
};

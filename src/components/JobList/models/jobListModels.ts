import { JobStatus } from '../type';
import { getString } from 'locales';

type setStatusLableInterface = {
  [key in JobStatus]: string
}

export const setStatusLable: setStatusLableInterface = {
  [JobStatus.ENROUTE]: getString('jobList', 'setEnroute'),
  [JobStatus.LOCATION]: getString('jobList', 'setLocation'),
  [JobStatus.SECURED]: getString('jobList', 'setSecured'),
  [JobStatus.ENDOFSHIFT]: getString('jobList', 'setEndOfShift'),
};

export const setStatusModalLabel: setStatusLableInterface = {
  [JobStatus.ENROUTE]: getString('modal', 'setEnroute'),
  [JobStatus.LOCATION]: getString('modal', 'setLocation'),
  [JobStatus.SECURED]: getString('modal', 'setSecured'),
  [JobStatus.ENDOFSHIFT]: getString('modal', 'setEndOfShift'),
};

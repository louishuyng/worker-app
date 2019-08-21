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

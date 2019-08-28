import { ImageSourcePropType } from 'react-native';

import { JobStatus } from '../type';
import { getString } from 'locales';
import { IC_ENROUTE, IC_LOCATION, IC_SECURED, IC_END_OF_SHIFT } from 'utils/Icons';

type setStatusLableInterface = {
  [key in JobStatus]: string | undefined;
}

type setStatusIconInterface = {
  [key in JobStatus]: ImageSourcePropType | undefined;
}

export const setStatusLable: setStatusLableInterface = {
  [JobStatus.NEW]: getString('jobList', 'setEnroute'),
  [JobStatus.ENROUTE]: getString('jobList', 'setLocation'),
  [JobStatus.LOCATION]: getString('jobList', 'setSecured'),
  [JobStatus.SECURED]: getString('jobList', 'setEndOfShift'),
  [JobStatus.ENDOFSHIFT]: getString('jobList', 'createTimeSheet'),
  [JobStatus.REVIEW]: undefined,
};

export const setStatusModalLabel: setStatusLableInterface = {
  [JobStatus.NEW]: getString('modal', 'setEnroute'),
  [JobStatus.ENROUTE]: getString('modal', 'setLocation'),
  [JobStatus.LOCATION]: getString('modal', 'setSecured'),
  [JobStatus.SECURED]: getString('modal', 'setEndOfShift'),
  [JobStatus.ENDOFSHIFT]: undefined,
  [JobStatus.REVIEW]: undefined,
};

export const setStatusIcon: setStatusIconInterface = {
  [JobStatus.NEW]: undefined,
  [JobStatus.ENROUTE]: IC_ENROUTE,
  [JobStatus.LOCATION]: IC_LOCATION,
  [JobStatus.SECURED]: IC_SECURED,
  [JobStatus.ENDOFSHIFT]: IC_END_OF_SHIFT,
  [JobStatus.REVIEW]: undefined,
};

export const setStatusHint: setStatusLableInterface = {
  [JobStatus.NEW]: undefined,
  [JobStatus.ENROUTE]: getString('jobList', 'enrouteHint'),
  [JobStatus.LOCATION]: getString('jobList', 'locationHint'),
  [JobStatus.SECURED]: getString('jobList', 'securedHint'),
  [JobStatus.ENDOFSHIFT]: getString('jobList', 'endOfShiftHint'),
  [JobStatus.REVIEW]: undefined,
};

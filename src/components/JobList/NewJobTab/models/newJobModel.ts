import { NewJobTabStage } from './newJobTabConfig';
import { newJobData } from './specificModel';

export const NewJobTabModel = (status: NewJobTabStage) => {
  return newJobData[status];
};

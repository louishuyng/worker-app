import { PersonalScreenConfig, PersonalStage } from './personalScreenConfig';

import { personalCurrentLabelData, personalFormData } from './specificModel';

export const PersonalScreenModel = (status: PersonalStage): PersonalScreenConfig => ({
  currentLabel: personalCurrentLabelData[status],
  form: personalFormData[status],
});

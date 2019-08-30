import { PersonalStage, InputPersonalData } from './personalScreenConfig';
import { getString } from 'locales';

type PersonalForm = {[key in PersonalStage]: Array<InputPersonalData>};
type PersonalCurrentLabel = {[key in PersonalStage]: string}

export const personalFormData: PersonalForm = {
  [PersonalStage.EMAIL]: [{
    label: getString('personal', 'EMAIL_LABEL'),
    fieldName: 'firstName',
    type: 'text',
    keyboardType: 'email-address',
  }],
  [PersonalStage.PHONE]: [{
    label: getString('personal', 'PHONE_LABEL'),
    fieldName: 'firstName',
    type: 'text',
    keyboardType: 'phone-pad',
  }],
};

export const personalCurrentLabelData: PersonalCurrentLabel = {
  [PersonalStage.EMAIL]: getString('personal', 'CURRENT_EMAIL'),
  [PersonalStage.PHONE]: getString('personal', 'CURRENT_PHONE'),
};

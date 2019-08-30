import { KeyboardType } from 'react-native';

export enum PersonalStage {
  EMAIL,
  PHONE,
}

export interface InputPersonalData {
  label: string;
  placeholder?: string;
  fieldName: string;
  type: string;
  keyboardType: KeyboardType;
}

export interface PersonalScreenConfig {
  currentLabel: string;
  form: Array<InputPersonalData>;
}

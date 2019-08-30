import { KeyboardType } from 'react-native';

export enum RecoveryPasswordStage {
  SEND_MAIL,
  CONFIRM_MAIL,
  RESET_PASSWORD,
}

export interface InputData {
  label: string;
  placeholder?: string;
  type: string;
  fieldName: string;
  keyboardType: KeyboardType;
}

export interface RecoveryScreenConfig {
  title: string;
  status: RecoveryPasswordStage;
  description: string | null;
  forms?: Array<InputData>;
  buttonTitle: string;
  navigator: string;
}

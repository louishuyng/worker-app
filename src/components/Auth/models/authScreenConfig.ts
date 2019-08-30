import { ImageSourcePropType, KeyboardType } from 'react-native';

export enum AuthStage {
  SIGNUP_STEP_ONE,
  SIGNUP_STEP_TWO,
  LOGIN,
}

export interface InputAuthData {
  label: string;
  placeholder?: string;
  fieldName: string;
  type: string;
  keyboardType: KeyboardType;
}

export interface AuthScreenConfig {
  title: string;
  status: AuthStage;
  stepLabel: string;
  form: Array<InputAuthData>;
  buttonLabel: string;
  suggestionTitle: string;
  navigatorTitle: string;
  navigator: string;
  subNavigator: string;
  afterIconData: ImageSourcePropType | undefined;
}

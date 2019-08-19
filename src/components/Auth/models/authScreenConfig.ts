import { RouteName } from 'navigation/SwitchNavigator';
import { FieldConfig } from 'formik';

export enum AuthStage {
  SIGNUP_STEP_ONE,
  SIGNUP_STEP_TWO,
  LOGIN,
}

export interface InputAuthData {
  title: string;
  placeholder?: string;
  fieldName: string;
  type: string;
}

export interface AuthScreenConfig {
  title: string;
  status: AuthStage;
  stepLabel: string,
  form: Array<InputAuthData>;
  buttonLabel: string,
  suggestionTitle: string;
  navigatorTitle: string;
  navigator: string;
  subNavigator: string,
}

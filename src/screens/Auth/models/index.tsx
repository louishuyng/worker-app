import { AuthStage } from 'components/Auth/models/authScreenConfig';

export interface FormikAuthValues {
  email?: string,
  password?: string,
  repaetPassword?: string,
  firstName?: string,
  lastName?: string,
  phoneNumber?: string,
  department?: string,
}

type IInitMapProps = {
  [key in AuthStage]: {
    [index: string]: string,
  }
};

interface HandleSubmitFunc {
  (values: FormikAuthValues): any;
}

type IHandleSubmitByStage = {
  [key in AuthStage]: HandleSubmitFunc;
};

export const initMapPropsToValue: IInitMapProps = {
  [AuthStage.LOGIN]: {
    email: '',
    password: '',
  },
  [AuthStage.SIGNUP_STEP_ONE]: {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
  },
  [AuthStage.SIGNUP_STEP_TWO]: {
    department: '',
    password: '',
    repeatPassword: '',
  },
};

export const handleSubmitByStage: IHandleSubmitByStage = {
  [AuthStage.LOGIN]: (values) => {
  },
  [AuthStage.SIGNUP_STEP_ONE]: (values) => {
  },
  [AuthStage.SIGNUP_STEP_TWO]: (values) => {
  },
};

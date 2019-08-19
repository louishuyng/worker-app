import * as Yup from 'yup';

import { AuthStage } from 'components/Auth/models/authScreenConfig';
import { emailRegExp, passRegExp } from 'constant';

type AuthValidationSchemaInterface = {
  [key in AuthStage]: any;
};

const signInValidationSchema = Yup.object().shape({
  email: Yup
    .string()
    .required()
    .matches(emailRegExp),
  password: Yup
    .string()
    .required(),
});

const signUpStepOneValidationShcema = Yup.object().shape({
  firstName: Yup
    .string()
    .required(),
  lastName: Yup
    .string()
    .required(),
  phoneNumber: Yup
    .string()
    .required(),
  email: Yup
    .string()
    .required()
    .matches(emailRegExp),
});

const signUpStepTwoValidationShcema = Yup.object().shape({
  department: Yup
    .string()
    .required(),
  password: Yup
    .string()
    .required()
    .matches(passRegExp),
  repeatPassword: Yup
    .string()
    .required()
    .oneOf([Yup.ref('password'), '']),
});

export const AuthValidationSchema: AuthValidationSchemaInterface = {
  [AuthStage.LOGIN]: signInValidationSchema,
  [AuthStage.SIGNUP_STEP_ONE]: signUpStepOneValidationShcema,
  [AuthStage.SIGNUP_STEP_TWO]: signUpStepTwoValidationShcema,
};

import * as Yup from 'yup';

import { emailRegExp, passRegExp } from 'constant';

export const signInValidationSchema = Yup.object().shape({
  email: Yup
    .string()
    .required()
    .matches(emailRegExp),
  password: Yup
    .string()
    .required(),
});

export const signUpStepOneValidationShcema = Yup.object().shape({
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

export const signUpStepTwoValidationShcema = Yup.object().shape({
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

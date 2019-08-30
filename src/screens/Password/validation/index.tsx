import * as Yup from 'yup';

import { emailRegExp } from 'constant';

export const sendEmailValidationSchema = Yup.object().shape({
  email: Yup
    .string()
    .required()
    .matches(emailRegExp),
});

export const resetPasswordValidationSchema = Yup.object().shape({
  password: Yup
    .string()
    .required(),
  rePassword: Yup
    .string()
    .required(),
});

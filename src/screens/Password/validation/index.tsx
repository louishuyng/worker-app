import * as Yup from 'yup';

import { emailRegExp } from 'constant';

export const sendEmailValidationSchema = Yup.object().shape({
  email: Yup
    .string()
    .required('Email cannot be empty')
    .matches(emailRegExp, 'Invalid email address format'),
});

export const resetPasswordValidationSchema = Yup.object().shape({
  password: Yup
    .string()
    .required('Password cannot be empty'),
  rePassword: Yup
    .string()
    .required('Confirm Password cannot be empty')
    .oneOf([Yup.ref('password'), `Password does not match`]),
});

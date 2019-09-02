import * as Yup from 'yup';

import { emailRegExp } from 'constant';

export const sendEmailValidationSchema = Yup.object().shape({
  email: Yup
    .string()
    .required('Email is required')
    .matches(emailRegExp, 'Invalid email address'),
});

export const resetPasswordValidationSchema = Yup.object().shape({
  password: Yup
    .string()
    .required('Password is required'),
  rePassword: Yup
    .string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password'), `Password doesn't match`]),
});

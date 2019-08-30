import * as Yup from 'yup';

import { emailRegExp } from 'constant';

export const sendEmailValidationSchema = Yup.object().shape({
  email: Yup
    .string()
    .required('Please fill the email')
    .matches(emailRegExp, 'Email not follow the format'),
});

export const resetPasswordValidationSchema = Yup.object().shape({
  password: Yup
    .string()
    .required('Please fill the password'),
  rePassword: Yup
    .string()
    .required('Please fill the confirm password')
    .oneOf([Yup.ref('password'), 'Password is not match']),
});

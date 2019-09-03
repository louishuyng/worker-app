import * as Yup from 'yup';

import { emailRegExp, passRegExp } from 'constant';

export const signInValidationSchema = Yup.object().shape({
  email: Yup
    .string()
    .required('Email cannot be empty')
    .matches(emailRegExp, 'Invalid email address format'),
  password: Yup
    .string()
    .required('Password cannot be empty'),
});

export const signUpStepOneValidationShcema = Yup.object().shape({
  firstName: Yup
    .string()
    .required('First Name cannot be empty')
    .min(1, 'First Name cannot be empty'),
  lastName: Yup
    .string()
    .required('Last Name cannot be empty')
    .min(1, 'Last Name cannot be empty'),
  phoneNumber: Yup
    .string()
    .required('Phone Number cannot be empty'),
  email: Yup
    .string()
    .required('Email cannot be empty')
    .matches(emailRegExp, 'Invalid email address format'),
});

export const signUpStepTwoValidationShcema = Yup.object().shape({
  department: Yup
    .string()
    .required('Department cannot be empty'),
  password: Yup
    .string()
    .required('Password cannot be empty'),
  repeatPassword: Yup
    .string()
    .required('Repeat Password cannot be empty')
    .oneOf([Yup.ref('password'), `Password does not match`]),
});

import * as Yup from 'yup';

import { emailRegExp, passRegExp } from 'constant';

export const signInValidationSchema = Yup.object().shape({
  email: Yup
    .string()
    .required('Email is required')
    .matches(emailRegExp, 'Invalid email address'),
  password: Yup
    .string()
    .required('Password is required'),
});

export const signUpStepOneValidationShcema = Yup.object().shape({
  firstName: Yup
    .string()
    .required('First Name is required')
    .min(1, 'First Name must be at least 1 character'),
  lastName: Yup
    .string()
    .required('Last Name is required')
    .min(1, 'Last Name must be at least 1 character'),
  phoneNumber: Yup
    .string()
    .required('Phone Number is required'),
  email: Yup
    .string()
    .required('Email is required')
    .matches(emailRegExp, 'Invalid email address'),
});

export const signUpStepTwoValidationShcema = Yup.object().shape({
  department: Yup
    .string()
    .required('Department is required'),
  password: Yup
    .string()
    .required('Password is required')
    .matches(passRegExp),
  repeatPassword: Yup
    .string()
    .required('Repeat Password is required')
    .oneOf([Yup.ref('password'), `Password doesn't match`]),
});

import * as Yup from 'yup';

import { emailRegExp, passRegExp } from 'constant';

export const signInValidationSchema = Yup.object().shape({
  email: Yup
    .string()
    .required('Please fill the email ')
    .matches(emailRegExp, 'Email not follow the format'),
  password: Yup
    .string()
    .required('Password is required')
    .matches(passRegExp, 'Password is not complex'),
});

export const signUpStepOneValidationShcema = Yup.object().shape({
  firstName: Yup
    .string()
    .required('Please fill the First Name')
    .min(5, 'First name must be greater than 5 characters'),
  lastName: Yup
    .string()
    .required('Please fill the Last Name')
    .min(5, 'Last Name must be greater than 5 characters'),
  phoneNumber: Yup
    .string()
    .required('Please fill the phone number'),
  email: Yup
    .string()
    .required('Please fill the email')
    .matches(emailRegExp, 'Email not follow the format'),
});

export const signUpStepTwoValidationShcema = Yup.object().shape({
  department: Yup
    .string()
    .required('Please fill the department name'),
  password: Yup
    .string()
    .required('Please fill the password')
    .matches(passRegExp),
  repeatPassword: Yup
    .string()
    .required('Please fill the repeat password')
    .oneOf([Yup.ref('password'), 'Password is not match']),
});

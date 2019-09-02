
import * as Yup from 'yup';

import { emailRegExp } from 'constant';

export const emailPersonalSchema = Yup.object().shape({
  email: Yup
    .string()
    .required('Email is required')
    .matches(emailRegExp, 'Invalid email address'),
});

export const phonePersonalSchema = Yup.object().shape({
  phone: Yup
    .string()
    .required('Phone Number is required'),
});

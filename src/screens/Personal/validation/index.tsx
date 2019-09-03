
import * as Yup from 'yup';

import { emailRegExp } from 'constant';

export const emailPersonalSchema = Yup.object().shape({
  email: Yup
    .string()
    .required('Email cannot be empty')
    .matches(emailRegExp, 'Invalid email address'),
});

export const phonePersonalSchema = Yup.object().shape({
  phone: Yup
    .string()
    .required('Phone Number cannot be empty'),
});

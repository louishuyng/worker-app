
import * as Yup from 'yup';

import { emailRegExp } from 'constant';

export const emailPersonalSchema = Yup.object().shape({
  email: Yup
    .string()
    .required('Please fill the email')
    .matches(emailRegExp, 'Email not follow the format'),
});

export const phonePersonalSchema = Yup.object().shape({
  phone: Yup
    .string()
    .required('Please fill the phone number'),
});

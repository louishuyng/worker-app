
import * as Yup from 'yup';

import { emailRegExp } from 'constant';

export const emailPersonalSchema = Yup.object().shape({
  email: Yup
    .string()
    .required()
    .matches(emailRegExp),
});

export const phonePersonalSchema = Yup.object().shape({
  phone: Yup
    .string()
    .required(),
});

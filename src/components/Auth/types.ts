import { FormikAuthValues } from 'screens/Auth/models';

export interface handleSubmitAuth {
  (values: FormikAuthValues): any;
}

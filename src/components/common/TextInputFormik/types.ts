import { FormikHandlers, FormikProps } from 'formik';

interface fieldProps {
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
  value: any;
  name: string;
}

export interface TextInputUIProps {
  type?: string;
  placeholder?: string;
  label: string;
  onchange: () => void;
  values: string;
  field: fieldProps;
  form: FormikProps<any>;
}

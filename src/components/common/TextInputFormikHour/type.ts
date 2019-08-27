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
  onTouch?: () => void;
  onchange: () => void;
  value: {
    hour: string,
    minute: string,
  };
  values: any;
  field: fieldProps;
  form: FormikProps<any>;
  isHideKeyboard?: boolean;
}

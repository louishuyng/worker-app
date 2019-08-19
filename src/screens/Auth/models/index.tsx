export interface FormikAuthValues {
  email?: string,
  password?: string,
  repaetPassword?: string,
  firstName?: string,
  lastName?: string,
  phoneNumber?: string,
  department?: string,
}

export const InitMapPropsLogin = {
  email: '',
  password: '',
};

export const InitMapPropsSignUpStepOne = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
};

export const InitMapPropsSignUpStepTwo = {
  department: '',
  password: '',
  repeatPassword: '',
};

export const handleSubmitLogin = (values: FormikAuthValues) => {

};

export const handleSubmitSignUpStepOne = (values: FormikAuthValues) => {

};

export const handleSubmitSignUpStepTwo = (values: FormikAuthValues) => {

};

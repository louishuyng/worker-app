import * as Yup from 'yup';
export const signTimSheetValidationSchema = Yup.object().shape({
  superivorName: Yup
    .string()
    .required('Please fill the supervisor name!'),
});

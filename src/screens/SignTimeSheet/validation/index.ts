import * as Yup from 'yup';
export const signTimSheetValidationSchema = Yup.object().shape({
  supervisorName: Yup
    .string()
    .required(`Supervisor's Name is required`),
});

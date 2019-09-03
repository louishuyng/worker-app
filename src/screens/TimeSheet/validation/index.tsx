
import * as Yup from 'yup';

export const timeSheetSchema = Yup.object().shape({
  requestorName: Yup
    .string()
    .required('Requestor cannot be empty'),
  department: Yup
    .string()
    .required('Department cannot be empty'),
  electric: Yup
    .string()
    .required('Electric cannot be empty'),
  gas: Yup
    .string()
    .required('Gas cannot be empty'),
  section: Yup
    .string()
    .required('Section cannot be empty'),
  account: Yup
    .string()
    .required('Account cannot be empty'),
  workRequest: Yup
    .string()
    .required('Work Request cannot be empty'),
  po: Yup
    .string()
    .required('PO cannot be empty'),
  confirmation: Yup
    .string()
    .required('Confirmation cannot be empty'),
  locationAddress1: Yup
    .string()
    .required('Location Address #1 cannot be empty'),
  locationAddress2: Yup
    .string()
    .required('Location Address #2 cannot be empty'),
  locationAddress3: Yup
    .string()
    .required('Location Address #3 cannot be empty'),
  locationAddress4: Yup
    .string()
    .required('Location Address #4 cannot be empty'),
  crossStreet: Yup
    .string()
    .required('Cross Street cannot be empty'),
  flagger: Yup
    .string()
    .required('Flagger cannot be empty'),
  totalHours: Yup
    .number()
    .required('Total Hours cannot be empty'),
  conEdisonTruck: Yup
    .number()
    .required('Con Edison Truck cannot be empty'),
});

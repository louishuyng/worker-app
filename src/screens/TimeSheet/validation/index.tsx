
import * as Yup from 'yup';

export const timeSheetSchema = Yup.object().shape({
  requestorName: Yup
    .string()
    .required('Requestor Name is required'),
  department: Yup
    .string()
    .required('Department is required'),
  electric: Yup
    .string()
    .required('Electric is required'),
  gas: Yup
    .string()
    .required('Gas is required'),
  section: Yup
    .string()
    .required('Section is required'),
  account: Yup
    .string()
    .required('Account is required'),
  workRequest: Yup
    .string()
    .required('Work Request is required'),
  po: Yup
    .string()
    .required('PO is required'),
  confirmation: Yup
    .string()
    .required('Confirmation is required'),
  locationAddress1: Yup
    .string()
    .required('Location Address #1 is required'),
  locationAddress2: Yup
    .string()
    .required('Location Address #2 is required'),
  locationAddress3: Yup
    .string()
    .required('Location Address #3 is required'),
  locationAddress4: Yup
    .string()
    .required('Location Address #4 is required'),
  crossStreet: Yup
    .string()
    .required('Cross Street is required'),
  flagger: Yup
    .string()
    .required('Flagger is required'),
  totalHours: Yup
    .number()
    .required('Total Hours is required'),
  conEdisonTruck: Yup
    .number()
    .required('Con Edison Truck is required'),
});


import * as Yup from 'yup';

export const timeSheetSchema = Yup.object().shape({
  requestorName: Yup
    .string()
    .required('Please fill the requestor name'),
  department: Yup
    .string()
    .required('Please fill the department name'),
  electric: Yup
    .string()
    .required('Please fill the electirc name'),
  gas: Yup
    .string()
    .required('Please fill the gas name'),
  section: Yup
    .string()
    .required('Please fill the section name'),
  account: Yup
    .string()
    .required('Please fill the account name'),
  workRequest: Yup
    .string()
    .required('Please fill the work request field'),
  po: Yup
    .string()
    .required('Please fill the PO field'),
  confirmation: Yup
    .string()
    .required('Please fill the confirmation field'),
  locationAddress1: Yup
    .string()
    .required('Please fill the Location Address 1 field'),
  locationAddress2: Yup
    .string()
    .required('Please fill the Location Address 2 field'),
  locationAddress3: Yup
    .string()
    .required('Please fill the Location Address 3 field'),
  locationAddress4: Yup
    .string()
    .required('Please fill the Location Address 4 field'),
  crossStreet: Yup
    .string()
    .required('Please fill the Cross Street field'),
  flagger: Yup
    .string()
    .required('Please fill the flagger field'),
  totalHours: Yup
    .number()
    .required('Please fill the Total Hours field'),
  conEdisonTruck: Yup
    .number()
    .required('Please fill the ConEdison Truck field'),
});

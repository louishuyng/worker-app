export interface FormikTimeSheet {
  requestorName?: string;
  dateRequested?: string;
  timeRequested?: string;
  department?: string;
  electric?: string;
  gas?: string;
  section?: string;
  account?: string;
  workRequest?: string;
  po?: string;
  confirmation?: string;
  locationAddress1?: string;
  locationAddress2?: string;
  locationAddress3?: string;
  locationAddress4?: string;
  structureToSecure?: string;
  crossStreet?: string;
  flagger?: string;
  startDate?: Date | string;
  startTime?: Date | string;
  finishDate?: Date | string;
  finishTime?: Date | string;
  options?: number | string;
  totalHours?: number | string;
  conEdisonTruck?: number | string;
}

export const InitMapPropsTimeSheet = {
  requestorName: '',
  dateRequested: '',
  timeRequested: '',
  department: '',
  electric: '',
  gas: '',
  section: '',
  account: '',
  workRequest: '',
  po: '',
  confirmation: '',
  locationAddress1: '',
  locationAddress2: '',
  locationAddress3: '',
  locationAddress4: '',
  structureToSecure: '',
  crossStreet: '',
  flagger: '',
  startDate: '',
  startTime: '',
  finishDate: '',
  finishTime: '',
  options: '',
  totalHours: '',
  conEdisonTruck: '',
};

export const handleSubmitCreateTimeSheet = (values: FormikTimeSheet) => {

};

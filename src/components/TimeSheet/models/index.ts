import { InputAuthData } from 'components/Auth/models/authScreenConfig';
import { getString } from 'locales';

export const requestorForm: Array<InputAuthData> = [
  {
    placeholder: getString('timeSheet', 'requestorPlaceholder'),
    label: getString('timeSheet', 'requestorLabel'),
    fieldName: 'requestorName',
    type: 'text',
  },
  {
    placeholder: getString('timeSheet', 'requestorPlaceholder'),
    label: getString('timeSheet', 'dataRequestedLabel'),
    fieldName: 'dateRequested',
    type: 'date',
  },
  {
    placeholder: getString('timeSheet', 'requestorPlaceholder'),
    label: getString('timeSheet', 'timeRequestedLabel'),
    fieldName: 'timeRequested',
    type: 'time',
  },
];

export const formDataOne: Array<InputAuthData> = [
  {
    placeholder: getString('timeSheet', 'departmentPlaceholder'),
    label: getString('timeSheet', 'departmentLabel'),
    fieldName: 'department',
    type: 'text',
  },
  {
    placeholder: '',
    label: getString('timeSheet', 'electricLabel'),
    fieldName: 'electric',
    type: 'text',
  },
  {
    placeholder: '',
    label: getString('timeSheet', 'gasLabel'),
    fieldName: 'timeRequested',
    type: 'text',
  },
];

export const formDataTwo: Array<InputAuthData> = [
  {
    placeholder: '',
    label: getString('timeSheet', 'sectionLabel'),
    fieldName: 'section',
    type: 'text',
  },
  {
    placeholder: '',
    label: getString('timeSheet', 'accountLabel'),
    fieldName: 'account',
    type: 'text',
  },
  {
    placeholder: '',
    label: getString('timeSheet', 'workRequestLabel'),
    fieldName: 'workRequest',
    type: 'text',
  },
  {
    placeholder: '',
    label: getString('timeSheet', 'poLabel'),
    fieldName: 'po',
    type: 'text',
  },
  {
    placeholder: '',
    label: getString('timeSheet', 'confirmationLabel'),
    fieldName: 'confirmation',
    type: 'text',
  },
];

export const formDataThree: Array<InputAuthData> = [
  {
    placeholder: '',
    label: getString('timeSheet', 'location1Label'),
    fieldName: 'locationAddress1',
    type: 'text',
  },
  {
    placeholder: '',
    label: getString('timeSheet', 'structureLabel'),
    fieldName: 'structureToSecure',
    type: 'text',
  },
  {
    placeholder: '',
    label: getString('timeSheet', 'crossStreetLabel'),
    fieldName: 'crossStreet',
    type: 'text',
  },
  {
    placeholder: '',
    label: getString('timeSheet', 'location2Label'),
    fieldName: 'locationAddress2',
    type: 'text',
  },
  {
    placeholder: '',
    label: getString('timeSheet', 'location3Label'),
    fieldName: 'locationAddress3',
    type: 'text',
  },
  {
    placeholder: '',
    label: getString('timeSheet', 'location4Label'),
    fieldName: 'locationAddress4',
    type: 'text',
  },
  {
    placeholder: '',
    label: getString('timeSheet', 'flaggerLabel'),
    fieldName: 'flagger',
    type: 'text',
  },
];

export const formDataFour: Array<InputAuthData> = [
  {
    label: getString('timeSheet', 'startDateLabel'),
    placeholder: getString('timeSheet', 'startDatePlaceholder'),
    fieldName: 'startDate',
    type: 'date',
  },
  {
    placeholder: getString('timeSheet', 'startTimePlaceholder'),
    label: getString('timeSheet', 'startTimeLabel'),
    fieldName: 'startTime',
    type: 'time',
  },
  {
    placeholder: getString('timeSheet', 'finishDatePlaceholder'),
    label: getString('timeSheet', 'finishDateLabel'),
    fieldName: 'finishDate',
    type: 'date',
  },
  {
    placeholder: getString('timeSheet', 'finishTimePlaceholder'),
    label: getString('timeSheet', 'finishTimeLabel'),
    fieldName: 'finishTime',
    type: 'time',
  },
  {
    placeholder: '',
    label: '',
    fieldName: 'options',
    type: 'checkbox',
  },
];

export const formDataFive: Array<InputAuthData> = [
  {
    placeholder: '',
    label: getString('timeSheet', 'totalHoursLabel'),
    fieldName: 'totalHours',
    type: 'text',
  },
  {
    placeholder: '',
    label: getString('timeSheet', 'conEdisonTruckLabel'),
    fieldName: 'conEdisonTruck',
    type: 'text',
  },
];

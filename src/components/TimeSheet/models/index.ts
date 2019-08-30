import { InputAuthData } from 'components/Auth/models/authScreenConfig';
import { getString } from 'locales';

export const requestorForm: Array<InputAuthData> = [
  {
    placeholder: getString('timeSheet', 'requestorPlaceholder'),
    label: getString('timeSheet', 'requestorLabel'),
    fieldName: 'requestorName',
    type: 'text',
    keyboardType: 'default',
  },
  {
    placeholder: getString('timeSheet', 'dateRequestPlaceholder'),
    label: getString('timeSheet', 'dateRequestedLabel'),
    fieldName: 'dateRequested',
    type: 'date',
    keyboardType: 'default',
  },
  {
    placeholder: getString('timeSheet', 'timeRequestPlaceholder'),
    label: getString('timeSheet', 'timeRequestedLabel'),
    fieldName: 'timeRequested',
    type: 'time',
    keyboardType: 'default',
  },
];

export const formDataOne: Array<InputAuthData> = [
  {
    placeholder: getString('timeSheet', 'departmentPlaceholder'),
    label: getString('timeSheet', 'departmentLabel'),
    fieldName: 'department',
    type: 'text',
    keyboardType: 'default',
  },
  {
    placeholder: '',
    label: getString('timeSheet', 'electricLabel'),
    fieldName: 'electric',
    type: 'text',
    keyboardType: 'default',
  },
  {
    placeholder: '',
    label: getString('timeSheet', 'gasLabel'),
    fieldName: 'timeRequested',
    type: 'text',
    keyboardType: 'default',
  },
];

export const formDataTwo: Array<InputAuthData> = [
  {
    placeholder: '',
    label: getString('timeSheet', 'sectionLabel'),
    fieldName: 'section',
    type: 'text',
    keyboardType: 'default',
  },
  {
    placeholder: '',
    label: getString('timeSheet', 'accountLabel'),
    fieldName: 'account',
    type: 'text',
    keyboardType: 'default',
  },
  {
    placeholder: '',
    label: getString('timeSheet', 'workRequestLabel'),
    fieldName: 'workRequest',
    type: 'text',
    keyboardType: 'default',
  },
  {
    placeholder: '',
    label: getString('timeSheet', 'poLabel'),
    fieldName: 'po',
    type: 'text',
    keyboardType: 'default',
  },
  {
    placeholder: '',
    label: getString('timeSheet', 'confirmationLabel'),
    fieldName: 'confirmation',
    type: 'text',
    keyboardType: 'default',
  },
];

export const formDataThree: Array<InputAuthData> = [
  {
    placeholder: '',
    label: getString('timeSheet', 'location1Label'),
    fieldName: 'locationAddress1',
    type: 'text',
    keyboardType: 'default',
  },
  {
    placeholder: '',
    label: getString('timeSheet', 'structureLabel'),
    fieldName: 'structureToSecure',
    type: 'text',
    keyboardType: 'default',
  },
  {
    placeholder: '',
    label: getString('timeSheet', 'crossStreetLabel'),
    fieldName: 'crossStreet',
    type: 'text',
    keyboardType: 'default',
  },
  {
    placeholder: '',
    label: getString('timeSheet', 'location2Label'),
    fieldName: 'locationAddress2',
    type: 'text',
    keyboardType: 'default',
  },
  {
    placeholder: '',
    label: getString('timeSheet', 'location3Label'),
    fieldName: 'locationAddress3',
    type: 'text',
    keyboardType: 'default',
  },
  {
    placeholder: '',
    label: getString('timeSheet', 'location4Label'),
    fieldName: 'locationAddress4',
    type: 'text',
    keyboardType: 'default',
  },
  {
    placeholder: '',
    label: getString('timeSheet', 'flaggerLabel'),
    fieldName: 'flagger',
    type: 'text',
    keyboardType: 'default',
  },
];

export const formDataFour: Array<InputAuthData> = [
  {
    label: getString('timeSheet', 'startDateLabel'),
    placeholder: getString('timeSheet', 'startDatePlaceholder'),
    fieldName: 'startDate',
    type: 'date',
    keyboardType: 'default',
  },
  {
    placeholder: getString('timeSheet', 'startTimePlaceholder'),
    label: getString('timeSheet', 'startTimeLabel'),
    fieldName: 'startTime',
    type: 'time',
    keyboardType: 'default',
  },
  {
    placeholder: getString('timeSheet', 'finishDatePlaceholder'),
    label: getString('timeSheet', 'finishDateLabel'),
    fieldName: 'finishDate',
    type: 'date',
    keyboardType: 'default',
  },
  {
    placeholder: getString('timeSheet', 'finishTimePlaceholder'),
    label: getString('timeSheet', 'finishTimeLabel'),
    fieldName: 'finishTime',
    type: 'time',
    keyboardType: 'default',
  },
];

export const formDataCheckbox: Array<any> = [
  {
    text: getString('timeSheet', 'lunch'),
    type: 'checkbox',
    fieldName: 'lunch',
  },
  {
    text: getString('timeSheet', 'dinner'),
    type: 'checkbox',
    fieldName: 'dinner',
  },
  {
    text: getString('timeSheet', 'noBreak'),
    type: 'checkbox',
    fieldName: 'noBreak',
  },
];

export const formDataFive: Array<InputAuthData> = [
  {
    placeholder: '',
    label: getString('timeSheet', 'totalHoursLabel'),
    fieldName: 'totalHours',
    type: 'text',
    keyboardType: 'default',
  },
  {
    placeholder: '',
    label: getString('timeSheet', 'conEdisonTruckLabel'),
    fieldName: 'conEdisonTruck',
    type: 'text',
    keyboardType: 'default',
  },
];

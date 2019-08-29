import React from 'react';
import { withConnectFormik } from 'screens/hoc/withConnectFormik';
import { handleSubmitCreateTimeSheet, InitMapPropsTimeSheet } from './models';
import TimeSheet from 'components/TimeSheet';
import { StageTimeSheet } from 'components/TimeSheet/type';

const CreateTimeSheetComponent = (props: any) => <TimeSheet stageTimeSheet={StageTimeSheet.CREATE} {...props} />;
const CreateReviewSheetComponent = (props: any) => <TimeSheet stageTimeSheet={StageTimeSheet.REVIEW} {...props} />;

export const CreateTimeSheetScreen = withConnectFormik({
  Component: CreateTimeSheetComponent,
  displayName: 'CreateTimeSheet',
  handleSubmit: handleSubmitCreateTimeSheet,
  initMapProps: InitMapPropsTimeSheet,
});

export const CreateReviewSheetScreen = withConnectFormik({
  Component: CreateReviewSheetComponent,
  displayName: 'ReviewTimeSheet',
  handleSubmit: handleSubmitCreateTimeSheet,
  initMapProps: InitMapPropsTimeSheet,
});

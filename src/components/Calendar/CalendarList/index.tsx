import React from 'react';
import { CalendarList } from 'react-native-calendars';

import LocaleConfig from '../config';

LocaleConfig.defaultLocale = 'en';

interface Props {

}

interface State {

}

export default class CalendarListComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <CalendarList />
    );
  }
}

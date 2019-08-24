import React from 'react';
import CalendarListComponent from './CalendarList';

interface Props {

}

interface State {

}

export default class CalendarComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <CalendarListComponent />
    );
  }
}

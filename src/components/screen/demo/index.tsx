import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

import { getString } from '../../../locales';

interface Props {
}

interface State {
  data: Array<string>
}

export default class Demo extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>{getString('DEMO')}</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
;

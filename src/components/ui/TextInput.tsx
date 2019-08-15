import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 6,
    height: 50,
    padding: 8,
    marginBottom: 20,
    fontSize: 17,
    backgroundColor: '#FFFFFF',
    borderColor: '#DBDEDE'
  },
  lable: {
    fontSize: 18,
    paddingBottom: 5,
    fontWeight: "300"
  }
});

export type TextInputProps = {
  placeholder?: string,
  lable: string,
  onchange: () => void,
}

export default (props: TextInputProps) => (
  <View>
    <Text style={styles.lable}>{props.lable}</Text>
    <TextInput style={styles.input} placeholder={props.placeholder} onChange={props.onchange}/>
  </View>
);


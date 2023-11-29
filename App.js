import { Text, View, StyleSheet } from 'react-native';
import React from 'react'
import Functioncom from './components/FunctionCom';
import ClassCom from './components/ClassCom'

export default function App() {
  return (
    <View style={styles.container}>
    <Text style={styles.paragraph}>TUGAS 1 PRAK DPM</Text>
        <Functioncom/>
        <ClassCom/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'red',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
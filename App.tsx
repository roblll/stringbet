import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Card from './components/Card'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Card rank='A' suit='S' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23A484',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

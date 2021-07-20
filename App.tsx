import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Card from './components/Card'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.headerContainer}></View>
      <View style={styles.cardsContainer}>
        <Card rank='A' suit='S' />
        <Card rank='A' suit='D' />
      </View>
      <View style={styles.controlsContainer}></View>
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
  headerContainer: {
    flex: 1,
  },
  cardsContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  controlsContainer: {
    flex: 1,
  }
});

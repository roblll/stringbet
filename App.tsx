import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Card, { rankSuitType } from './components/Card'

interface IAppData {
  card1: rankSuitType;
  card2: rankSuitType;
}

export default function App() {
  const [allValues, setAllValues] = useState<IAppData>({
    card1: 'AS',
    card2: 'AC',
  })

  const { card1, card2 } = allValues;

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.headerContainer}></View>
      <View style={styles.cardsContainer}>
        <Card id={card1} />
        <Card id={card2} />
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

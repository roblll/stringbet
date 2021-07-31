import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';

import Card, { rankSuitType } from './components/Card';
import ScrollPicker from './components/ScrollPicker';

import { getRandomHand } from "./utils/utils"

const data: string[] = []
for (let i = 1; i <= 169; i++) {
  data.push(String(i))
}

interface IAppData {
  card1: rankSuitType;
  card2: rankSuitType;
}

export default function App() {
  const [state, setState] = useState<IAppData>(() => {
    const { card1, card2 } = getRandomHand()
    return ({
      card1,
      card2
    })
  })

  const { card1, card2 } = state;

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.headerContainer}></View>
      <View style={styles.cardsContainer}>
        <Card id={card1} />
        <Card id={card2} />
      </View>
      <View style={styles.controlsContainer}>
        <ScrollPicker data={data} />
      </View>
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

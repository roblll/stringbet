import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, Button } from 'react-native';

import Card from './components/Card';
import ScrollPicker, { dataType } from './components/ScrollPicker';

import { getRandomHand, CardType } from "./utils/utils";

const scrollPickerWidth = Dimensions.get('window').width * 6 / 15 * .9;

const data: dataType[] = []
for (let i = 1; i <= 169; i++) {
  data.push({value: i, label: String(i)})
}

interface IAppData {
  card1: CardType;
  card2: CardType;
  handRank: number;
  handPercentage: number;
}

const App = () => {
  const [state, setState] = useState<IAppData>(() => {
    const { card1, card2 } = getRandomHand()
    return ({
      card1,
      card2,
      handRank: 0,
      handPercentage: 99,
    })
  })

  const setHandRank = (handRank: number) => {
    setState({ ...state, handRank })
  }

  const setHandPercentage = (handPercentage: number) => {
    setState({ ...state, handPercentage })
  }

  const checkAnswer = () => {
    const { card1, card2, handRank, handPercentage } = state;
    // hand = convertCardsToHand()
    // return rankings[hand][0] === handRank + 1 && rankings[hand][1] === handPercentage
  }

  const { card1, card2 } = state;

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View style={styles.headerContainer}></View>
      <View style={styles.cardsContainer}>
        <Card rank={card1.rank} suit={card1.suit} />
        <Card rank={card2.rank} suit={card2.suit} />
      </View>
      <View style={styles.controlsContainer}>
        <ScrollPicker
          data={data}
          width={scrollPickerWidth}
          setPick={setHandRank}
        />
        <ScrollPicker
          data={data}
          width={scrollPickerWidth}
          setPick={setHandPercentage}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title='Check' onPress={() => {}} />
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
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  },
  buttonContainer: {
    marginBottom: 20,
  },
});

export default App;
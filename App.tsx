import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, Button } from 'react-native';

import Card from './components/Card';
import ScrollPicker, { dataType } from './components/ScrollPicker';

import { 
  getRandomHand,
  getRandomRankAndPercentage,
  CardType, 
  convertCardsToHand, 
  getHandRank, 
  getHandPercentage,
} from "./utils/utils";

const scrollPickerWidth = Dimensions.get('window').width * 6 / 15 * .9;

const rankData: dataType[] = []
for (let i = 1; i <= 169; i++) {
  rankData.push({value: i, label: `${i}`})
}
const percentageData: dataType[] = []
for (let i = 99; i >= 0; i--) {
  percentageData.push({value: i, label: `${i} %`})
}

interface IAppData {
  card1: CardType;
  card2: CardType;
  handRank: number;
  handPercentage: number;
}

const App = () => {
  const [state, setState] = useState<IAppData>(() => {
    const { card1, card2 } = getRandomHand();
    const { handRank, handPercentage } = getRandomRankAndPercentage();
    return ({
      card1,
      card2,
      handRank,
      handPercentage,
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
    const hand = convertCardsToHand(card1, card2)
    console.log(getHandRank(hand), handRank)
    console.log(getHandRank(hand) === handRank)
    console.log(getHandPercentage(getHandRank(hand)), handPercentage)
    console.log(getHandPercentage(getHandRank(hand)) === handPercentage)
    // return rankings[hand][0] === handRank + 1 && rankings[hand][1] === handPercentage
  }

  const { card1, card2, handRank, handPercentage } = state;

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
          initialSelectedItem={handRank}
          data={rankData}
          width={scrollPickerWidth}
          height={scrollPickerWidth}
          setPick={setHandRank}
          transparentItemRows={1}
        />
        <ScrollPicker
          initialSelectedItem={handPercentage}
          data={percentageData}
          width={scrollPickerWidth}
          height={scrollPickerWidth}
          setPick={setHandPercentage}
          transparentItemRows={1}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title='Check' onPress={checkAnswer} />
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
    flex: 3,
  },
  cardsContainer: {
    flex: 3,
    flexDirection: 'row',
  },
  controlsContainer: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  },
  buttonContainer: {
    flex: 1.5,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default App;
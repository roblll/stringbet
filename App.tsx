import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, Button, Modal, Text } from 'react-native';

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
const scrollPickerHeight = Dimensions.get('window').height / 6 * .75;

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
  modalVisible: boolean;
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
      modalVisible: false,
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
    const answerHandRank = getHandRank(hand)
    const answerHandPercentage = getHandPercentage(answerHandRank)
    const newHand = getRandomHand();
    if (answerHandRank === handRank && answerHandPercentage === handPercentage) {
      console.log('correct')
    } else {
      console.log('wrong')
    }
    showResult()
  }

  const showResult = () => {
    setState({ ...state, modalVisible: true})
  }

  const { card1, card2, handRank, handPercentage, modalVisible } = state;

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Modal
        visible={modalVisible}
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Modal</Text>
            <Button title="close" onPress={() => {
              setState({...state, modalVisible: false});
            }} />
          </View> 
        </View>
      </Modal>
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
          height={scrollPickerHeight}
          setPick={setHandRank}
          transparentItemRows={1}
        />
        <ScrollPicker
          initialSelectedItem={handPercentage}
          data={percentageData}
          width={scrollPickerWidth}
          height={scrollPickerHeight}
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
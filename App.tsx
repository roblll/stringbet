import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, Modal } from 'react-native';
import Constants from "expo-constants";

import Card from './components/Card';
import ScrollPicker, { dataType } from './components/ScrollPicker';
import Result from './components/Results';
import ChipButton from './components/ChipButton';
import Stats from './components/Stats';
import Title from './components/Title';
import Banner from './components/Banner';
import Guide from './components/Guide';
import Menu from './components/Menu';

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
  resultVisible: boolean;
  guideVisible: boolean;
  menuVisible: boolean;
  resultMessage: {
    result: boolean,
    hand: string,
    answerHandRank: number,
    answerHandPercentage: number,
  };
  correct: number;
  guesses: number;
  streak: number;
  minRank: number;
  maxRank: number;
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
      resultVisible: false,
      guideVisible: false,
      menuVisible: false,
      resultMessage: {
        result: false,
        hand: '',
        answerHandRank: 1,
        answerHandPercentage: 1,
      },
      correct: 0,
      guesses: 0,
      streak: 0,
      minRank: 1,
      maxRank: 169,
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
    const result = answerHandRank === handRank && answerHandPercentage === handPercentage;
    showResult(result, hand, answerHandRank, answerHandPercentage)
  }

  const showResult = (
    result: boolean,
    hand: string,
    answerHandRank: number, 
    answerHandPercentage: number
    ) => {
      const newStreak = result ? streak + 1 : 0;
      setState({ 
        ...state, 
        resultVisible: true, 
        resultMessage: { result, hand, answerHandRank, answerHandPercentage },
        correct: result ? correct + 1 : correct,
        guesses: guesses + 1,
        streak: newStreak,
      })
  }

  const hideResult = () => {
    const { minRank, maxRank } = state;
    let rank = null;
    while (rank === null) {
      const { card1 , card2 } = getRandomHand();
      const hand = convertCardsToHand(card1, card2)
      rank = getHandRank(hand)
      if (rank >= minRank && rank <= maxRank) {
        setState({ ...state, resultVisible: false, card1: card1, card2: card2 })
      } else {
        rank = null
      }
    }
  }

  const showGuide = () => {
    setState({ ...state, guideVisible: true })
  }

  const hideGuide = () => {
    setState({ ...state, guideVisible: false })
  }

  const showMenu = () => {
    setState({ ...state, menuVisible: true })
  }

  const hideMenu = () => {
    setState({ ...state, menuVisible: false })
  }

  const { 
    card1, 
    card2, 
    handRank, 
    handPercentage, 
    resultVisible,
    guideVisible,
    menuVisible,
    resultMessage: {
      result,
      hand,
      answerHandRank,
      answerHandPercentage,
    },
    correct,
    guesses,
    streak,
  } = state;

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View style={{height: Constants.statusBarHeight}}></View>
      <Modal
        visible={resultVisible || guideVisible || menuVisible}
        transparent={true}
      >
        {menuVisible && <Menu />}
        {guideVisible && <Guide hide={hideGuide}/>}
        {resultVisible &&
          <Result 
            result={result}
            hand={hand}
            rank={answerHandRank} 
            percentage={answerHandPercentage} 
            hide={hideResult}
          />
        }
      </Modal>
      <Banner />
      <View style={styles.headerContainer}>
        <Title onPress={showMenu} />
      </View>
      <Stats correct={correct} guesses={guesses} streak={streak} />
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
        <ChipButton onPress={checkAnswer} />
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
    flex: 1,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default App;
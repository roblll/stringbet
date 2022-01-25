import React from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';

import { RankType, SuitType } from '../utils/utils';

const cardWidth = Dimensions.get('window').width * 6 / 15;
const cardHeight = cardWidth * 1056 / 691;
const maxCardWidth = 200;
const maxCardHeight = maxCardWidth * 1056 / 691;

export type Props = {
  rank: RankType,
  suit: SuitType,
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: cardWidth,
    height: cardHeight,
    maxWidth: maxCardWidth,
    maxHeight: maxCardHeight,
  },
  cardStyle: {
    width: cardWidth,
    height: cardHeight,
    maxWidth: maxCardWidth,
    maxHeight: maxCardHeight,
  }
});

const cardImages = {
  '2C': <Image
    style={styles.cardStyle}
    source={require('../assets/card-images/2C.png')}
  />,
  '2D': <Image
    style={styles.cardStyle}
    source={require('../assets/card-images/2D.png')}
  />,
  '2H': <Image
    style={styles.cardStyle}
    source={require('../assets/card-images/2H.png')}
  />,
  '2S': <Image
    style={styles.cardStyle}
    source={require('../assets/card-images/2S.png')}
  />,
  '3C': <Image
    style={styles.cardStyle}
    source={require('../assets/card-images/3C.png')}
  />,
  '3D': <Image
    style={styles.cardStyle}
    source={require('../assets/card-images/3D.png')}
  />,
  '3H': <Image
    style={styles.cardStyle}
    source={require('../assets/card-images/3H.png')}
  />,
  '3S': <Image
    style={styles.cardStyle}
    source={require('../assets/card-images/3S.png')}
  />,
  '4C': <Image
    style={styles.cardStyle}
    source={require('../assets/card-images/4C.png')}
  />,
  '4D': <Image
    style={styles.cardStyle}
    source={require('../assets/card-images/4D.png')}
  />,
  '4H': <Image
    style={styles.cardStyle}
    source={require('../assets/card-images/4H.png')}
  />,
  '4S': <Image
    style={styles.cardStyle}
    source={require('../assets/card-images/4S.png')}
  />,
  '5C': <Image
    style={styles.cardStyle}
    source={require('../assets/card-images/5C.png')}
  />,
  '5D': <Image
    style={styles.cardStyle}
    source={require('../assets/card-images/5D.png')}
  />,
  '5H': <Image
    style={styles.cardStyle}
    source={require('../assets/card-images/5H.png')}
  />,
  '5S': <Image
    style={styles.cardStyle}
    source={require('../assets/card-images/5S.png')}
  />,
  '6C': <Image
    style={styles.cardStyle}
    source={require('../assets/card-images/6C.png')}
  />,
  '6D': <Image
    style={styles.cardStyle}
    source={require('../assets/card-images/6D.png')}
  />,
  '6H': <Image
    style={styles.cardStyle}
    source={require('../assets/card-images/6H.png')}
  />,
  '6S': <Image
    style={styles.cardStyle}
    source={require('../assets/card-images/6S.png')}
  />,
  '7C': <Image
    style={styles.cardStyle}
    source={require('../assets/card-images/7C.png')}
  />,
  '7D': <Image
    style={styles.cardStyle}
    source={require('../assets/card-images/7D.png')}
  />,
  '7H': <Image
    style={styles.cardStyle}
    source={require('../assets/card-images/7H.png')}
  />,
  '7S': <Image
    style={styles.cardStyle}
    source={require('../assets/card-images/7S.png')}
  />,
  '8C': <Image
    style={styles.cardStyle}
    source={require('../assets/card-images/8C.png')}
  />,
  '8D': <Image
    style={styles.cardStyle}
    source={require('../assets/card-images/8D.png')}
  />,
  '8H': <Image
    style={styles.cardStyle}
    source={require('../assets/card-images/8H.png')}
  />,
  '8S': <Image
    style={styles.cardStyle}
    source={require('../assets/card-images/8S.png')}
  />,
  '9C': <Image
    style={styles.cardStyle}
    source={require('../assets/card-images/9C.png')}
  />,
  '9D': <Image
    style={styles.cardStyle}
    source={require('../assets/card-images/9D.png')}
  />,
  '9H': <Image
    style={styles.cardStyle}
    source={require('../assets/card-images/9H.png')}
  />,
  '9S': <Image
    style={styles.cardStyle}
    source={require('../assets/card-images/9S.png')}
  />,
  'TC': <Image
    style={styles.cardStyle}
    source={require('../assets/card-images/TC.png')}
  />,
  'TD': <Image
    style={styles.cardStyle}
    source={require('../assets/card-images/TD.png')}
  />,
  'TH': <Image
    style={styles.cardStyle}
    source={require('../assets/card-images/TH.png')}
  />,
  'TS': <Image
    style={styles.cardStyle}
    source={require('../assets/card-images/TS.png')}
  />,
  'JC': <Image
    style={styles.cardStyle}
    source={require('../assets/card-images/JC.png')}
  />,
  'JD': <Image
    style={styles.cardStyle}
    source={require('../assets/card-images/JD.png')}
  />,
  'JH': <Image
    style={styles.cardStyle}
    source={require('../assets/card-images/JH.png')}
  />,
  'JS': <Image
    style={styles.cardStyle}
    source={require('../assets/card-images/JS.png')}
  />,
  'QC': <Image
    style={styles.cardStyle}
    source={require('../assets/card-images/QC.png')}
  />,
  'QD': <Image
    style={styles.cardStyle}
    source={require('../assets/card-images/QD.png')}
  />,
  'QH': <Image
    style={styles.cardStyle}
    source={require('../assets/card-images/QH.png')}
  />,
  'QS': <Image
    style={styles.cardStyle}
    source={require('../assets/card-images/QS.png')}
  />,
  'KC': <Image
    style={styles.cardStyle}
    source={require('../assets/card-images/KC.png')}
  />,
  'KD': <Image
    style={styles.cardStyle}
    source={require('../assets/card-images/KD.png')}
  />,
  'KH': <Image
    style={styles.cardStyle}
    source={require('../assets/card-images/KH.png')}
  />,
  'KS': <Image
    style={styles.cardStyle}
    source={require('../assets/card-images/KS.png')}
  />,
  'AC': <Image
    style={styles.cardStyle}
    source={require('../assets/card-images/AC.png')}
  />,
  'AD': <Image
    style={styles.cardStyle}
    source={require('../assets/card-images/AD.png')}
  />,
  'AH': <Image
    style={styles.cardStyle}
    source={require('../assets/card-images/AH.png')}
  />,
  'AS': <Image
    style={styles.cardStyle}
    source={require('../assets/card-images/AS.png')}
  />
}

const Card: React.FC<Props> = ({ rank, suit }) => {
  const rankSuit: keyof typeof cardImages = `${rank}${suit}`
  return (
    <View style={styles.container}>
      {cardImages[rankSuit]}
    </View>
  )
}

export default Card;
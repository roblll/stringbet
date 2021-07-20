import React from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';

const cardWidth = Dimensions.get('window').width * 6 / 15;
const cardHeight = cardWidth * 1056 / 691;

export type Props = {
  rank: 'A';
  suit: 'C' | 'D' | 'H' | 'S';
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: cardWidth,
    height: cardHeight,
  },
  cardStyle: {
    width: cardWidth,
    height: cardHeight,
  }
});

const cardImages = {
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



  const rankSuit: 'AC' | 'AD' | 'AH' | 'AS' = `${rank}${suit}`
  return (
    <View style={styles.container}>
      {cardImages[rankSuit]}
    </View>
  )
}

export default Card;
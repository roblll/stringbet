import React from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';

const cardWidth = Dimensions.get('window').width * 6 / 15;
const cardHeight = cardWidth * 1056 / 691;

export type Props = {
  suit: string;
  rank: number;
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

const Card: React.FC<Props> = ({ suit, rank }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.cardStyle}
        source={require('../assets/card-images/AC.png')}
      />
    </View>
  )
}

export default Card;
import React from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';

const cardWidth = Dimensions.get('window').width * 6 / 15;
const cardHeight = cardWidth * 1056 / 691;

export type Props = {
  rank: string;
  suit: string;
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

const Card: React.FC<Props> = ({ rank, suit }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.cardStyle}
        source={require('../assets/card-images/AS.png')}
      />
    </View>
  )
}

export default Card;
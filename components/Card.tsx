import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const cardWidth = Dimensions.get('window').width * 6 / 15;
const cardHeight = cardWidth * 3.5 / 2.5

export type Props = {
  suit: string;
  rank: number;
}

const Card: React.FC<Props> = ({ suit, rank }) => {
  return (
    <View style={styles.container}>
      <Text>{rank} {suit}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: cardWidth,
    height: cardHeight,
    borderRadius: 10
  },
});

export default Card;
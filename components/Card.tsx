import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
  },
});

export default Card;
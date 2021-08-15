import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  streak: number;
  correct: number;
  guesses: number;
}

const Stats: React.FC<Props> = ({ streak, correct, guesses }) => {
  return (
    <View style={styles.container}>
      <Text>{`${correct} - ${guesses} (${streak})`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Stats;
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  streak: number;
  correct: number;
  incorrect: number;
}

const Stats: React.FC<Props> = ({ streak, correct, incorrect }) => {
  return (
    <View style={styles.container}>
      <Text>{`${correct} - ${incorrect} (${streak})`}</Text>
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
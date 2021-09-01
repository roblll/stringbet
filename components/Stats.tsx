import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

type Props = {
  streak: number;
  correct: number;
  guesses: number;
}

const Stats: React.FC<Props> = ({ streak, correct, guesses }) => {
  let [fontsLoaded] = useFonts({
    'CardC': require('../assets/fonts/CARDC___.otf'),
  });

  if (!fontsLoaded) {
    return <View></View>
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.content}>{`${correct} - ${guesses} (${streak})`}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  content: {
    fontFamily: 'CardC',
    color: '#093b2c',
    fontWeight: '500',
  }
})

export default Stats;
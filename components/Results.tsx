import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const size = Dimensions.get('window').width / 2;

type Props = {
  message: string;
  rank: number;
  percentage: number;
}

const Result: React.FC<Props> = ({ message, rank, percentage }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>{message}</Text>
        <Text>{`rank: ${rank} - percentage: ${percentage}%`}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    height: size,
    width: size,
    backgroundColor: '#fff',
    borderColor: '#0d7854',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Result;
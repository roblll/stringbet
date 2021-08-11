import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  message: string;
  rank: number;
  percentage: number;
}

const Result: React.FC<Props> = ({ message, rank, percentage }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>{`${message} - rank: ${rank} - percentage: ${percentage}%`}</Text>
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
    height: 100,
    width: 100,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Result;
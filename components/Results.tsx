import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

const size = Dimensions.get('window').width / 2;

type Props = {
  message: string;
  rank: number;
  percentage: number;
}

const Result: React.FC<Props> = ({ message, rank, percentage }) => {
  return message === 'correct' ? (
    <View style={styles.container}>
      <View style={styles.content}>
        <MaterialIcons name="check" size={24} color="#23A484" />
        <Text>{`rank: ${rank} - percentage: ${percentage}%`}</Text>
      </View>
    </View>
  ) : (
    <View style={styles.container}>
      <View style={styles.content}>
        <MaterialIcons name="close" size={24} color="#FC6E51" />
        <Text>{`rank: ${rank} - percentage: ${percentage}%`}</Text>
      </View>
    </View>
  );
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
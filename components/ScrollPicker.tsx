import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';

const width = Dimensions.get('window').width;
const height = width;

const data: number[] = []
for (let i = 1; i <= 169; i++) {
  data.push(i)
}

const ScrollPicker = () => {
  return (
    <View style={styles.container}>
      <Text>ScrollPicker</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    height: height,
  },
});

export default ScrollPicker;
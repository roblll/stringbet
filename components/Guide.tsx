import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Guide = () => {
  return (
    <View style={styles.container}>
      <Text>Guide</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 200,
    backgroundColor: 'red',
  }
})

export default Guide;
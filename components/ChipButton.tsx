import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width * .25;

const ChipButton = () => {
  return (
    <View>
      <Image style={styles.chipImage} source={require('../assets/chip.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chipImage: {
    width: width,
    height: width,
  },
})

export default ChipButton;
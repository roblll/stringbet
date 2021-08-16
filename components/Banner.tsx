import React from 'react';
import { View, StyleSheet} from 'react-native';

const Banner = () => {
  return (
    <View style={styles.container}></View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    backgroundColor: 'gray',
  }
})

export default Banner;
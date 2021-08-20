import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, Image } from 'react-native';

const width = Dimensions.get('window').width * .55;

const Title = () => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1} 
      onPress={() => alert('test')}
    >
      <Image style={styles.logo} source={require('../assets/stringbet-full-logo.png')} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: width,
    height: width * (35 / 100),
  },
})

export default Title;
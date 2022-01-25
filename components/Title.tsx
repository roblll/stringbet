import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, Image } from 'react-native';

const width = Dimensions.get('window').width * .55;
// const width = Dimensions.get('window').height * .25;

type Props = {
  onPress: () => void;
}

const Title: React.FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1} 
      onPress={onPress}
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
    maxWidth: 200,
    maxHeight: 200 * (35 / 100),
  },
})

export default Title;
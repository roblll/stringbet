import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width * .25;

type Props = {
  onPress: () => void;
}

const ChipButton: React.FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <Image style={styles.chipImage} source={require('../assets/chip.png')} />
    </TouchableOpacity>
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
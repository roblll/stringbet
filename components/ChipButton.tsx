import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';

const size = Dimensions.get('window').width * .25;
const maxSize = 120;

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
    width: size,
    height: size,
    maxWidth: maxSize,
    maxHeight: maxSize,
  },
})

export default ChipButton;
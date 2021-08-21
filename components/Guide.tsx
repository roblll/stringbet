import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const contentWidth = width * .55;
const contentHeight = contentWidth * 1056 / 691;

type Props = {
  hide: () => void;
}

const Guide: React.FC<Props> = ({ hide }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={hide} activeOpacity={1}>
      <View style={styles.bg}></View>
      <View style={styles.content}>
        <Text>Guide</Text>
      </View>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    position: 'absolute',
    height: contentHeight,
    width: contentWidth,
    backgroundColor: '#fff',
    borderColor: '#0d7854',
    borderWidth: 1,
    borderRadius: width / 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bg: {
    flex: 1,
    backgroundColor: '#000',
    opacity: .25,
    height: height,
    width: width,
  }
})

export default Guide;
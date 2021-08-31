import React from 'react';
import { View, Text, StyleSheet, Button, Dimensions, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const contentWidth = width * .55;
const contentHeight = contentWidth * 1056 / 691;

type Props = {
  hide: () => void;
  showGuide: () => void;
  showRange: () => void;
}

const Menu: React.FC<Props> = ({ hide, showGuide, showRange }) => {
  return (
    <View style={styles.container}>
      <View style={styles.bg} />
      <View style={styles.content}>
        <Text style={styles.title}>MENU</Text>
        <View style={styles.list}>
          <Button title='GUIDE' onPress={showGuide} />
          <Button title='RANGE' onPress={showRange} />
          <Button title='EXIT' onPress={hide} />
        </View>
        <Text style={styles.title}></Text>
      </View>
    </View>
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
  },
  bg: {
    flex: 1,
    backgroundColor: '#000',
    opacity: .25,
    height: height,
    width: width,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    margin: 10,
  },
  list: {
    flex: 1,
    justifyContent: 'center',
  },
})

export default Menu;
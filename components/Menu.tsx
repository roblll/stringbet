import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import MenuButton from './MenuButton';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const contentWidth = width * .55;
const contentHeight = contentWidth * 1056 / 691;
const maxContentWidth = 300;
const maxContentHeight = maxContentWidth * 1056 / 691;

type Props = {
  hide: () => void;
  showGuide: () => void;
  showRange: () => void;
  resetStats: () => void;
}

const Menu: React.FC<Props> = ({ hide, showGuide, showRange, resetStats }) => {
  let [fontsLoaded] = useFonts({
    'CardC': require('../assets/fonts/CARDC___.otf'),
  });

  if (!fontsLoaded) {
    return <View></View>
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.bg} />
        <View style={styles.content}>
          <Text style={styles.title}>MENU</Text>
          <View style={styles.list}>
            <MenuButton title='GUIDE' onPress={showGuide} />
            <MenuButton title='RANGE' onPress={showRange} />
            <MenuButton title='RESET' onPress={resetStats} />
          </View>
          <MenuButton title='EXIT' onPress={hide} />
        </View>
      </View>
    )
  }
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
    maxWidth: maxContentWidth,
    maxHeight: maxContentHeight,
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
    fontFamily: 'CardC',
  },
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Menu;
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import * as Updates from "expo-updates";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const contentWidth = width * .55;
const contentHeight = contentWidth * 1056 / 691;

const Restart = () => {
  let [fontsLoaded] = useFonts({
    'CardC': require('../assets/fonts/CARDC___.otf'),
  });

  let getUpdate = async () => {
    if (!__DEV__) {
      await Updates.fetchUpdateAsync();
    }
  };

  let restart = async () => {
    if (!__DEV__) {
      await Updates.reloadAsync();
    }
  };

  if (!fontsLoaded) {
    return<View></View>
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.bg} />
        <View style={styles.content}>
          <Text style={styles.text}>AN UPDATE IS AVAILABLE. THE APP WILL RESTART.</Text>
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
    backgroundColor: '#fff',
    borderColor: '#0d7854',
    borderWidth: 1,
    borderRadius: width / 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bg: {
    flex: 1,
    backgroundColor: '#000',
    opacity: .25,
    height: height,
    width: width,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    margin: 10,
    fontFamily: 'CardC',
  },
})

export default Restart;
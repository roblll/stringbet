import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import * as Updates from "expo-updates";
import MenuButton from './MenuButton';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const contentWidth = width * .55;
const contentHeight = contentWidth * 1056 / 691;

const Restart = () => {
  let [fontsLoaded] = useFonts({
    'CardC': require('../assets/fonts/CARDC___.otf'),
  });

  const [updateDownloaded, setUpdateDownloaded] = useState<boolean>(false);

  useEffect(()=>{
    getUpdate()
  })

  let getUpdate = async () => {
    if (!__DEV__) {
      await Updates.fetchUpdateAsync();
      setUpdateDownloaded(true)
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
    if (updateDownloaded) {
      return (
        <View style={styles.container}>
          <View style={styles.bg} />
          <View style={styles.content}>
            <Text style={styles.text}>UPDATE DOWNLOADED.</Text>
            <MenuButton title='RESTART' onPress={restart} />
          </View>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.bg} />
          <View style={styles.content}>
            <Text style={styles.text}>DOWNLOADING UPDATE.</Text>
          </View>
        </View>
      )
    }
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
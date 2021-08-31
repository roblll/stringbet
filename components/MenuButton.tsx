import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

const MenuButton = () => {
  let [fontsLoaded] = useFonts({
    'CardC': require('../assets/fonts/CARDC___.otf'),
  });

  if (!fontsLoaded) {
    return <View></View>
  } else {
    return (
      <TouchableOpacity>
        <Text style={styles.text}>BUTTON</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 18,
    margin: 10,
    fontFamily: 'CardC',
  },
})

export default MenuButton;
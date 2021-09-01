import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

type Props = {
  title: string,
  onPress: () => void,
}

const MenuButton: React.FC<Props> = ({ title, onPress }) => {
  let [fontsLoaded] = useFonts({
    'CardC': require('../assets/fonts/CARDC___.otf'),
  });

  if (!fontsLoaded) {
    return <View></View>
  } else {
    return (
      <TouchableOpacity onPress={ onPress }>
        <Text style={styles.text}>{title}</Text>
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
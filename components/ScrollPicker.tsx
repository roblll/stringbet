import React from 'react';
import { View, StyleSheet, Dimensions, Text, Platform } from 'react-native';

const width = Dimensions.get('window').width;
const height = width;

const data: number[] = []
for (let i = 1; i <= 169; i++) {
  data.push(i)
}

export type Props = {
  height?: number,
  width?: number,
  transparentItemRows?: number
}

const ScrollPicker: React.FC<Props> = ({ 
  height = 300, 
  width = 300, 
  transparentItemRows = 3 
}) => {
  let itemHeight = height / (transparentItemRows * 2 + 1);
  if (Platform.OS === 'ios') {
    itemHeight = Math.ceil(itemHeight);
  }

  return (
    <View style={styles.container}>
      <Text>ScrollPicker</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    height: height,
  },
});

export default ScrollPicker;
import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

import { Picker } from '@davidgovea/react-native-wheel-datepicker';

const width = Dimensions.get('window').width;
const height = width;

const data: number[] = []
for (let i = 1; i <= 169; i++) {
  data.push(i)
}

const ScrollPicker = () => {
  return (
    <View style={styles.container}>
      <Picker
        style={styles.picker}
        selectedValue={1}
        pickerData={data}
        onValueChange={value => { console.log(value); }}
      />
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
  picker: {
    width: '100%',
    height: '100%',
    backgroundColor: '#23A484',
  }
});

export default ScrollPicker;
import React, { useState } from 'react';
import { View, StyleSheet, Platform, ScrollView } from 'react-native';

import PickerItem from './PickerItem';

const data: number[] = []
for (let i = 1; i <= 169; i++) {
  data.push(i)
}

export type Props = {
  height?: number,
  width?: number,
  transparentItemRows?: number,
}

const ScrollPicker: React.FC<Props> = ({ 
  height = 300, 
  width = 300, 
  transparentItemRows = 3,
}) => {
  const [itemIndex, setItemIndex] = useState(0)
  let itemHeight = height / (transparentItemRows * 2 + 1);
  if (Platform.OS === 'ios') {
    itemHeight = Math.ceil(itemHeight);
  }

  return (
    <View style={[styles.container, { height, width }]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        snapToInterval={itemHeight}
      >
        <PickerItem label='1' style={{ height: itemHeight}} />
        <PickerItem label='2' style={{ height: itemHeight}} />
        <PickerItem label='3' style={{ height: itemHeight}} />
        <PickerItem label='4' style={{ height: itemHeight}} />
        <PickerItem label='5' style={{ height: itemHeight}} />
        <PickerItem label='6' style={{ height: itemHeight}} />
        <PickerItem label='7' style={{ height: itemHeight}} />
        <PickerItem label='8' style={{ height: itemHeight}} />
        <PickerItem label='9' style={{ height: itemHeight}} />
        <PickerItem label='10' style={{ height: itemHeight}} />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ScrollPicker;
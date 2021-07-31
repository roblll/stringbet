import React, { useState } from 'react';
import { View, Platform, ScrollView } from 'react-native';

import PickerItem from './PickerItem';

export type Props = {
  height?: number;
  width?: number;
  transparentItemRows?: number;
  data: string[];
}

const ScrollPicker: React.FC<Props> = ({ 
  height = 300, 
  width = 300, 
  transparentItemRows = 3,
  data,
}) => {
  const [itemIndex, setItemIndex] = useState(0)
  let itemHeight = height / (transparentItemRows * 2 + 1);
  if (Platform.OS === 'ios') {
    itemHeight = Math.ceil(itemHeight);
  }

  return (
    <View style={{ height, width }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        snapToInterval={itemHeight}
      >
        {data.map(d => {
          return <PickerItem id={d} label={d} style={{ height: itemHeight}} />  
        })}
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          width: '100%',
          top: 0,
          borderBottomWidth: 1,
          height: transparentItemRows * itemHeight,
        }}
        pointerEvents="none" />
      <View
          style={{
            position: 'absolute',
            width: '100%',
            bottom: 0,
            borderTopWidth: 1,
            height: transparentItemRows * itemHeight,
          }}
          pointerEvents="none" />
    </View>
  )
}

export default ScrollPicker;
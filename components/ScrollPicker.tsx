import React, { useState } from 'react';
import { View, Platform, ScrollView } from 'react-native';

import PickerItem from './PickerItem';

export type dataType = {
  value: number;
  label: string;
}

export type Props = {
  height?: number;
  width?: number;
  transparentItemRows?: number;
  data: dataType[];
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

  const fakeItems = (n = 3) => {
    const itemsArr = [];
    for (let i = 0; i < n; i++) {
      itemsArr[i] = {
        value: -1,
        label: '',
      };
    }
    return itemsArr;
  }

  const extendedItems = () => {
    return [
      ...fakeItems(transparentItemRows),
      ...data,
      ...fakeItems(transparentItemRows),
    ];
  }

  const onScroll = () => {
    console.log('onScroll')
  }

  const onMomentumScrollBegin = () => {
    console.log('onMomentumScrollBegin')
  }

  const onMomentumScrollEnd = () => {
    console.log('onMomentumScrollEnd')
  }

  const onScrollBeginDrag = () => {
    console.log('onScrollBeginDrag')
  }

  const onScrollEndDrag = () => {
    console.log('onScrollEndDrag')
  }

  return (
    <View style={{ height, width }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        snapToInterval={itemHeight}
        scrollEventThrottle={0}
        onMomentumScrollBegin={(event) => {
          onMomentumScrollBegin();
        }}
        onMomentumScrollEnd={(event) => {
          onMomentumScrollEnd();
        }}
        onScrollBeginDrag={(event) => {
          onScrollBeginDrag();
        }}
        onScrollEndDrag={(event) => {
          onScrollEndDrag();
        }}
        onScroll={(event) => {
          onScroll();
        }}
      >
        {extendedItems().map((item, index) => {
          return <PickerItem key={index} label={item.label} style={{ height: itemHeight}} />  
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
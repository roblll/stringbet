import React, { useState, useRef } from 'react';
import { View, Platform, ScrollView, NativeSyntheticEvent, NativeScrollEvent, ScrollViewComponent } from 'react-native';

import PickerItem from './PickerItem';

export type dataType = {
  value: number;
  label: string;
}

export type Props = {
  initialSelectedItem?: number;
  height?: number;
  width?: number;
  transparentItemRows?: number;
  data: dataType[];
  setPick: (pick: number) => void
}

const ScrollPicker: React.FC<Props> = ({
  initialSelectedItem = 0,
  height = 300, 
  width = 300, 
  transparentItemRows = 3,
  data,
  setPick,
}) => {

  const scrollViewRef = useRef<ScrollView>(null);

  const [itemIndex, setItemIndex] = useState(0)
  let itemHeight = height / (transparentItemRows * 2 + 1);
  if (Platform.OS === 'ios') {
    itemHeight = Math.ceil(itemHeight);
  }

  const scrollToInitialPosition = () => {
    scrollViewRef.current?.scrollTo({
      y: itemHeight * initialSelectedItem,
    })
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

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const tempIndex = getItemTemporaryIndex(event);
    if (
      itemIndex !== tempIndex &&
      tempIndex >= 0 &&
      tempIndex < data.length
    ) {
      setPick(data[tempIndex].value)
    }
  }

  const onMomentumScrollBegin = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const tempIndex = getItemTemporaryIndex(event)
    if (tempIndex >= 0 && tempIndex < data.length) {
      setPick(data[tempIndex].value)
    }
  }

  const onMomentumScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const tempIndex = getItemTemporaryIndex(event)
    if (tempIndex >= 0 && tempIndex < data.length) {
      setPick(data[tempIndex].value)
    }
  }

  const onScrollBeginDrag = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const tempIndex = getItemTemporaryIndex(event)
    if (tempIndex >= 0 && tempIndex < data.length) {
      setPick(data[tempIndex].value)
    }
  }

  const onScrollEndDrag = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const tempIndex = getItemTemporaryIndex(event)
    if (tempIndex >= 0 && tempIndex < data.length) {
      setPick(data[tempIndex].value)
    }
  }

  const getItemTemporaryIndex = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    return Math.round(
      event.nativeEvent.contentOffset.y / itemHeight,
    );
  }

  return (
    <View style={{ height, width }}>
      <ScrollView
        ref={scrollViewRef}
        onLayout={scrollToInitialPosition}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        snapToInterval={itemHeight}
        scrollEventThrottle={0}
        overScrollMode={"never"}
        bounces={false}
        onMomentumScrollBegin={(event) => {
          onMomentumScrollBegin(event)
        }}
        onMomentumScrollEnd={(event) => {
          onMomentumScrollEnd(event);
        }}
        onScrollBeginDrag={(event) => {
          onScrollBeginDrag(event)
        }}
        onScrollEndDrag={(event) => {
          onScrollEndDrag(event)
        }}
        onScroll={(event) => {
          onScroll(event);
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
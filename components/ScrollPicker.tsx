import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const data: number[] = []
for (let i = 1; i <= 169; i++) {
  data.push(i)
}

const ScrollPicker = () => {
  return (
    <View>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        {data.map(info => <Text key={info}>{info}</Text>)}
      </ScrollView>
    </View>
  )
}

export default ScrollPicker;
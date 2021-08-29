import React from 'react';
import { View, Text, Button } from 'react-native';
import ScrollPicker, { dataType } from '../components/ScrollPicker';

type Props = {
  hide: () => void;
}

let minData: dataType[] = []
for (let i = 1; i <= 169; i++) {
  minData.push({value: i, label: `${i}`})
}

let maxData: dataType[] = []
for (let i = 1; i <= 169; i++) {
  maxData.push({value: i, label: `${i}`})
}

const Range: React.FC<Props> = ({ hide }) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Range</Text>
      <ScrollPicker data={minData} setPick={() => {}} />
      <ScrollPicker data={maxData} setPick={() => {}} />
      <Button title='X' onPress={hide} />
    </View>
  )
}

export default Range;
import React from 'react';
import { View, Text, Button } from 'react-native';

type Props = {
  hide: () => void;
}

const Range: React.FC<Props> = ({ hide }) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Range</Text>
      <Button title='X' onPress={hide} />
    </View>
  )
}

export default Range;
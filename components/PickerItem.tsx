import React from 'react';
import { View, Text } from 'react-native';

export type Props = {
  label: string;
}

const PickerItem: React.FC<Props> = ({ label }) => {
  return (
    <View style={{}}>
      <Text>
        {label}
      </Text>
    </View>
  );
}

export default PickerItem;
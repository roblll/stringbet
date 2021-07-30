import React from 'react';
import { View, Text } from 'react-native';

export type Props = {
  label: string;
  style: {
    height: number
  };
}

const PickerItem: React.FC<Props> = ({ label, style }) => {
  return (
    <View style={{ height: style.height}}>
      <Text>
        {label}
      </Text>
    </View>
  );
}

export default PickerItem;
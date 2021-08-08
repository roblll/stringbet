import React from 'react';
import { View, Text } from 'react-native';

export type Props = {
  key: number;
  label: string;
  style: {
    height: number
  };
}

const PickerItem: React.FC<Props> = ({ label, style }) => {
  return (
    <View style={{ 
      height: style.height, 
      alignItems: 'center', 
      justifyContent: 'center',
    }}>
      <Text
        style={{
          color: '#000',
        }}
      >
        {label}
      </Text>
    </View>
  );
}

export default PickerItem;
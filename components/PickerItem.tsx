import React from 'react';
import { View, Text } from 'react-native';
import { useFonts } from 'expo-font';

export type Props = {
  key: number;
  label: string;
  style: {
    height: number
  };
}

const PickerItem: React.FC<Props> = ({ label, style }) => {
  let [fontsLoaded] = useFonts({
    'CardC': require('../assets/fonts/CARDC___.otf'),
  });

  if (!fontsLoaded) {
    return <View></View>
  } else {
    return (
      <View style={{ 
        height: style.height, 
        alignItems: 'center', 
        justifyContent: 'center',
      }}>
        <Text
          style={{
            fontFamily: 'CardC',
            color: '#093b2c',
            fontWeight: '500',
          }}
        >
          {label}
        </Text>
      </View>
    );
  }
}

export default PickerItem;
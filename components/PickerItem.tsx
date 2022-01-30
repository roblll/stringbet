import React from 'react';
import { View, Text } from 'react-native';
import { useFonts } from 'expo-font';

export type Props = {
  label: string;
}

const PickerItem: React.FC<Props> = ({ label }) => {
  let [fontsLoaded] = useFonts({
    'CardC': require('../assets/fonts/CARDC___.otf'),
  });

  if (!fontsLoaded) {
    return <View></View>
  } else {
    return (
      <Text
        style={{
          fontFamily: 'CardC',
          color: '#093b2c',
          fontWeight: '500',
        }}
      >
        {label}
      </Text>
    );
  }
}

export default PickerItem;
import React from 'react';
import { View, Text } from 'react-native';

type Props = {
  message: string;
  rank: number;
  percentage: number;
}

const Result: React.FC<Props> = ({ message, rank, percentage }) => {
  return (
    <View>
      <Text>{`${message} - rank: ${rank} - percentage: ${percentage}%`}</Text>
    </View>
  )
}

export default Result;
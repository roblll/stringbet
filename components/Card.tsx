import React from 'react';
import { View, Text } from 'react-native';

export type Props = {
  suit: string;
  rank: number;
}

const Card: React.FC<Props> = ({ suit, rank }) => {
  return (
    <View>
      <Text>{rank} {suit}</Text>
    </View>
  )
}

export default Card;
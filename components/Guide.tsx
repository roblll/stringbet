import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

type Props = {
  hide: () => void;
}

const Guide: React.FC<Props> = ({ hide }) => {
  return (
    <TouchableOpacity onPress={hide} activeOpacity={1}>
      <View style={styles.container}>
        <Text>Guide</Text>
      </View>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 200,
    backgroundColor: 'red',
  }
})

export default Guide;
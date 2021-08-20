import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const Title = () => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1} 
      onPress={() => alert('test')}
    >
      <Text>Stringbet</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Title;
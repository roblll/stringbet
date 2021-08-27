import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

type Props = {
  hide: () => void;
}

const Menu: React.FC<Props> = ({ hide }) => {
  return (
    <View style={styles.container}>
      <Text>Menu</Text>
      <Button title='x' onPress={hide} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default Menu;
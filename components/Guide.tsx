import React from 'react';
import { Button, View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';

import { rankings } from '../utils/utils';

console.log(rankings)

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const contentWidth = width * .55;
const contentHeight = contentWidth * 1056 / 691;

type Props = {
  hide: () => void;
}

const Guide: React.FC<Props> = ({ hide }) => {
  return (
    <View style={styles.container}>
      <View style={styles.bg}></View>
      <View style={styles.content}>
        <ScrollView>
          {rankings.map((item, index) => 
            <Text key={index}>{`${index + 1}: ${item}`}</Text>
          )}
        </ScrollView>
        <Button title='close' onPress={hide} />
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    position: 'absolute',
    height: contentHeight,
    width: contentWidth,
    backgroundColor: '#fff',
    borderColor: '#0d7854',
    borderWidth: 1,
    borderRadius: width / 30,
  },
  bg: {
    flex: 1,
    backgroundColor: '#000',
    opacity: .25,
    height: height,
    width: width,
  }
})

export default Guide;
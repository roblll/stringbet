import React from 'react';
import { View, Text, Button, Dimensions, StyleSheet } from 'react-native';
import ScrollPicker, { dataType } from '../components/ScrollPicker';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const contentWidth = width * .55;
const contentHeight = contentWidth * 691 / 1056;

type Props = {
  hide: () => void;
}

let minData: dataType[] = []
for (let i = 1; i <= 169; i++) {
  minData.push({value: i, label: `${i}`})
}

let maxData: dataType[] = []
for (let i = 1; i <= 169; i++) {
  maxData.push({value: i, label: `${i}`})
}

const Range: React.FC<Props> = ({ hide }) => {
  return (
    <View style={styles.container}>
      <View style={styles.bg} />
      <View style={styles.content}>
        <Text>Range</Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <ScrollPicker 
            data={minData} 
            setPick={() => {}} 
            transparentItemRows={1}
            height={100}
            width={100}
          />
          <ScrollPicker 
            data={maxData} 
            setPick={() => {}} 
            transparentItemRows={1}
            height={100}
            width={100}
          />
        </View>
        <Button title='X' onPress={hide} />
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
    borderRadius: width / 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    margin: 10,
    textAlign: 'center',
    fontSize: contentHeight / 9,
    fontWeight: '400',
  },
  bg: {
    flex: 1,
    backgroundColor: '#000',
    opacity: .25,
    height: height,
    width: width,
  }
})

export default Range;
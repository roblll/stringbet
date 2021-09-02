import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Dimensions, StyleSheet, Animated } from 'react-native';
import ScrollPicker, { dataType } from '../components/ScrollPicker';
import { useFonts } from 'expo-font';

import MenuButton from './MenuButton';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const contentWidth = width * .55;
const contentHeight = contentWidth * 1056 / 691;

type Props = {
  minRank: number,
  maxRank: number,
  setRange: (minRank: number, maxRank: number) => void;
}

let minData: dataType[] = []
for (let i = 1; i <= 169; i++) {
  minData.push({value: i, label: `${i}`})
}

let maxData: dataType[] = []
for (let i = 1; i <= 169; i++) {
  maxData.push({value: i, label: `${i}`})
}

interface IAppData {
  curMinRank: number;
  curMaxRank: number;
}

const Range: React.FC<Props> = ({ minRank, maxRank, setRange }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current

  let [fontsLoaded] = useFonts({
    'CardC': require('../assets/fonts/CARDC___.otf'),
  });

  const [state, setState] = useState<IAppData>(() => {
    return({
      curMinRank: minRank - 1,
      curMaxRank: maxRank - 1,
    })
  })

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 250,
        useNativeDriver: true 
      }
    ).start();
  }, [fadeAnim])

  const { 
    curMinRank,
    curMaxRank,
  } = state;

  const setMinRank = (rank: number) => {
    setState({ ...state, curMinRank: rank })
  }

  const setMaxRank = (rank: number) => {
    setState({ ...state, curMaxRank: rank })
  }

  const submit = () => {
    setRange(curMinRank, curMaxRank)
  }

  if (!fontsLoaded) {
    return <View style={styles.container}><View style={styles.bg} /></View>
  } else {
    return (
      <Animated.View style={[styles.container, {opacity: fadeAnim}]}>
        <View style={styles.bg} />
        <View style={styles.content}>
          <Text style={styles.title}>Range</Text>
          <View style={styles.pickers}>
            <ScrollPicker 
              initialSelectedItem={curMinRank}
              data={minData} 
              setPick={setMinRank} 
              transparentItemRows={1}
              height={100}
              width={100}
            />
            <ScrollPicker 
              initialSelectedItem={curMaxRank}
              data={maxData} 
              setPick={setMaxRank} 
              transparentItemRows={1}
              height={100}
              width={100}
            />
          </View>
          <MenuButton title='EXIT' onPress={submit} />
        </View>
      </Animated.View>
    )
  }
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
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    margin: 10,
    fontFamily: 'CardC',
  },
  pickers: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
})

export default Range;
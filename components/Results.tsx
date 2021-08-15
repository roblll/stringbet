import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const contentWidth = width * .55;
const contentHeight = contentWidth * 691 / 1056;

type Props = {
  result: boolean;
  hand: string;
  rank: number;
  percentage: number;
  hide: () => void;
}

const Result: React.FC<Props> = ({ result, hand, rank, percentage, hide }) => {
  const icon = result ? 
               <MaterialIcons 
                name="check" 
                size={contentHeight / 3} 
                color="#23A484" 
               /> : 
               <MaterialIcons 
                name="close" 
                size={contentHeight / 3}
                color="#FC6E51" 
               />
  return (
    <TouchableOpacity style={styles.container} onPress={hide}>
      <View style={styles.bg}></View>
      <View style={styles.content}>
        {icon}
        <Text style={styles.text}>
          {`${hand} is ${rank} (${percentage}%)`}
        </Text>
      </View>
    </TouchableOpacity>
  );
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

export default Result;
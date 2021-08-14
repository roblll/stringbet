import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

type Props = {
  result: boolean;
  hand: string;
  rank: number;
  percentage: number;
}

const Result: React.FC<Props> = ({ result, hand, rank, percentage }) => {
  const icon = result ? 
               <MaterialIcons name="check" size={24} color="#23A484" /> : 
               <MaterialIcons name="close" size={24} color="#FC6E51" />
  return (
    <View style={styles.container}>
      <View style={styles.bg}></View>
      <View style={styles.content}>
        {icon}
        <Text style={styles.text}>
{`${hand} is 
${rank} (${percentage}%)`}
        </Text>
      </View>
    </View>
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
    height: width / 4,
    width: width / 2,
    backgroundColor: '#fff',
    borderColor: '#0d7854',
    borderWidth: 1,
    borderRadius: width / 55,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    margin: 10,
    textAlign: 'center',
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
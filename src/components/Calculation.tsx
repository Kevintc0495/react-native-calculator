import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Calculation = () => {
  const [inNumber, setInNumber] = useState(0);
  const [temporaryNumber, setTemporaryNumber] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.inNumber}>{inNumber}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 15,
    // backgroundColor: 'pink',
  },
  inNumber: {
    fontSize: 55,
    color: '#d7d7d7',
  },
});

export default Calculation;

/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

interface ButtonComponentsProps {
  backgroundColor: string;
  color: string;
  name: string;
}

const ButtonComponents = ({
  backgroundColor,
  color,
  name,
}: ButtonComponentsProps) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        width: name === '0' ? 152 : 72,
        backgroundColor,
      }}>
      <Text style={{...styles.text, color}}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 72,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    marginVertical: 8,
    marginHorizontal: 8,
  },
  text: {
    fontSize: 30,
    // fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default ButtonComponents;

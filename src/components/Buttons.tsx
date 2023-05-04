import React from 'react';
import {View, StyleSheet} from 'react-native';
import {btns} from '../data';
import ButtonComponents from './ButtonComponents';

const Buttons = () => {
  return (
    <View style={styles.contained}>
      <View style={styles.contained2}>
        {btns.map(({name, backgroundColor, textColor}) => (
          <ButtonComponents
            key={name}
            name={name}
            backgroundColor={backgroundColor}
            color={textColor}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contained: {
    width: '100%',
    height: '55%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contained2: {
    maxWidth: '95%',
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export default Buttons;

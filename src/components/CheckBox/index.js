import React from 'react';
import {Pressable, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const CheckBox = ({checked, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, checked ? styles.checkedBox : {}]}>
      {checked ? <View style={styles.innerSquare} /> : null}
    </Pressable>
  );
};

export default React.memo(CheckBox);

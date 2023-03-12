import React from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
const PlusIcon = () => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('AddTask');
  };
  return (
    <Pressable style={styles.container} hitSlop={8} onPress={onPress}>
      <Text style={styles.plus}>+</Text>
    </Pressable>
  );
};

export default React.memo(PlusIcon);

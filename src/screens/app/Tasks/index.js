import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Button from '../../../components/Button';
const Tasks = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Tasks</Text>
    </SafeAreaView>
  );
};

export default React.memo(Tasks);

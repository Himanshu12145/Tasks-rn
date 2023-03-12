import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Button from '../../../components/Button';
const Onboarding = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>AddTAsk</Text>
    </SafeAreaView>
  );
};

export default React.memo(Onboarding);

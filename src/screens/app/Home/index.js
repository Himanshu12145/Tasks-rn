import {Image, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './styles';
import Button from '../../../components/Button';
const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default React.memo(Home);

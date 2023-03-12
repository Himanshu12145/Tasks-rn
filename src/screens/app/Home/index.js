import {Image, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './styles';
import Button from '../../../components/Button';
import Header from '../../../components/Header';
const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Home" />
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default React.memo(Home);

import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Header from '../../../components/Header';
import PlusIcon from '../../../components/PlusIcon';
import Title from '../../../components/Title';
const Tasks = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Tasks" />
      <ScrollView>
        <Title type="thin">To Do Tasks</Title>
      </ScrollView>
      <PlusIcon />
    </SafeAreaView>
  );
};

export default React.memo(Tasks);

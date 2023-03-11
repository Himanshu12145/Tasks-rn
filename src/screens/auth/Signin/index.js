import {SafeAreaView, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Button from '../../../components/Button';
const Signin = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Button>Login</Button>
    </SafeAreaView>
  );
};

export default React.memo(Signin);

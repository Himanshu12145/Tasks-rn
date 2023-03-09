import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import Button from '../../../components/Button';
const Signup = () => {
  return (
    <View style={styles.container}>
      <Button>Create new account</Button>
    </View>
  );
};

export default React.memo(Signup);
